import React from "react";
import registration from "../Images/registration.jpeg";

export default function Register() {
  return (
    <>
      <section style={{ backgroundColor: "#eee;" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px;" }}>
                <div class="card-body p-md-1">
                  <div class="row justify-content-center">
                    <div
                      class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1"
                      // style={{ backgroundColor: "yellow" }}
                    >
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div
                            class="form-outline flex-fill mb-0"
                            style={{
                              borderStyle: "outset",
                              borderColor: "#E5E5E2",
                            }}
                          >
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              placeholder="Enter full name"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 class="mb-0 me-4">Gender: </h6>

                          <div class="form-check form-check-inline mb-0 me-4">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="femaleGender"
                              value="option1"
                              required
                            />
                            <label class="form-check-label" for="femaleGender">
                              Female
                            </label>
                          </div>

                          <div class="form-check form-check-inline mb-0 me-4">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              value="option2"
                              required
                            />
                            <label class="form-check-label" for="maleGender">
                              Male
                            </label>
                          </div>

                          <div class="form-check form-check-inline mb-0">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="otherGender"
                              value="option3"
                              required
                            />
                            <label class="form-check-label" for="otherGender">
                              Other
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div
                            class="form-outline flex-fill mb-0"
                            style={{
                              borderStyle: "outset",
                              borderColor: "#E5E5E2",
                            }}
                          >
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              placeholder="Enter Email ID"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            class="form-outline flex-fill mb-0"
                            style={{
                              borderStyle: "outset",
                              borderColor: "#E5E5E2",
                            }}
                          >
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              placeholder="Create New Password"
                              required
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div
                            class="form-outline flex-fill mb-0"
                            style={{
                              borderStyle: "outset",
                              borderColor: "#E5E5E2",
                            }}
                          >
                            <input
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                              placeholder="Repeat Password"
                              required
                            />
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            required
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                      </form>

                      <div class="my-4" />
                      <button
                        class="btn btn-lg btn-block btn-primary"
                        style={{ backgroundColor: "#dd4b39;" }}
                        type="submit"
                      >
                        <i class="fab fa-google me-2"></i> Sign up with google
                      </button>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={registration}
                        class="img-fluid"
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
