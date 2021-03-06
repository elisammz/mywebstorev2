import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";
//Bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
//Font styles
import "./App.css";
//Animations
import "animate.css";
// Components
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/styles/Global";
import Navbar from "./components/styles/Navbar.styled";
import Footer from "./components/styles/Footer.styled";
// Amplify
import Amplify from "aws-amplify";
// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const exclusionArray = ["/cart", "/checkout"];

const App = () => {
  const location = useLocation();
  const isCartReendering = location.pathname === "/cart";

  return (
    <>
      <GlobalStyles />
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ScrollToTop>
      {!isCartReendering && <Footer />}
    </>
  );
};

export default App;
