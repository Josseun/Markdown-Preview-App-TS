import { marked } from "marked";

marked.setOptions({
  breaks: true,
  gfm: true,
});

interface PreviewProps {
  text: string;
}

function Preview({ text }: PreviewProps) {
  const getHTML = () => {
    // marked can return a Promise if async is enabled, but standard usage returns string
    return { __html: marked(text) as string };
  };

  return (
    <div
      className="prose prose-lg max-w-none break-all w-full h-screen"
      dangerouslySetInnerHTML={getHTML()}
    />
  );
}

export default Preview;