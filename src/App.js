import './App.css';
import Formulario from './components/Formulario';
import Mascotas from './components/Mascotas';
import Movies from './components/Movies';
import { StarWars } from './components/StarWars';

const App = () => {
  return (
    <div className="App">
      <h3>Star Wars API</h3>
      <StarWars />
      <hr />
      <Movies movies={["El Padrino", "Star Wars", "Toy Story"]} />
      <Mascotas />
      <h1>Formulario 1</h1>
      <Formulario nombre="Francisco" />

      <h3>Formulario 2</h3>
      <Formulario nombre="Pancho" />
    </div>
  );
}

export default App;
