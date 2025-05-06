import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";

import Login from "./components/Login";
import Applayout from "./pages/Applayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="app" element={<Applayout />} />
        <Route path="home" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
