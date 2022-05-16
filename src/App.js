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
import FormPembeli from "./component/FormPembelian/FormPembeli/FormPembeli";
import HomeProduct from "./component/Product/HomeProduct";
import MutasiPembelian from "./component/MutasiPembelian/MutasiPembelian";
import MutationFinish from "./component/MutasiPembelian/MutationFinish";

function App() {
  const user = true
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="products/" element={<HomeProduct />} />
        <Route path="products/:category/" element={<ProductList />} />
        <Route path="product/:id/" element={<Product/>} />
        <Route path="cart/" element={<Cart />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="cart/" element={<Cart />} />
        <Route path="mutation/" element={<MutationUsers />} />
        <Route path="mutasiPembelian/" element={<MutasiPembelian />} />
        <Route path="MutationFinish/" element={<MutationFinish />} />


      </Routes>
     </Router>
    // <CreateProduct/>
    // <CreateUser/>
    // <MutationUsers/>
    // <Planets/>
    // <FormPembeli/>
    // <MutasiPembelian/>
  )
}

export default App;




//2:40:32 waiting