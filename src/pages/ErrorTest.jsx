import { useState } from "react";

function ErrorTest() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("This is a test error!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Error Boundary Test</h1>
        <button
          onClick={() => setShouldError(true)}
          className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
        >
          Trigger Error
        </button>
      </div>
    </div>
  );
}

export default ErrorTest;
