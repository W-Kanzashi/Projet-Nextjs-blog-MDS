// Import the markdown file and convert to html with remark
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";

export default async function markdownToHtml(markdown: any): Promise<string> {
  const result = unified()
    .use(remarkParse) // Parse markdown.
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough)
    .use(remarkRehype) // Turn it into HTML.
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeSanitize)
    .use(rehypeStringify) // Serialize HTML.
    .processSync(markdown);

  return result.toString();
}
