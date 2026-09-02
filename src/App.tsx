import "./App.css";
import HandlePreviousButton from "./components/HandlePreviousButton";

function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center flex-col bg-gray-700">
        <h1>React-useRef-ClickHistoryApp</h1>
        <HandlePreviousButton />
      </div>
    </>
  );
}

export default App;
