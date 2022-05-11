import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Products from "./component/Product/Products";
import Nilai from './component/apollo Client/Query'
function App() {
  const user = true
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="products/" element={<Products />} />
        <Route path="products/:category/" element={<ProductList />} />
        <Route path="product/:id/" element={<Product/>} />
        <Route path="cart/" element={<Cart />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="cart/" element={<Cart />} />
        {/* <Route path="/login" element={<Navigate replace to="/" />} />
        <Route path="/register" element={<Navigate replace to="/" />} /> */}
       
        
      </Routes>
    </Router>
  // <Nilai/>

  )
}

export default App;




//2:40:32 waiting