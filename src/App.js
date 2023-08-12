import { Route, Routes } from "react-router-dom";

import { Layout } from "./pages/Layout";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Departments } from "./pages/Departments";
import { ProductsList } from "./pages/ProductsList";
import { SingleProduct } from "./pages/SingleProduct";
import { AddProduct } from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
