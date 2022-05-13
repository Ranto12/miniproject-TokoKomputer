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
import CreateProduct from "./component/CreateProduct/CreateProduct";
import CreateUser from './component/GetData/index'
import MutationUsers from "./component/apollo Client/MutationUsers/MutationUsers";
function App() {
  const user = true
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="products/" element={<Products />} />
    //     <Route path="products/:category/" element={<ProductList />} />
    //     <Route path="product/:id/" element={<Product/>} />
    //     <Route path="cart/" element={<Cart />} />
    //     <Route path="login/" element={<Login />} />
    //     <Route path="register/" element={<Register />} />
    //     <Route path="cart/" element={<Cart />} />
    //     <Route path="mutation/" element={<MutationUsers />} />

    //   </Routes>
    // </Router>
    // <CreateProduct/>
    // <CreateUser/>
    <MutationUsers/>
  )
}

export default App;




//2:40:32 waiting