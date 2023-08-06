import React from "react";
import "./card.css";
function Card(props) {
  const { cena, marka } = props;
  //console.log(props,"Ovo je props)
  const nekepatike = "marka";
  return (
    <div className="card">
      <img src="patike.jpg"></img>
      <h1>{marka}</h1>
      <h5>Duboke,nepromocive patike,narandzaste boje </h5>
      <p>Cena artikla:14.990</p>
    </div>
  );
}
export default Card;
//npm star
