import React from "react";

interface CodeBlockProps {
  language: string;
  title?: string;
  children: string;
}

export default function CodeBlock({ language, title, children }: CodeBlockProps) {
  return (
    <div className="code-block my-4">
      {title && (
        <div className="code-header">
          <span>📄 {title}</span>
          <span className="text-xs opacity-60">{language.toUpperCase()}</span>
        </div>
      )}
      <pre className="text-sm leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}
