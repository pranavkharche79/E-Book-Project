import React from "react";
import "../CSS/Home.css";
import RoleNavbar from "./RoleNavbar";
import { useSelector } from "react-redux";

export default function Home() {
  const isloggedin = useSelector((state) => state.user.isloggedin);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i
              class="fa-sharp fa-solid fa-house"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <RoleNavbar isloggedin={isloggedin} />
            </ul>

            <form className="d-flex" role="search">
              <button className="btn btn-light my-2 my-sm-0" type="submit">
                <i class="fa-sharp fa-solid fa-gears"></i> Setting
              </button>
              <span>&nbsp;&nbsp;</span>
              <button className="btn btn-light my-2 my-sm-0" type="submit">
                <i class="fa-solid fa-square-phone"></i> Contact Us
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container-fluid back-img">
        <h2 className="text-center text-danger">Ebook Management System</h2>
      </div>
    </>
  );
}
