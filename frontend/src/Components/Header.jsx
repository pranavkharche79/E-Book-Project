import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/LoginSlice";
import { enqueueSnackbar } from "notistack";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const isloggedin = useSelector((state) => state.user.isloggedin);
  const isgoogle = useSelector((state) => state.user.isgoogle);

  const logouthandler = () => {
    dispatch(logout());
    enqueueSnackbar("Logout Successfully", {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3 text-success">
            <Link to="/">
              <h3>
                <i
                  class="fa-sharp fa-solid fa-book"
                  style={{ color: "#63E6BE" }}
                ></i>
                Ebooks
              </h3>
            </Link>
          </div>
          <div className="col-md-6">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="col-md-3">
            {isloggedin ? (
              isgoogle ? (
                <>
                  <>
                    <img
                      src={user.picture}
                      style={{ width: "35px", borderRadius: "50%" }}
                    ></img>
                  </>
                </>
              ) : (
                <>
                  <span
                    style={{
                      backgroundColor: "rgb(92,107,192)",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      display: "inline-block",
                      textAlign: "center",
                      color: "white",
                      lineHeight: "30px",
                      fontSize: "16px", // Adjust font size as needed
                      fontWeight: "bolder", // Adjust font weight as needed
                    }}
                  >
                    {user.email.charAt(0).toUpperCase()}
                  </span>
                </>
              )
            ) : (
              <></>
            )}
            {/* {isgoogle && (
              <img
                src={user.picture}
                style={{ width: "35px", borderRadius: "50%" }}
              ></img>
            )} */}
            {isloggedin ? (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={logouthandler} className="btn btn-success">
                  <i className="fas fa-sign-in-alt"></i> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-success">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
                <span>&nbsp;&nbsp;</span>
                <Link to="/register" className="btn btn-primary">
                  <i className="fas fa-user-plus"></i> Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
