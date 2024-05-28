import React, { useEffect, useState } from "react";

const Success = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="alert alert-success d-flex flex-column align-items-center text-center"
        style={{
          height: "200px",
          width: "50%",
          border: "2px solid green",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "1.5rem",
        }}
      >
        <div className="d-flex justify-content-center align-items-center mb-4">
          <i
            className="fas fa-check-circle"
            style={{ fontSize: "2rem", color: "green" }}
          ></i>
        </div>
        <h4 className="mt-4 mb-1">Transaction Successful!</h4>
        <p>
          Thanks for Visiting our Website. Redirecting to Home Page in{" "}
          <span style={{ color: "darkred", fontWeight: "bold" }}>
            {seconds}
          </span>{" "}
          Seconds.
        </p>
      </div>
    </div>
  );
};

export default Success;
