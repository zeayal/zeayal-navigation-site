import { marked } from "marked";
import "./github-markdown.css";

async function MarkDownRender({
  markdownContent,
}: {
  markdownContent: string;
}) {
  // Use remark to convert markdown into HTML string

  const contentHtml = marked(markdownContent);

  return (
    <div
      className="markdown-body min-h-screen min-w-[300px] p-10"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}

export default MarkDownRender;
