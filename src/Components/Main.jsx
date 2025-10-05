import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import Preview from "./Preview";

function Main() {
  const [markdownText, setMarkdownText] = useState(
    "# Welcome!\n\nStart typing..."
  );

  const handleTextChange = (newText) => {
    setMarkdownText(newText);
  };

  return (
    <div className="h-full flex flex-col w-full">
      <div className="flex flex-col justify-center bg-gray-900 text-white  w-full p-5">
        <div className="text-3xl font-black font-serif text-white">
          Markdown Preview App
        </div>
        <div className="font-medium font-serif">
          Write beautiful markdown with live preview
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row text-white border-4 border-gray-800 h-full">
        <section
          aria-label="Markdown editor"
          className="w-full lg:w-1/2 bg-white border-b lg:border-b-0 lg:border-r border-gray-300 text-gray-900"
        >
          <MarkdownEditor text={markdownText} onChange={handleTextChange} />
        </section>
        <section
          aria-label="Markdown preview"
          className="w-full lg:w-1/2 bg-gray-50 lg:h-full h-fit pt-10 px-10 text-gray-900 [&_li::marker]:text-black"
        >
          <Preview text={markdownText} />
        </section>
      </div>
    </div>
  );
}

export default Main;
