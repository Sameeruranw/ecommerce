import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = ({ items, cart, setCart }
  ) => {
  const addtocart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("cart element = " , cart)
    toast.success("item sucessfully added to cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <>
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>

      <div className="container my-5">
        <div className="row">
          {items.map((products) => {
            return (
              <>
                <div
                  key={products.id}
                  className="col-lg-4 col-md-6 my-3 text-center"
                >
                  <div className="card" style={{ width: "20rem" }}>
                    <Link
                      to={`/products/${products.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Card style={{ height: "20rem" }}>
                        <Card.Img variant="top" src={products.imgSrc} />
                      </Card>
                    </Link>
                    <Card.Body>
                      <Card.Title>{products.title}</Card.Title>
                      <Card.Text> {products.description}</Card.Text>
                      <div className="button">
                        <button className="btn-price ">
                          रु {products.price}
                        </button>
                        <button
                          onClick={() =>
                            addtocart(
                              products.id,
                              products.price,
                              products.title,
                              products.description,
                              products.imgSrc
                            )
                          }
                          className="btn-cart"
                        >
                          Add to cart
                        </button>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
