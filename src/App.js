import logo from "./logo.svg";
import "./App.css";

function App() {
  const customStyle = {
    color: "blue",
    fontSize: "20px",
  };
  const onClickHandler = () => console.log("console log iz funkcije");
  return (
    <div>
      <h1 style={customStyle} onClick={onClickHandler}>
        Tajra
      </h1>
      <button onClick={() => console.log("Tajra")}>Klikni</button>
    </div>
  );
}

export default App;
