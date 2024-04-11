import React from "react";

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
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <i class="fa-solid fa-book" style={{ color: "#63E6BE" }}></i> Add Book
        </a>
      </li>
    </>
  );
}
