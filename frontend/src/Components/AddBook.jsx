import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const [photo, setphoto] = useState();
  const navigate = useNavigate();
  const [book, setbook] = useState({
    bname: "",
    price: "",
    bread: "",
    category: "",
    type: "",
  });

  const handleInput = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!photo) {
      alert("upload photo");
      return;
    }
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("bname", book.bname);
    formData.append("bread", book.bread);
    formData.append("cat", book.category);
    formData.append("bprice", book.price);
    formData.append("btype", book.type);
    console.log(book);
    axios
      .post("http://localhost:8000/api/book", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
        },
      })
      .then((resp) => {
        let result = resp.data;
        enqueueSnackbar(result, {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        navigate("/addbook");
      })
      .catch((error) => {
        console.log("Error", error);
        enqueueSnackbar("Error saving product", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      });
  };

  return (
    <>
      <div class="container mt-3 col-md-5">
        <div class="form-container">
          <div className="text-center">
            <h2>Add Book</h2>
          </div>
          <form onSubmit={handlesubmit}>
            <div class="form-group mb-3">
              <label for="bookName">Book Name</label>
              <input
                type="text"
                class="form-control"
                id="bname"
                name="bname"
                value={book.bname}
                onChange={handleInput}
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="price">Book Price</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">&#8377;</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  name="price"
                  value={book.price}
                  onChange={handleInput}
                  required
                />
                <div class="input-group-append">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
            {/* <div class="form-group mb-3">
              <label for="photo">Photo</label>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="photo"
                  name="photo"
                  onChange={(e) => setphoto(e.target.value)}
                />
              </div>
            </div> */}

            <div className="form-group mb-3">
              <label for="photo">Photo</label>
              <div className="custom-file">
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="custom-file-input"
                  onChange={(e) => {
                    setphoto(e.target.files[0]);
                  }}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    padding: "5px 10px",
                  }}
                  onClick={() => document.getElementById("photo").click()}
                >
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </button>
                {photo && photo.name}
              </div>
            </div>

            <div class="form-group mb-3">
              <label for="readUrl">Reading URL</label>
              <input
                type="url"
                class="form-control"
                id="bread"
                name="bread"
                value={book.bread}
                onChange={handleInput}
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="category">Category</label>
              <select
                class="form-control"
                id="category"
                name="category"
                value={book.category}
                onChange={handleInput}
                required
              >
                <option value="">Select Type</option>
                <option value="Fiction">Fiction</option>
                <option value="Nonfiction">Non-Fiction</option>
                <option value="Biography">Biography</option>
                <option value="Selfhelp">Self-Help</option>
              </select>
            </div>
            <div class="form-group mb-3">
              <label for="type">Type</label>
              <select
                class="form-control"
                id="type"
                name="type"
                value={book.type}
                onChange={handleInput}
                required
              >
                <option value="">Select Type</option>
                <option value="Old">Old</option>
                <option value="New">New</option>
              </select>
            </div>
            <br />
            <div className="text-center">
              <button type="submit" class="btn btn-primary">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
