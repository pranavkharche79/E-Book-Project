/* global google */
import React, { useEffect } from "react";
import registration from "../Images/registration.jpeg";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/LoginSlice";
import { enqueueSnackbar } from "notistack";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    console.log("encoded jwt: ", response.credential);
    var userobject = jwtDecode(response.credential);
    console.log(userobject);
    // localStorage.setItem("email", userobject.email);
    // localStorage.setItem("picture", userobject.picture);
    dispatch(
      login({
        name: userobject.name,
        email: userobject.email,
        picture: userobject.picture,
        loggedIn: true,
        isgoogle: true,
      })
    );
    enqueueSnackbar("Login Successfully", {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
    navigate("/");
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "907540073277-32lcm26s3gfltgbb9h84urnqts7ri7rk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("logindiv"), {
      theme: "filled_black",
      size: "large",
      text: "continue_with",
      shape: "pill",
    });
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "17A2B8" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-1">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1"
                      // style={{ backgroundColor: "yellow" }}
                    >
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-5">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div
                            className="form-outline flex-fill mb-0"
                            style={{
                              borderStyle: "outset",
                              borderColor: "#E5E5E2",
                            }}
                          >
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Enter full name"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="femaleGender"
                              value="option1"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="femaleGender"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              value="option2"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="maleGender"
                            >
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="otherGender"
                              value="option3"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div
                            className="form-outline flex-fill mb-0"
                            style={{
                              borderStyle: "outset",
                              borderColor: "#E5E5E2",
                            }}
                          >
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Enter Email ID"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            className="form-outline flex-fill mb-0"
                            style={{
                              borderStyle: "outset",
                              borderColor: "#E5E5E2",
                            }}
                          >
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Create New Password"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div
                            className="form-outline flex-fill mb-0"
                            style={{
                              borderStyle: "outset",
                              borderColor: "#E5E5E2",
                            }}
                          >
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Repeat Password"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3c"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>

                      {/* <div className="my-4" /> */}
                      {/* <button
                        className="btn btn-lg btn-block btn-primary"
                        style={{ backgroundColor: "#dd4b39" }}
                        type="button"
                        onClick={handleCallbackResponse}
                      >
                        <i className="fab fa-google me-2"></i> Google
                      </button> */}
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                      <p className="mt-4 d-flex justify-content-center mb-8 mt-4">
                        <div id="logindiv">
                          {/* Google login button will be rendered here */}
                        </div>
                      </p>
                      <img
                        src={registration}
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
