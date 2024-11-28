import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error from './components/Error';
import { CartProvider } from './contexts/CartContext';
import CartView from './components/CartView';

const App = () => {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes path="/Productos" element={<ItemListContainer />} />
        <Routes path="/Productos/:id" element={<ItemDetailContainer />} />
        <Routes path="/Contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App;

