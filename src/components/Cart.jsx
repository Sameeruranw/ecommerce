import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container">
        {cart.map((Product) => {
          return (
            <>
              <Card style={{ width: "18rem",height:"28rem",margin:"2rem",display:"flex" , flexDirection:"column" }} >
                <Card.Img variant="top" src={Product.imgSrc} />
                <Card.Body>
                  <Card.Title>{Product.title}</Card.Title>
                  <Card.Text>{Product.description}</Card.Text>
                  <Card.Text style={{background:"yellow",width:"6rem",borderRadius:"1.7vh"}}>रु {Product.price}</Card.Text>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
