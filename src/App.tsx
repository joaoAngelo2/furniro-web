import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import { ShopPage } from "./pages/Shop";
import SingleProductPage from "./pages/SingleProduct/SingleProductPage";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout"
import { Protect, SignIn } from "@clerk/react-router";
import { RedirectToSignIn } from "@clerk/react-router";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart/>} />
        
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contact" element={
          <Protect fallback={<RedirectToSignIn/>}>
            <Contact/>
          </Protect>
          } />
        <Route path="/checkout" element={
          <Protect fallback={<RedirectToSignIn/>}>
            <Checkout/>
          </Protect>
          } />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
