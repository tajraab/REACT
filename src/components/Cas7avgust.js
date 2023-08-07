import React, { useState } from "react";
import "./Cas7avgust.css";
import Button from "./Button";
function Cas7avgust() {
  const [broj, setBroj] = useState(0);
  return (
    <div classname="app">
      <button onClick={() => setBroj(broj + 1)}>Povecati broj</button>

      <button onClick={() => setBroj(broj - 1)}>Smanjiti broj</button>
      {broj}
    </div>
  );
}

export default Cas7avgust;
