import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/hands-logo.png'; // Asegúrate de tener el logo en la carpeta images

function App() {
  return (
    <div>
      {/* Componente Navbar */}
      <Navbar />
      {/* Contenedor de ítems */}
      <main className="text-center mt-4">
        <ItemListContainer greetings="Bienvenidos" texto="primer-prop" />
      </main>
    </div>
  );
}

export default App;
