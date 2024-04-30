import React, { useState, useEffect } from "react";
import axios from "axios"; // You may need to install axios for making HTTP requests;
import { API_BASE_URL } from "../API_Configuration/apiconfig";

const CustomerProfile = () => {
  const [customer, setCustomer] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const customerId = 3;

  useEffect(() => {
    // Fetch customer data from your backend API
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/customer/${customerId}`
        ); // Adjust the URL to match your backend API
        setCustomer(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    };

    fetchCustomer();
  }, [customerId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send updated customer data to backend for saving changes
      await axios.put(`/api/customers/${customerId}`, formData); // Adjust the URL to match your backend API
      setEditing(false);
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src="profile-picture-url.jpg"
            alt="Profile"
            className="img-fluid rounded-circle mb-3"
          />
        </div>
        <div className="col-md-8">
          <h2 className="mb-3">Customer Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                readOnly={!editing}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly={!editing}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                readOnly={!editing}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                readOnly={!editing}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {editing ? (
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-info"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h3>Addresses</h3>
          <ul>
            <p>
              <strong>Address:</strong>
            </p>
            <p>
              <strong>Landmark:</strong>
            </p>
            <p>
              <strong>City:</strong>
            </p>
            <p>
              <strong>State:</strong>
            </p>
            <p>
              <strong>Pincode:</strong>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
