import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import Cas7avgust from "./components/Cas7avgust";

function App() {
  const [allData, setAllData] = useState([]);
  const fetchData = () => { fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((someData) => someData.filter((el)=>...........)  )
     .then((data) => setAllData(data.products));
   };
  const[isSwitchOn,setlsSwitchOn]=useState(false)};
  console.log(isSwitchOn);
  return (
    <div className="app">
      {/*{allData.length&&(
        <div style={{marginTop:"300px",textAlign:"center"}}> 
<h1>Nema podataka</h1>
<button onClick={()=>fetchData()}>Fetchaj podatke</button>
      
    </div>
     ) }
    // <div className="app">
    //   <Card marka="Jordan" opis="Duboke,nepromovice patike" cena="12900" />
    //   <Card marka="Nike" opis="Udobne patike,povoljne cene" cena="10200" />
    //   <Card marka="Adidas" opis="Velika povoljnost,garancija zadovoljavajuca" cena="15000" />
    //   <Card marka="Puma" opis="Povoljne patike,visokog kvaliteta" cena="9800" />
    // </div>
   // <div>
     // <Cas7avgust />
   // </div>
  );
}

export default App;
