import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import Main from "./Components/Main";
import NotFound from "./pages/NotFound";
import ErrorTest from "./pages/ErrorTest";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/error-test" element={<ErrorTest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
