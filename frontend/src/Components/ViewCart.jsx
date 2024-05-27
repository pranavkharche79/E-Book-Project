import React, { useEffect, useState } from "react";
import "../CSS/ViewCart.css";
import axios from "axios";
import { API_BASE_URL } from "../API_Configuration/apiconfig.js";
import EmptyCartImg from "../Images/empty_cart.png";
import { enqueueSnackbar } from "notistack";

export default function ViewCart() {
  const [cartbooks, setcartbooks] = useState([]);
  const totalPrice = cartbooks.reduce(
    (total, item) => total + item.bprice * item.qty,
    0
  );

  const fetchCartBooks = async () => {
    await axios
      .get(`${API_BASE_URL}api/cart/cartbooks/${localStorage.getItem("id")}`)
      .then((res) => {
        console.log(res.data);
        setcartbooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelCartBookDelete = async (cid) => {
    await axios
      .get(`${API_BASE_URL}api/cart/${cid}`)
      .then((res) => {
        console.log(res.data);
        enqueueSnackbar(res.data, {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        fetchCartBooks();
      })
      .catch((err) => {
        enqueueSnackbar("Something Went Worng !!!", {
          variant: "error",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      });
  };

  useEffect(() => {
    fetchCartBooks();
  }, []);

  return (
    <>
      <main class="page">
        <section class="shopping-cart dark">
          <div class="container">
            <div class="block-heading">
              <h2>Shopping Cart</h2>
            </div>
            {cartbooks.length !== 0 ? (
              <>
                <div class="content">
                  <div class="row">
                    <div class="col-md-12 col-lg-8">
                      <div class="items">
                        {cartbooks.map((items) => (
                          <React.Fragment key={items.cid}>
                            <div className="product">
                              <div class="row">
                                <div class="col-md-3">
                                  <img
                                    class="img-fluid mx-auto d-block image"
                                    src={items.bimage}
                                    alt={items.bname}
                                  />
                                </div>
                                <div class="col-md-8">
                                  <div class="info">
                                    <div class="row">
                                      <div class="col-md-5 product-name">
                                        <div class="product-name">
                                          <span style={{ color: "#409be1" }}>
                                            {items.bname}
                                          </span>
                                          <div class="product-info">
                                            <div>
                                              Quantity:
                                              <span class="value">
                                                {" "}
                                                {items.qty}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-4 quantity">
                                        <span>₹{items.bprice}</span>
                                      </div>
                                      <div class="col-md-3 price">
                                        <button
                                          type="button"
                                          style={{
                                            backgroundColor: "white",
                                            border: "1px solid transparent",
                                          }}
                                          onClick={(e) => {
                                            handelCartBookDelete(items.cid);
                                          }}
                                        >
                                          <i
                                            class="fa fa-trash"
                                            aria-hidden="true"
                                            style={{
                                              fontSize: "35px",
                                              color: "red",
                                            }}
                                          ></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-4">
                      <div class="summary">
                        <h3>Summary</h3>
                        <div class="summary-item">
                          <span class="text">Subtotal</span>
                          <span class="price">₹{totalPrice}</span>
                        </div>
                        <div class="summary-item">
                          <span class="text">Discount</span>
                          <span class="price">₹0</span>
                        </div>
                        <div class="summary-item">
                          <span class="text">Shipping</span>
                          <span class="price">₹0</span>
                        </div>
                        <div class="summary-item">
                          <span class="text">Total</span>
                          <span class="price">₹{totalPrice}</span>
                        </div>
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btn-block"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40vh", // Adjust this as necessary for your layout
                  }}
                >
                  <span>
                    <h2>Cart is Empty &nbsp; &nbsp; &nbsp; </h2>
                  </span>
                  <img
                    src={EmptyCartImg}
                    alt="Empty cart"
                    style={{
                      width: "400px",
                      height: "400px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
