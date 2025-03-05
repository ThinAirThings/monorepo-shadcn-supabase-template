import { marked } from "marked";
import { memo, useMemo } from "react";
import ReactMarkdown from "react-markdown";

function parseMarkdownIntoBlocks(markdown: string): string[] {
    const tokens = marked.lexer(markdown);
    return tokens.map((token) => token.raw);
}

const MemoizedMarkdownBlock = memo(
    ({ content }: { content: string }) => {
        return (
            <div
                className="prose prose-invert max-w-none break-words whitespace-pre-wrap
                    prose-p:leading-normal prose-p:my-3 
                    prose-headings:my-3 
                    prose-li:my-2 
                    prose-ul:my-2 prose-ul:space-y-2
                    [&_br]:content-[''] [&_br]:block [&_br]:mb-3
                    [&_ul]:list-none [&_ul]:pl-3
                    [&_li]:relative [&_li]:pl-4
                    [&_li]:before:content-['•'] [&_li]:before:absolute [&_li]:before:left-0 
                    [&_li]:before:text-orange-400"
            >
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        );
    },
    (prevProps, nextProps) => {
        if (prevProps.content !== nextProps.content) return false;
        return true;
    },
);

MemoizedMarkdownBlock.displayName = "MemoizedMarkdownBlock";

export const MemoizedMarkdown = memo(
    ({ content, id }: { content: string; id: string }) => {
        const blocks = useMemo(
            () => parseMarkdownIntoBlocks(content),
            [content],
        );

        return (
            <div className="space-y-1 w-full">
                {blocks.map((block, index) => (
                    <MemoizedMarkdownBlock
                        content={block}
                        key={`${id}-block_${index}`}
                    />
                ))}
            </div>
        );
    },
);

MemoizedMarkdown.displayName = "MemoizedMarkdown";
