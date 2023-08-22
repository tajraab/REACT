import React, { useState } from "react";
import "./Cas7avgust.css";
import Button from "./Button";
import { customProducts } from "./data/data";
import Card from "./Card";

function Cas7avgust() {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  return (
    <div classname="app">
      <div name="card">
        <h1>BROJ CELZIJUSA</h1>
        <button onClick={() => console.log(getRandomArbitrary(-36, 48))}>
          Promeni temperaturu
        </button>
      </div>
    </div>
  );

  // const [allData, setAllData] = useState([]);
  // const fetchData = () => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     // .then((someData) => someData.filter)
  //     .then((data) => setAllData(data.products));
  // };
  // console.log(allData);
  //return (
  // <div className="app">
  //{
  //     /*{allData.map((product)=>
  //       <Card title={product.title}
  //       description={product.description}
  //       price={product.price}
  //       />
  //       )}}*/
  //   }
  //   {
  //     /*{!allData.length&&<h1>Nema podataka,kliknite da biste</h1>}*/
  //   }
  //   {/* //     {allData.length ? ( */}
  //      <h1>BROJ CELZIJUSA</h1>
  //   //     ) : (
  //   //       <h1>NEMA PODATAKA KLIKNITE, DA BISTE</h1>
  //   //     )}
  //   //     <div style={{ marginTop: "300px" }}>
  //   //       <button onClick={() =><Promeni temperaturu></Promeni></button>
  //   //     </div>
  //   //     {allData.map((product, i) => (
  //   //       <Card
  //   //         key={i}
  //   //         title={product.title}
  //   //         description={product.description}
  //   //         price={product.price}
  //   //       />
  //      ))}
  //      </div>
  //   // );
  // }
  // ///kada mapiramo sve koristimo {product.description,product.stock itd}
  // //na button moramo da setujemo state od do.
  // const shangeNumber = () => {
  //   const a = Math.random(10123 - 2) * 100;
}
{
  /* //mat.random */
}
{
  /* //<h1 style{isSwitchOn ?{color:"red"}} */
}
//   const [broj, setBroj] = useState(0);
//   return (
{
  /* //     <div classname="app">
//       <button onClick={() => setBroj(broj + 1)}>Povecati broj</button>
//       <button onClick={() => setBroj(broj - 1)}>Smanjiti broj</button>
//       {broj}
//     </div>
//   ); */
}

{
  /* // function Cas7avgust() { */
}
{
  /* //     const [allData,]
// }
//   const [broj, setBroj] = useState([10, 13, 16, 19, 22, 25, 28, 31]);

//   function buttonClicked(broj) {
//     alert(`${broj}ste kliknuli`); */
}
{
  /* //   }
//   console.log(customProducts);
//   return (
//     <div classname="app">
      // {customProducts.map((product) => (
//         <Card */
}
{
  /* //           title={product.title}
//           description={product.description}
//           price={product.price}
//         />
//       ))}
//     </div> */
}
//   );
//}
{
  /* return (
     <div className="app">
     {broj.map((el) => { */
}
//         return <Button title={el} onPress={() => buttonClicked(el)} />;
//       })}
//     </div>
//   );
// }
// function Cas7avgust() {
//   const [broj, setBroj] = useState([22, 38, 12, 10, 29, 15]);
//   function buttonClicked(broj) {
//     alert(`${broj}ste kliknuli`);
//   }
//   return (
//     <div classname="mapp">
//       {broj.map((el) => {
//         return <Button title={el} onPress={() => buttonClicked(el)} />;
//       })}
//     </div>
//   );
// }
// function Cas7avgust(){
//   const [broj,setBroj]=useState([20,12,10,11,30]);
//   function buttonClicked(broj){
//     alert(`${broj }ste kliknuli`)
//   }
//   return(
//     <div classname="mapp">
//       {broj.map((el=>{return<Button title={el}onPress={()=>buttonClicked(el)}/>
//        } ) }
// </div>

// );
// /}

export default Cas7avgust;
