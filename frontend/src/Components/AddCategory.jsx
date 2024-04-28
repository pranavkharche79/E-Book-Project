import axios from "axios";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function AddCategory() {
  const [cats, setcats] = useState([]);
  const [catname, setcatname] = useState();

  const deleteCategory = (cat) => {
    axios
      .delete(`${API_BASE_URL}/api/category/` + cat.id)
      .then((resp) => {
        enqueueSnackbar(resp.data, {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        loaddata();
      })
      .catch((err) => {
        enqueueSnackbar(err.error, {
          variant: "error",
          autoHideDuration: 10000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          action,
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (catname === undefined) {
      enqueueSnackbar("Please provide full information", {
        variant: "error",
        autoHideDuration: 10000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        action,
      });
      return;
    }
    const formData = new FormData();
    formData.append("catname", catname);
    axios
      .post(`${API_BASE_URL}/api/category`, formData)
      .then((resp) => {
        setcatname("");
        enqueueSnackbar(resp.data, {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        loaddata();
      })
      .catch((error) => {
        enqueueSnackbar(error.error, {
          variant: "error",
          autoHideDuration: 10000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          action,
        });
      });
  };

  const loaddata = () => {
    axios
      .get(`${API_BASE_URL}/api/category`)
      .then((resp) => setcats(resp.data))
      .catch((error) => {
        enqueueSnackbar(error.error, {
          variant: "error",
          autoHideDuration: 10000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          action,
        });
      });
  };
  useEffect(() => {
    loaddata();
  }, []);

  const action = (snackbarId) => (
    <>
      <button
        onClick={() => {
          closeSnackbar(snackbarId);
        }}
      >
        OK
      </button>
    </>
  );

  const handleCategoryNameChange = (e) => {
    const inputText = e.target.value;
    const filteredText = inputText.replace(/[^A-Za-z\s]/gi, ""); // Replace anything not alphabets or spaces with an empty string
    setcatname(filteredText);
  };

  return (
    <>
      <div className="container-fluid text-dark">
        <h4 className="p-2">Categories</h4>
        <div class="row">
          <div class="col-sm-6">
            <table class="table table-striped">
              <thead class="table-primary text-back">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cats.map((x) => (
                  <tr key={x.id} class="table-secondary">
                    {/* <td>{x.id}</td> */}
                    <td>{x.catname}</td>
                    <td>
                      <button
                        onClick={(e) => deleteCategory(x)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="col-sm-6">
            <h4>Add Category</h4>
            <form>
              <div className="form-group">
                <label>Category Name</label>
                <input
                  type="text"
                  pattern="[A-Za-z ]+"
                  title="Only Alphabet input is allowed"
                  required
                  placeholder="Enter the Category Name"
                  onChange={handleCategoryNameChange}
                  value={catname}
                  className="form-control mt-2"
                />
              </div>
              <br />
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                  style={{ width: "150px" }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
