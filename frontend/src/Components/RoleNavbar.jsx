import React from "react";
import { Link } from "react-router-dom";

export default function RoleNavbar({ isloggedin }) {
  if (!isloggedin) {
    return (
      <>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Recent
            Book
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> New
            Book
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Old
            Book
          </a>
        </li>
        <li className="nav-item ml-auto">
          <a className="nav-link active" href="#">
            <i
              className="fa-solid fa-shopping-cart"
              style={{ color: "#63E6BE" }}
            ></i>{" "}
            Cart
          </a>
        </li>
      </>
    );
  } else if (localStorage.getItem("role") === "Customer") {
    return (
      <>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Recent
            Book
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> New
            Book
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Old
            Book
          </a>
        </li>
        <li className="nav-item ml-auto">
          <Link className="nav-link active" to="/cart">
            <i
              className="fa-solid fa-shopping-cart"
              style={{ color: "#63E6BE" }}
            ></i>{" "}
            Cart
          </Link>
        </li>
      </>
    );
  }
  return (
    <>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Recent
          Book
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> New Book
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Old Book
        </a>
      </li>
      {/* <Link to="/login" className="btn btn-success">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link> */}
      <li className="nav-item">
        <Link className="nav-link active" to="/addbook">
          <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Add Book
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/addcategory">
          <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Add
          Category
        </Link>
      </li>
    </>
  );
}
