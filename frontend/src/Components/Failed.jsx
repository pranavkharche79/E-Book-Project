import React, { useState, useEffect } from "react";

const Failed = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 10000);

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="alert alert-danger d-flex flex-column align-items-center text-center"
        style={{
          height: "200px",
          width: "50%",
          border: "2px solid red",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "1.5rem",
        }}
      >
        <div className="d-flex justify-content-center align-items-center mb-4">
          <i
            className="fas fa-exclamation-circle"
            style={{ fontSize: "3rem", color: "red" }}
          ></i>
        </div>
        <h4 className="mt-2 mb-1">Transaction Failed!</h4>
        <p>
          Oops! Something went wrong. Don't worry, our team is on it and will
          get back to you shortly. You'll be redirected to the Home Page in{" "}
          <span style={{ color: "darkred", fontWeight: "bold" }}>
            {seconds}
          </span>{" "}
          seconds.
        </p>
      </div>
    </div>
  );
};

export default Failed;
