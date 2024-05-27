import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, logout } from "../store/LoginSlice";
import { enqueueSnackbar } from "notistack";
import avtar from "../Images/avtar.jpg";

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
      autoHideDuration: 1500,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("picture")) {
      dispatch(
        login({
          email: localStorage.getItem("email"),
          id: localStorage.getItem("id"),
          role: localStorage.getItem("role"),
          picture: localStorage.getItem("picture"),
          isgoogle: true,
          loggedIn: localStorage.getItem("loggedIn"),
        })
      );
    } else {
      dispatch(
        login({
          email: localStorage.getItem("email"),
          id: localStorage.getItem("id"),
          role: localStorage.getItem("role"),
          loggedIn: localStorage.getItem("loggedIn"),
        })
      );
    }
  }, []);

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
            <Link to="/customerprofile">
              {isloggedin ? (
                isgoogle ? (
                  <>
                    <>
                      <img
                        src={localStorage.getItem("picture")}
                        style={{ width: "35px", borderRadius: "50%" }}
                        onError={(e) => {
                          console.log("Inside error in profile");
                          e.target.onerror = null;
                          e.target.src = `${avtar}`;
                        }}
                        alt="USER"
                      ></img>
                    </>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        backgroundColor: "#FF6F61",
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        display: "inline-flex", // Use inline-flex for better centering
                        justifyContent: "center", // Horizontally center content
                        alignItems: "center", // Vertically center content
                        color: "white",
                        fontSize: "20px", // Increase font size for better visibility
                        fontWeight: "bold", // Use "bold" instead of "bolder" for consistency
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
                      }}
                    >
                      {user.email.charAt(0).toUpperCase()}
                    </span>
                  </>
                )
              ) : (
                <></>
              )}
            </Link>
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
