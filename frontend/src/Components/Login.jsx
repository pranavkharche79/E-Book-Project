/* global google */
import React, { useEffect, useState } from "react";
import "../CSS/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Input, Ripple, initMDB } from "mdb-ui-kit";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../store/LoginSlice";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

export default function Login() {
  initMDB({ Input, Ripple });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

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

  const Submithandler = (e) => {
    e.preventDefault();
    console.log("User: ", user);
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    axios
      .post("http://localhost:8000/api/login/validate", formData)
      .then((res) => {
        console.log("Backend:", res.data);
        const ob = res.data;
        dispatch(
          login({
            email: ob.email,
            id: ob.id,
            role: ob.role,
            loggedIn: true,
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
      })
      .catch((error) => {
        console.log("Error: ", error);
        enqueueSnackbar("Invalid Credentials", {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        navigate("/login");
      });
  };

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:
        "907540073277-32lcm26s3gfltgbb9h84urnqts7ri7rk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("logindiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "eaf6ff" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Sign in</h3>
                  <form onSubmit={Submithandler}>
                    Email:
                    <div
                      data-mdb-input-init
                      class="form-outline mb-4"
                      style={{ borderStyle: "outset", borderColor: "#E5E5E2" }}
                    >
                      <input
                        type="email"
                        id="typeEmailX-2"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setuser({ ...user, email: e.target.value });
                        }}
                        placeholder="Enter Email id"
                        required
                      />
                    </div>
                    Password:
                    <div
                      data-mdb-input-init
                      class="form-outline mb-4"
                      style={{ borderStyle: "outset", borderColor: "#E5E5E2" }}
                    >
                      <input
                        type="password"
                        id="typePasswordX-2"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setuser({ ...user, password: e.target.value });
                        }}
                        placeholder="Enter Password"
                        required
                      />
                    </div>
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" class="btn btn-primary btn-lg">
                        Login
                      </button>
                    </div>
                  </form>
                  {/* google login */}

                  <div
                    id="logindiv"
                    className="mt-4 d-flex justify-content-center"
                  ></div>

                  <hr class="my-3" />
                  <div class="text-center">
                    <p>
                      Not a member? <Link to="/register">Register</Link>
                    </p>
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
