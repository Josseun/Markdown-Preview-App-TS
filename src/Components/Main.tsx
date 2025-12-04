import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import Preview from "./Preview";

function Main() {
  const [markdownText, setMarkdownText] = useState<string>(
    "# Welcome!\n\nStart typing..."
  );

  const handleTextChange = (newText: string) => {
    setMarkdownText(newText);
  };

  // ... rest of return statement remains identical ...
  return (
    <div className="h-full flex flex-col w-full">
      {/* ... header ... */}
      <div className="flex-1 flex flex-col lg:flex-row text-white h-full">
        <section className="w-full lg:w-1/2 bg-white border-b lg:border-b-0 lg:border-r border-gray-300 text-gray-900">
          <MarkdownEditor text={markdownText} onChange={handleTextChange} />
        </section>
        <section className="w-full lg:w-1/2 bg-gray-50 lg:h-full h-fit pt-15 px-10 text-gray-900 [&_li::marker]:text-black">
          <Preview text={markdownText} />
        </section>
      </div>
    </div>
  );
}

export default Main;