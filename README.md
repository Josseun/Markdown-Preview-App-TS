# Markdown Live Editor

A comprehensive real-time Markdown editor built with React that provides instant preview of formatted content. This application demonstrates modern React patterns, routing, error handling, and accessible UI design.

## Features

- **Real-time Preview**: See your markdown rendered instantly as you type
- **Formatting Toolbar**: Quick access buttons for common markdown syntax
  - Text formatting (Bold, Italic)
  - Headings (H1-H4)
  - Lists (Ordered and Unordered)
  - Links and Images
  - Code blocks
- **Side-by-side Layout**: Editor and preview displayed together on desktop
- **Responsive Design**: Fully functional on mobile and desktop devices
- **Error Boundary**: Graceful error handling with custom fallback UI
- **Custom 404 Page**: User-friendly page for undefined routes
- **Accessible**: Semantic HTML and ARIA attributes throughout




## Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1.  npm create vite@latest markdown-editor-react -- --template react
2. cd markdown-editor-react
3. npm install
4. npm install tailwindcss @tailwindcss/vite @tailwindcss/typography
5. npm install marked  
6. npm install react-router-dom
7. npm install lucide-react
8. npm run dev
9. http://localhost:5173

## Available Scripts

### `npm run dev`
Starts the development server at `http://localhost:5173`

### `npm run build`
Creates an optimized production build in the `dist/` folder

### `npm run preview`
Previews the production build locally

## Project Structure
src/

├── components/

│   ├── ErrorBoundary.jsx    # Error boundary 

│   ├── Main.jsx             # Main app container with state

│   ├── MarkdownEditor.jsx   # Editor with toolbar

│   └── Preview.jsx          # Markdown preview renderer

├── pages/
│   ├── NotFound.jsx         # 404 page

│   └── ErrorTest.jsx        # Error boundary test 

├── App.jsx                  # Root component with routing

└── main.jsx                 # Application entry point

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Main | Markdown editor (home page) |
| `/error-test` | ErrorTest | Error boundary testing |
| `*` | NotFound | 404 page for invalid URLs |


## Technology Stack

### Core Technologies

- **React 19+** - UI framework with functional components and hooks
- **React Router v7** - Client-side routing and navigation
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Tailwindcss/typography** — for enhanced markdown rendering

### Key Libraries

- **marked.js** - Markdown parsing and HTML conversion
- **Lucide React** - Icon library for toolbar buttons

### Architecture Decisions

### Why marked.js for Markdown Parsing?

**Options Evaluated:**
1. **marked.js** ✅ (chosen)
2. react-markdown
3. markdown-it

**Decision Rationale:**

Chose `marked.js` because:
- Lightweight (~20KB minified)
- Simple API: `marked(text)` returns HTML
- Full GitHub Flavored Markdown support
- Configurable options for line breaks
- Fast parsing performance

**Configuration:**
```javascript
marked.setOptions({
  breaks: true,    // Single line breaks create <br> tags
  gfm: true        // GitHub Flavored Markdown enabled
});
```

- **Styling**: Tailwind CSS for rapid development and consistent design system

- **State Management**: React's built-in `useState` hooks - sufficient for this application's scope
- **Error Handling**: Class-based Error Boundary component (required by React's error boundary API)


## Usage

### Basic Editing
1. Type markdown syntax in the left editor panel
2. See real-time HTML preview in the right panel
3. Changes appear instantly as you type

### Using the Toolbar
- **Bold/Italic**: Select text first, then click the button
- **Headings**: Place cursor on line, click H1-H4 to add markers
- **Lists**: Select multiple lines, click list button to format all
- **Links/Images**: Selected text becomes the link/alt text, URL placeholder is auto-selected
- **Code Blocks**: Wraps selection in triple backticks

### Testing Error Boundary
Navigation button `Test Error Boundary` and click to Navigate to `/error-test` and click "Trigger Error" to see error handling in action

## Screenshots

### Editor View

![Editor Screenshot](./assets/Editor-View.png)
_Main editor interface with toolbar and live preview_

### Error Boundary

![Error Boundary](./assets/Error-Boundary.png)
_Custom error handling UI_

### 404 Page

![404 Page](./assets/404-Page.png)
_Custom not found page_

### Mobile Editor

![Mobile Editor Screenshot](./assets/editor-mobile.png)

_Main editor interface with toolbar on mobile_

### Mobile Preview

![Mobile Preview Screenshot](./assets/preview-mobile.png)

_Main live preview interface on mobile_

## Browser Support

**Desktop:**
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 14+

**Mobile:**
- iOS Safari 14+
- Chrome Mobile (Android)


## Known Issues and Limitations

- Markdown content is not persisted (resets on page reload)
- No dark mode toggle
- Toolbar buttons don't work after external link navigation and browser back

## Future Improvements

- [ ] Add localStorage persistence for markdown content
- [ ] Implement dark mode
- [ ] Add export to PDF/HTML functionality
- [ ] Add API integration for saving/loading documents
- [ ] Implement keyboard shortcuts for formatting
- [ ] Add syntax highlighting for code blocks in editor
- [ ] Add word count and character count


## Author

**ODUSANYA JOSHUA OLUWASEUN**
- GitHub: [@Josseun](https://github.com/Josseun)
- Email: Josseun123@gmail.com

## Acknowledgments

- **Marked.js** - Fast markdown parser
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon library
- **React Team** - For the amazing framework
