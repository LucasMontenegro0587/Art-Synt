import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import { FaShoppingCart } from "react-icons/fa";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from './contexts/CartContext';
import CheckoutUseForm from './components/CheckoutUseForm';
import CartView from './components/CartView';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="h-screen overflow-auto">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<ItemListContainer />} />
            <Route path="/Productos/:category" element={<ItemListContainer />} />
            <Route path="/Producto/:id" element={<ItemDetailContainer />} />
            <Route path="/Contacto" element={<Contact />} />

            <Route path='/Carro' element={<CartView />} />
            <Route path='/Checkout' element={<CheckoutUseForm />} />

            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;