import { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import markdownToHtml from "lib/markdownToHtml";

interface PropsType {
  title: string;
  content: string;
}

export default function DisplayResult({
  title,
  content,
}: PropsType): JSX.Element {
  const [displayResult, setDisplayResult] = useState("");

  const ConvertMarkdown = async () => {
    const html = await markdownToHtml(content);
    setDisplayResult(html);
  };

  // Refresh the converted html markdown dom
  useEffect(() => {
    ConvertMarkdown();
  });

  return (
    <>
      <div className="prose lg:prose-xl xl:prose-2xl">
        <Typography variant="h1" component="h2">
          {title}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: displayResult }} />
      </div>
    </>
  );
}
