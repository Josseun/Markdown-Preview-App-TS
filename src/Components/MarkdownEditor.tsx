import {
  ListOrdered,
  List,
  Link as LinkIcon,
  Image,
  Code,
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from "lucide-react";
import { useRef } from "react";

// Define Props Interface
interface MarkdownEditorProps {
  text: string;
  onChange: (newText: string) => void;
}

function MarkdownEditor({ text, onChange }: MarkdownEditorProps) {
  // Type the Ref as an HTMLTextAreaElement, initialized null
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wrapSelection = (before: string, after: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return; // Guard clause

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = text.substring(start, end);

    const newText =
      text.substring(0, start) +
      before +
      selectedText +
      after +
      text.substring(end);

    onChange(newText);

    setTimeout(() => {
      const newCursorPos =
        start + before.length + selectedText.length + after.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
  };

  const handleHeading = (level: number) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const cursorPos = textarea.selectionStart;
    let lineStart = text.lastIndexOf("\n", cursorPos - 1) + 1;
    const prefix = "#".repeat(level) + " ";

    const newText =
      text.substring(0, lineStart) + prefix + text.substring(lineStart);

    onChange(newText);

    setTimeout(() => {
      const newCursorPos = lineStart + prefix.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
  };

  const handleUnorderedList = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = text.substring(start, end);
    const lines = selectedText.split("\n");
    const listItems = lines.map((line) => `- ${line}`).join("\n");

    const newText = text.substring(0, start) + listItems + text.substring(end);

    onChange(newText);
    setTimeout(() => {
      const newCursorPos = start + listItems.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
  };

  const handleOrderedList = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = text.substring(start, end);
    const lines = selectedText.split("\n");

    const listItems = lines
      .map((line, index) => {
        return `${index + 1}. ${line}`;
      })
      .join("\n");

    const newText = text.substring(0, start) + listItems + text.substring(end);

    onChange(newText);

    setTimeout(() => {
      const newCursorPos = start + listItems.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
      textarea.focus();
    }, 0);
  };

  const handleLink = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = text.substring(start, end);
    const linkText = selectedText || "link text";
    const linkMarkdown = `[${linkText}](url)`;

    const newText =
      text.substring(0, start) + linkMarkdown + text.substring(end);

    onChange(newText);

    setTimeout(() => {
      const urlStart = start + linkText.length + 3;
      const urlEnd = urlStart + 3;
      textarea.setSelectionRange(urlStart, urlEnd);
      textarea.focus();
    }, 0);
  };

  const handleImage = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const selectedText = text.substring(start, end);
    const altText = selectedText || "alt text";
    const imageMarkdown = `![${altText}](image-url)`;

    const newText =
      text.substring(0, start) + imageMarkdown + text.substring(end);

    onChange(newText);

    setTimeout(() => {
      const urlStart = start + altText.length + 4;
      const urlEnd = urlStart + 9;
      textarea.setSelectionRange(urlStart, urlEnd);
      textarea.focus();
    }, 0);
  };

  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap items-center bg-black/80 text-white w-full px-4 py-3 gap-3">
          {/* Note: changed Link to LinkIcon to avoid collision if react-router Link is used, 
               though in your code you imported Link from lucide-react directly */}
          <div className="flex gap-1">
            <button
              onClick={() => wrapSelection("**", "**")}
              aria-label="Make text bold"
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Bold size={20} />
            </button>
            <button
              onClick={() => wrapSelection("*", "*")}
              aria-label="Make text italic"
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Italic size={20} />
            </button>
          </div>
          <div className="w-px h-6 bg-gray-500"></div>
          <div className="flex gap-1">
            {/* ... headings buttons ... */}
            <button
              onClick={() => handleHeading(1)}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Heading1 size={20} />
            </button>
            <button
              onClick={() => handleHeading(2)}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Heading2 size={20} />
            </button>
            <button
              onClick={() => handleHeading(3)}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Heading3 size={20} />
            </button>
            <button
              onClick={() => handleHeading(4)}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Heading4 size={20} />
            </button>
          </div>
          <div className="w-px h-6 bg-gray-500"></div>
          <div className="flex gap-1">
            <button
              onClick={handleUnorderedList}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <List size={20} />
            </button>
            <button
              onClick={handleOrderedList}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <ListOrdered size={20} className="mr-2" />
            </button>
          </div>
          <div className="w-px h-6 bg-gray-500"></div>
          <div className="flex gap-1">
            <button
              onClick={handleLink}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <LinkIcon size={20} />
            </button>
            <button
              onClick={handleImage}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Image size={20} />
            </button>
            <button
              onClick={() => wrapSelection("```\n", "\n```")}
              className="p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <Code size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col w-full justify-around items-center mt-6">
        <textarea
          ref={textareaRef}
          className="h-full w-full p-4 resize-none outline-none focus:outline-none focus:ring-0 border-0 font-mono"
          placeholder="Enter your markdown text here"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Markdown input"
        ></textarea>
      </div>
    </div>
  );
}

export default MarkdownEditor;
