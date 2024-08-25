import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtlis" />
      <div className="container my-3">
        {/* <Textform heading="Enter the text to analyze below"/> */}
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
