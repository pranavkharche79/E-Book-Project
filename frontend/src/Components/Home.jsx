import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Hourglass } from "react-loader-spinner";
import { API_BASE_URL } from "../API_Configuration/apiconfig";
import { enqueueSnackbar } from "notistack";

export default function Home() {
  const [books, setbooks] = useState([]);
  const { catid } = useParams();
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const disableUI = () => {
    // Disable UI elements
    const elements = document.querySelectorAll("button, input, a");
    elements.forEach((element) => {
      element.disabled = true;
    });

    // Overlay the page
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = 9999;
    document.body.appendChild(overlay);

    // Display error message
    const errorMessage = document.createElement("div");
    errorMessage.textContent =
      "Oops! There was a problem with the network. Please try again later.";
    errorMessage.style.position = "fixed";
    errorMessage.style.top = "50%";
    errorMessage.style.left = "50%";
    errorMessage.style.transform = "translate(-50%, -50%)";
    errorMessage.style.backgroundColor = "#f44336"; // Red color for error message
    errorMessage.style.color = "#fff"; // White text color
    errorMessage.style.padding = "20px";
    errorMessage.style.borderRadius = "5px";
    errorMessage.style.zIndex = 10000;
    document.body.appendChild(errorMessage);
  };

  const loadDataFromServer = async () => {
    setTimeout(async () => {
      await axios
        .get(
          `${API_BASE_URL}/api/book/paginated?page=` + page + `&pagesize=` + 6
        )
        .then((resp) => {
          console.log(resp.data.content);
          console.log(resp.data.content.length);
          // setbooks((prevBooks) => [...prevBooks, ...resp.data.content]);
          // setbooks(books.concat(resp.data.content));
          // setPage((prevPage) => prevPage + 1);
          // console.log("books= ", books);
          console.log("page= ", page);
          if (resp.data.content.length === 0) {
            setHasMore(false);
          }
          if (page === 0) {
            setbooks(resp.data.content);
          } else {
            setbooks((prevBooks) => [...prevBooks, ...resp.data.content]);
          }
          setPage(page + 1);
        })
        .catch((err) => {
          alert(
            "There was a problem with the network. Please try again later."
          );
          disableUI();
          console.log(err);
        });
    }, 1500);
  };

  const getbooksbycategory = async () => {
    await axios.get(`${API_BASE_URL}/api/book/cats/` + catid).then((resp) => {
      setbooks((prevbooks) => [...prevbooks, resp.data]);
      setPage((prevPage) => prevPage + 1);
    });
  };

  useEffect(() => {
    if (catid !== undefined) {
      getbooksbycategory();
    } else {
      loadDataFromServer();
    }
  }, []);

  const addToCart = async (book) => {
    if (localStorage.getItem("id") == null) {
      enqueueSnackbar("Please login first to buy book", {
        variant: "error",
        autoHideDuration: 1600,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      navigate("/login");
    } else if (localStorage.getItem("role") !== "Customer") {
      enqueueSnackbar("Only customer can buy book", {
        variant: "error",
        autoHideDuration: 1600,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else {
      console.log("book=", book.bname);
      const formdata = new FormData();
      formdata.append("book_id", book.bookid);
      formdata.append("cust_id", localStorage.getItem("id"));
      formdata.append("bname", book.bname);
      formdata.append("bprice", book.bprice);
      formdata.append("bimage", book.bimage);
      formdata.append("qty", 1);
      await axios
        .post(`${API_BASE_URL}/api/cart`, formdata)
        .then((resp) => {
          enqueueSnackbar(resp.data, {
            variant: "success",
            autoHideDuration: 1500,
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          });
        })
        .catch((resp) => {
          enqueueSnackbar(resp.response.data, {
            variant: "error",
            autoHideDuration: 1500,
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          });
        });
    }
  };

  return (
    <>
      <div className="container-fluid back-img">
        <h2 className="text-center text-danger">Ebook Management System</h2>
      </div>

      {/* all books  */}

      {/* <div className="row">
        {books.map((book, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card crd-ho">
              <div className="card-body text-center">
                <img
                  src={book.bimage}
                  className="card-img-top"
                  alt={book.bname}
                  style={{
                    width: "200px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                  // style={{ width: "200px", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1.25rem" }}>
                    {book.bookid}
                  </h5>
                  <h5 className="card-title" style={{ fontSize: "1.25rem" }}>
                    {book.bname}
                  </h5>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "1.25rem",
                      color: book.btype === "New" ? "lime" : "red",
                    }}
                  >
                    {book.btype}
                  </h5>
                  <p className="card-text" style={{ fontSize: "1rem" }}>
                    Category: {book.category.catname}
                  </p>
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-2 mr-2"
                      >
                        Add Cart
                      </button>
                      &nbsp;
                      <a
                        href={book.bread}
                        className="btn btn-success btn-sm ml-2 mr-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read
                      </a>
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-2 mr-2"
                      >
                        ₹ {book.bprice}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <InfiniteScroll
        dataLength={books.length}
        next={loadDataFromServer}
        hasMore={hasMore}
        loader={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
          </div>
        }
        scrollThreshold={0.5}
      >
        <div className="row">
          {books.map((book) => (
            <div key={book.bookid} className="col-md-4 mb-4">
              <div className="card h-100 d-flex flex-column justify-content-between crd-ho">
                <div className="card-body text-center">
                  <img
                    src={book.bimage}
                    className="card-img-top"
                    alt={book.bname}
                    style={{
                      width: "200px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "1.25rem" }}>
                      {book.bname}
                    </h5>
                    <h5
                      className="card-title"
                      style={{
                        fontSize: "1.25rem",
                        color: book.btype === "New" ? "lime" : "red",
                      }}
                    >
                      {book.btype}
                    </h5>
                    <p className="card-text" style={{ fontSize: "1rem" }}>
                      Category: {book.category.catname}
                    </p>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-2 mr-2"
                        onClick={(e) => addToCart(book)}
                      >
                        Add Cart
                      </button>
                      &nbsp;
                      <a
                        href={book.bread}
                        className="btn btn-success btn-sm ml-2 mr-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read
                      </a>
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-2 mr-2"
                      >
                        ₹ {book.bprice}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
