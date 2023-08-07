import React from "react";
import "./card.css";
import Button from "./Button";
function Card(props) {
  const { cena, marka, opis } = props;
  //console.log(props,"Ovo je props)
  const nekepatike = "marka";
  return (
    <div className="card">
      <img src="patike.jpg"></img>
      <h1>{marka}</h1>
      <h1>{nekepatike}</h1>
      <h5>Duboke,nepromocive patike,narandzaste boje </h5>
      <p>{cena} -cena artikla</p>
      <Button title={cena} />
    </div>
  );
}
export default Card;
//npm star
