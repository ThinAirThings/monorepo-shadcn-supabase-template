DROP TYPE "public"."message_part_types";--> statement-breakpoint
CREATE TYPE "public"."message_part_types" AS ENUM('text', 'reasoning', 'tool_invocation');--> statement-breakpoint
DROP TYPE "public"."tool_invocation_states";--> statement-breakpoint
CREATE TYPE "public"."tool_invocation_states" AS ENUM('partial_call', 'call', 'result');