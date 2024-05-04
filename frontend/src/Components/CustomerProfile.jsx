import React, { useState, useEffect } from "react";
import axios from "axios"; // You may need to install axios for making HTTP requests;
import { API_BASE_URL } from "../API_Configuration/apiconfig";
import { useSelector } from "react-redux";
import avtar from "../Images/avtar.jpg";

const CustomerProfile = () => {
  const [customer, setCustomer] = useState(null);
  const [editing, setEditing] = useState(false);
  const [addressEditing, setAddressEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [addressFormData, setaddressFormData] = useState({});
  const user = useSelector((state) => state.user.user);
  const isloggedin = useSelector((state) => state.user.isloggedin);
  const isgoogle = useSelector((state) => state.user.isgoogle);
  const customerId = localStorage.getItem("id");

  useEffect(() => {
    // Fetch customer data from your backend API
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/customer/${customerId}`
        ); // Adjust the URL to match your backend API
        setCustomer(response.data);
        setFormData(response.data.customer);
        if (response.data.address) {
          setaddressFormData(response.data.address);
        }
        console.log("Customer data= ", response.data);
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

  const handleAddressInputChange = (e) => {
    setaddressFormData({
      ...addressFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Customer= ", formData);
    try {
      // Send updated customer data to backend for saving changes
      await axios.put(
        `${API_BASE_URL}/api/customer?customerId=${customerId}`,
        formData
      ); // Adjust the URL to match your backend API
      setEditing(false);
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    console.log("address= ", addressFormData);
    try {
      // Send updated customer data to backend for saving changes
      await axios.put(
        `${API_BASE_URL}/api/customer/address?customerId=${customerId}`,
        addressFormData
      ); // Adjust the URL to match your backend API
      setAddressEditing(false);
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
        <div
          className="col-md-4 text-center"
          style={{
            display: "flex", // Center content horizontally
            justifyContent: "center", // Center content horizontally
            alignItems: "center", // Center content vertically
            // height: "5cm", // Set height to 5cm
            // width: "5cm", // Set width to 5cm
          }}
        >
          {isloggedin ? (
            isgoogle ? (
              <>
                <img
                  src={user.picture}
                  style={{
                    width: "50%", // Fill the container width
                    height: "50%", // Fill the container height
                    objectFit: "cover", // Maintain aspect ratio
                    borderRadius: "50%", // Make the image circular
                  }}
                  onError={(e) => {
                    console.log("Inside error in profile");
                    e.target.onerror = null;
                    e.target.src = `${avtar}`;
                  }}
                  alt="USER"
                />
              </>
            ) : (
              <>
                <span
                  style={{
                    backgroundColor: "#FF6F61",
                    width: "50%", // Fill the container width
                    height: "50%", // Fill the container height
                    display: "flex", // Use flexbox for centering
                    justifyContent: "center", // Center content horizontally
                    alignItems: "center", // Center content vertically
                    borderRadius: "50%", // Make it circular
                    color: "white",
                    fontSize: "60px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {user.email.charAt(0).toUpperCase()}
                </span>
              </>
            )
          ) : (
            <></>
          )}
        </div>

        <div className="col-md-8">
          <h2 className="mb-3">Customer Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                readOnly={!editing}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email<span style={{ color: "red" }}> *(Not Changable)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                readOnly={!editing}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender<span style={{ color: "red" }}> *</span>
              </label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                readOnly={!editing}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {editing ? (
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-info"
                onClick={(e) => {
                  e.preventDefault();
                  setEditing(true);
                }}
              >
                Edit Profile
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4 text-center"></div>
        <div className="col-md-8">
          <h2 className="mb-3">Address Information</h2>
          <form onSubmit={handleAddressSubmit}>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="adrr"
                value={addressFormData.adrr}
                onChange={handleAddressInputChange}
                readOnly={!addressEditing}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="landmark" className="form-label">
                Landmark<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="landmark"
                name="landmark"
                value={addressFormData.landmark}
                onChange={handleAddressInputChange}
                readOnly={!addressEditing}
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City<span style={{ color: "red" }}> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={addressFormData.city}
                    onChange={handleAddressInputChange}
                    readOnly={!addressEditing}
                    required={addressEditing}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State<span style={{ color: "red" }}> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={addressFormData.state}
                    onChange={handleAddressInputChange}
                    readOnly={!addressEditing}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="form-label">
                Pincode<span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                name="pincode"
                value={addressFormData.pincode}
                onChange={handleAddressInputChange}
                readOnly={!addressEditing}
                required
              />
            </div>
            {addressEditing ? (
              <button type="submit" className="btn btn-success mb-3">
                Save Address
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-info mb-3"
                onClick={(e) => {
                  e.preventDefault();
                  setAddressEditing(true);
                }}
              >
                Edit Address
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
