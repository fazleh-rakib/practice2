import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="text-3xl fnt bold">This is Header </h2>
      <p>This is a paragraph</p>
      <Pricing />
    </div>
  );
}

export default App;
