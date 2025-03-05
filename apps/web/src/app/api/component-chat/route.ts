import { openai } from "@ai-sdk/openai";
import {
    createDataStreamResponse,
    generateObject,
    Message,
    streamText,
} from "ai";
import { chatbotSystemPrompt } from "@/app/api/component-chat/chatbot-prompt";
import { createServerClient } from "@thinair-monorepo-template/supabase/createServerClient";
import { Database } from "@thinair-monorepo-template/supabase/types";
import { graphql } from "@/gql";
import { apolloClient } from "@/lib/apollo/apollo-client";
import { z } from "zod";
import { componentPrompt } from "./component-prompt";
import axios from "axios";
// Allow streaming responses up to 30 seconds
export const maxDuration = 10;

const InsertAiChat = graphql(`
  mutation InsertAiChat($input: [AiChatsInsertInput!]!) {
    insertIntoAiChatsCollection(objects: $input) {
      records {
        id
      }
    }
  }
`);

const InsertAiChatMessage = graphql(`
  mutation InsertAiChatMessage($input: [AiChatMessagesInsertInput!]!) {
    insertIntoAiChatMessagesCollection(objects: $input) {
      records {
        id
      }
    }
  }
`);

export async function POST(req: Request) {
    try {
        const supabase = await createServerClient<Database>();
        const user = (await supabase.auth.getUser()).data.user;
        if (!user) {
            return new Response("Internal Server Error", { status: 500 });
        }
        const {
            messages,
            id: chatId,
            componentId,
        } = (await req.json()) as {
            messages: Message[];
            id: string;
            componentId: string;
        };
        const existingChat =
            (
                await supabase
                    .from("ai_chats")
                    .select("*")
                    .eq("id", chatId)
                    .single()
            ).data ||
            (
                await apolloClient.mutate({
                    mutation: InsertAiChat,
                    variables: {
                        input: [
                            {
                                id: chatId,
                                name: "Component Chat",
                                componentId: componentId,
                            },
                        ],
                    },
                })
            ).data?.insertIntoAiChatsCollection?.records[0];
        if (!existingChat) {
            return new Response("Internal Server Error", { status: 500 });
        }
        return createDataStreamResponse({
            execute: async (datastream) => {
                const codeOutput = await generateObject({
                    model: openai("gpt-4o"),
                    schema: z.object({
                        componentCode: z.string(),
                    }),
                    system: componentPrompt,
                    prompt: `
                        ${messages[messages.length - 1]?.content}
                    `,
                });
                // Stream the LLM response
                const result = streamText({
                    model: openai("gpt-4o"), // Use your chosen model name
                    system: chatbotSystemPrompt, // The system prompt from `prompt.ts`
                    messages, // User messages so far
                    maxTokens: 5,
                    onFinish: async (result) => {
                        await apolloClient.mutate({
                            mutation: InsertAiChatMessage,
                            variables: {
                                input: [
                                    {
                                        chatId: chatId,
                                        content:
                                            messages[messages.length - 1]
                                                ?.content ?? "",
                                        role: "user",
                                        
                                    },
                                    {
                                        chatId: chatId,
                                        content: result.text,
                                        role: "assistant",
                                    },
                                ],
                            },
                        });
                    },
                });

                const buildResponse = await axios.post(
                    "http://localhost:5000/build-component",
                    {
                        componentId,
                        componentCode: codeOutput.object.componentCode,
                    },
                );
                console.log(buildResponse.data);
                result.mergeIntoDataStream(datastream);
            },
            onError: (error: unknown) => {
                console.error(error);
                return "unknown error";
            },
        });
    } catch (error) {
        console.log(error);
        console.error(error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
