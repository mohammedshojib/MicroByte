import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import QandA from "./components/QandA";
import About from "./components/About";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
import Footer from "./components/Footer";
import { createContext, useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import CheckOut from "./components/CheckOut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyOrder from "./components/MyOrder";
import Review from "./components/Review";
import Users from "./components/Users";
// import useAdmin from "./Hooks/useAdmin";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Payment from "./components/Payment";

export const productContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  // const [user, loading2, errorHook] = useAuthState(auth);
  // const [admin] = useAdmin(user);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <productContext.Provider value={[products, setProducts]}>
      <div className="App">
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route index element={<MyOrder />} />
              <Route path="review" element={<Review />} />
              <Route path="users" element={<Users />} />
              <Route path="payment/:id" element={<Payment />} />
            </Route>
            <Route path="/q&a" element={<QandA />} />
            <Route
              path="/product/:id"
              element={
                <RequireAuth>
                  <ProductDetails />
                </RequireAuth>
              }
            />
            <Route
              path="/checkout/:id"
              element={
                <RequireAuth>
                  <CheckOut />
                </RequireAuth>
              }
            />
          </Routes>

          <Footer />
        </Header>
      </div>
      <ToastContainer />
    </productContext.Provider>
  );
}

export default App;