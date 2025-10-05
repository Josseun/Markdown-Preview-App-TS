import { marked } from "marked";

marked.setOptions({
  breaks: true,
  gfm: true,
});

function Preview({ text }) {
  const getHTML = () => {
    return { __html: marked(text) };
  };

  return (
    <div
      className="prose prose-lg max-w-none break-all w-full h-full"
      dangerouslySetInnerHTML={getHTML()}
    />
  );
}

export default Preview;
