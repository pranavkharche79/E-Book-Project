import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Reset Password
  const navigator = useNavigate();

  const handleGenerateOTP = async () => {
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    console.log(email);

    // Call the backend API after validation passes
    await axios
      .post(`${API_BASE_URL}/api/login/generate-otp/${email}`)
      .then((response) => {
        if (response.status === 200) {
          alert("OTP sent to your email");
          setStep(2);
        } else {
          alert("Error generating OTP");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("User not found with this email");
      });
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch("/validate-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      if (response.ok) {
        alert("OTP verified! Now reset your password.");
        setStep(3);
      } else {
        alert("Invalid OTP");
        setStep(3);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch("/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });
      if (response.ok) {
        alert("Password updated successfully");
        navigator("/login");
      } else {
        alert("Error updating password");
        navigator("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section style={{ backgroundColor: "#eaf6ff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Forgot Password</h3>

                  {step === 1 && (
                    <>
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleGenerateOTP}
                      >
                        Generate OTP
                      </button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        className="btn btn-success"
                        onClick={handleVerifyOTP}
                      >
                        Verify OTP
                      </button>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter new password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        className="btn btn-success"
                        onClick={handleResetPassword}
                      >
                        Update Password
                      </button>
                    </>
                  )}

                  <hr className="my-3" />
                  <div className="text-center">
                    <p>
                      Back to <Link to="/login">Login</Link>
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
