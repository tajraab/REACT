import React, { useState } from "react";
import "./Cas7avgust.css";
import Button from "./Button";
// function Cas7avgust() {
//   const [broj, setBroj] = useState(0);
//   return (
//     <div classname="app">
//       <button onClick={() => setBroj(broj + 1)}>Povecati broj</button>

//       <button onClick={() => setBroj(broj - 1)}>Smanjiti broj</button>
//       {broj}
//     </div>
//   );
// }
// function Cas7avgust() {
//   const [broj, setBroj] = useState([10, 13, 16, 19, 22, 25, 28, 31]);
//   function buttonClicked(broj) {
//     alert(`${broj}ste kliknuli`);
//   }
//   return (
//     <div className="app">
//       {broj.map((el) => {
//         return <Button title={el} onPress={() => buttonClicked(el)} />;
//       })}
//     </div>
//   );
// }
function Cas7avgust() {
  const [broj, setBroj] = useState([22, 38, 12, 10, 29, 15]);
  function buttonClicked(broj) {
    alert(`${broj}ste kliknuli`);
  }
  return (
    <div classname="mapp">
      {broj.map((el) => {
        return <Button title={el} onPress={() => buttonClicked(el)} />;
      })}
    </div>
  );
}

export default Cas7avgust;
