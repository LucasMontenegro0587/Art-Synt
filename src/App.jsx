import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/hands-logo.png'; // Asegúrate de tener el logo en la carpeta images

function App() {
  return (
    <div>
      <img src={logo} alt="Logo de la tienda" className="cyberpunk-logo" />
      <h1 className="text-neon">Art-Synt</h1>
      <p className="text-neon">Explora lo último en tecnología y estilo Cyberpunk. Productos únicos a un clic de distancia</p>
      {/* Componente Navbar */}
      <NavBar />
      {/* Contenedor de ítems */}
      <main className="text-center mt-4">
        <ItemListContainer greeting="Bienvenidos" texto="primer-prop" />
      </main>
    </div>
  );
}

export default App;
