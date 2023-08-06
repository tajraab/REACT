import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <Card marka="Jordan" cena="12900" />
      <Card marka="Nike" cena="10200" />
      <Card marka="Adidas" cena="15000" />
      <Card marka="Puma" cena="9800" />
    </div>
  );
}

export default App;
