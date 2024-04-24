import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddBook from "./Components/AddBook";
import AddCategory from "./Components/AddCategory";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/addcategory" element={<AddCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
