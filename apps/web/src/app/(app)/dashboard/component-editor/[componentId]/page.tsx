'use client'
import { ComponentChat } from "@/components/components/component-chat"
import { ChatInput } from "@/components/ai-chats/ai-chats-input"
import { NodeKeyProvider } from "@/context/node-key-provider"
import { graphql } from "@/gql"
import { useApolloClient, useFragment, useQuery } from "@apollo/client"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@thinair-monorepo-template/ui/components/resizable"
import { useParams } from "next/navigation"
import invariant from "tiny-invariant"
import { useChat } from "@ai-sdk/react"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, createContext, useContext } from "react"
import { produce } from "immer"
import { Frame } from "@ark-ui/react"

const ComponentEditorPageQuery = graphql(`
    query ComponentEditorPageQuery($componentId: UUID!) {
        componentsCollection(filter: {id: {eq: $componentId}}) {
            edges {
                node {
                    id
                    name
                    aiChatsCollection {
                        edges {
                            node {
                                id
                                ...ComponentChatFragment
                            }
                        }
                    }
                }
            }
        }
    }
`)

const IFrameContext = createContext<HTMLIFrameElement | null>(null) 

export const useIFrame = () => {
    return useContext(IFrameContext)
}

export default function ComponentEditorPage() {
    const { componentId } = useParams()
    const {cache} = useApolloClient()
    invariant(componentId, "Component ID is required")
    const { data, loading } = useQuery(ComponentEditorPageQuery, {
        variables: { componentId: componentId as string },
    })
    const aiChatNodeKey = data?.componentsCollection?.edges[0]?.node?.aiChatsCollection?.edges?.[0]?.node
    const {id: chatId} = useChat({
        id: aiChatNodeKey && 'id' in aiChatNodeKey ? aiChatNodeKey.id : undefined,
        generateId: () => uuidv4()
    })
    const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null)
    useEffect(() => {
        if (loading) return
        cache.updateQuery({
            query: ComponentEditorPageQuery,
            variables: { componentId: componentId as string },
        }, (existingData) => produce(existingData, (draft) => {
            const componentDraft = draft?.componentsCollection?.edges[0]?.node
            invariant(componentDraft, "Component not found")
            if (componentDraft.aiChatsCollection?.edges.length) return
            componentDraft.aiChatsCollection = {
                __typename: 'AiChatsConnection',
                edges: [{
                    __typename: 'AiChatsEdge',
                    node: {
                        __typename: 'AiChats',
                        id: chatId as string,
                        aiChatMessagesCollection: {
                            __typename: 'AiChatMessagesConnection',
                            edges: []
                        }
                    }
                }]
            }
            return draft
        }))
    }, [chatId, data, loading])
    if (!data) return null
    return (
        <IFrameContext.Provider value={iframeRef}>
            <NodeKeyProvider node={{__typename: 'Components', id: componentId as string}}>
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={25} minSize={10}>
                        <NodeKeyProvider node={{__typename: 'AiChats', id: chatId}}>
                            <ComponentChat />
                        </NodeKeyProvider>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel>
                    <Frame
                        ref={setIframeRef}
                        className="h-full w-full"
                        sandbox="allow-scripts allow-same-origin"
                        onMount={() => {
                            const doc = iframeRef?.contentDocument;
                            if (!doc) return;

                            // Create HTML structure and inject resources
                            doc.open();
                            doc.write(/*html*/`
                                <!doctype html>
                                <html>
                                    <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Component | Powered by Bun</title>
                                    <link rel="icon" type="image/x-icon" href="https://bun.sh/favicon.ico">
                                    <link rel="stylesheet" href="http://localhost:5000/components/${componentId}/dist/react-app.css" crossorigin="anonymous">
                                    </head>
                                    <body>
                                    <div id="root"></div>
                                    <script type="module" src="http://localhost:5000/components/${componentId}/dist/react-app.js" crossorigin="anonymous"></script>
                                    <script>
                                        window.addEventListener('message', (event) => {
                                            if (event.data.type === 'reload') {
                                                // Reload CSS and JS with cache busting
                                                const cssLink = document.querySelector('link[rel="stylesheet"]');
                                                const jsScript = document.querySelector('script[type="module"]');
                                                
                                                if (cssLink) {
                                                    cssLink.href = cssLink.href.split('?')[0] + '?t=' + Date.now();
                                                }
                                                
                                                if (jsScript) {
                                                    const newScript = document.createElement('script');
                                                    newScript.type = 'module';
                                                    newScript.src = jsScript.src.split('?')[0] + '?t=' + Date.now();
                                                    newScript.crossOrigin = 'anonymous';
                                                    jsScript.remove();
                                                    document.body.appendChild(newScript);
                                                }
                                                
                                                console.log("Hot reloaded CSS and JS");
                                            }
                                        });
                                    </script>
                                    </body>
                                </html>
                            `);
                            doc.close();
                        }}
                        >
                        <div id="root" />
                        </Frame>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </NodeKeyProvider>
        </IFrameContext.Provider>
    )
}