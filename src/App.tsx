import "./App.css";
import Slider from "./components/Slider";
import { ListOfProducts } from "./utils/ListOfProducts";

function App() {
  return (
    <div className="App">
      <h1>Examen práctico – “Carrusel de productos”</h1>
      <Slider slides={ListOfProducts} />
    </div>
  );
}

export default App;
