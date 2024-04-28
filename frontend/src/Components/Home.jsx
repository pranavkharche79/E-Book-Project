import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Hourglass } from "react-loader-spinner";
import { API_BASE_URL } from "../API_Configuration/apiconfig";

export default function Home() {
  const [books, setbooks] = useState([]);
  const { catid } = useParams();
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

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
          `${API_BASE_URL}/api/book/paginated?page=` + page + `&pagesize=` + 8
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
          {books.map((book, index) => (
            <div key={index} className="col-md-3 mb-4">
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
