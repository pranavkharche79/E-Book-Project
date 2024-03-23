import React from "react";
import "../CSS/Login.css";
import { Link } from "react-router-dom";
import { Input, Ripple, initMDB } from "mdb-ui-kit";

export default function Login() {
  initMDB({ Input, Ripple });

  return (
    <>
      <section style={{ backgroundColor: "#508bfc;" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem;" }}
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Sign in</h3>
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
                    />
                  </div>
                  <button
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                  <div class="my-4" />
                  <button
                    class="btn btn-lg btn-block btn-primary"
                    style={{ backgroundColor: "#dd4b39;" }}
                    type="submit"
                  >
                    <i class="fab fa-google me-2"></i> Sign in with google
                  </button>
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
