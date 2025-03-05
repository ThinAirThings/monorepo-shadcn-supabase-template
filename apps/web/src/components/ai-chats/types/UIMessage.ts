import type { JSONValue } from 'ai';

// Base types for tool invocations
interface BaseToolInvocation {
  toolCallId: string;
  toolName: string;
  args: JSONValue;
}

interface ToolInvocationPartialCall extends BaseToolInvocation {
  state: 'partial-call';
}

interface ToolInvocationCall extends BaseToolInvocation {
  state: 'call';
}

interface ToolInvocationResult extends BaseToolInvocation {
  state: 'result';
  result: JSONValue;
}

export type ToolInvocation = 
  | ToolInvocationPartialCall 
  | ToolInvocationCall 
  | ToolInvocationResult;

// Message part types
interface TextUIPart {
  type: "text";
  text: string;
}

interface ReasoningUIPart {
  type: "reasoning";
  reasoning: string;
}

interface ToolInvocationUIPart {
  type: "tool-invocation";
  toolInvocation: ToolInvocation;
}

export type MessagePart = TextUIPart | ReasoningUIPart | ToolInvocationUIPart;

// Attachment type
export interface Attachment {
  name?: string;
  contentType?: string;
  url: string;
}

// Main UIMessage type
export interface UIMessage {
  id: string;
  role: 'system' | 'user' | 'assistant' | 'data';
  createdAt?: Date;
  content: string;
  annotations?: Array<JSONValue>;
  parts: Array<MessagePart>;
  experimental_attachments?: Array<Attachment>;
}
