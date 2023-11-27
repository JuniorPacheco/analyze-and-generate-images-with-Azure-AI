import React from "react";

function App() {
  const value = "World";
  return (
    <main>
      <h1>Computer vision</h1>

      <form>
        <label>
          <span>Insert URL or type prompt:</span>
          <input type="text" />
        </label>
        <button>Analyze</button>
        <button>Generate</button>
      </form>
    </main>
  );
}

export default App;
