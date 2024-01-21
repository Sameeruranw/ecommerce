import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Products from "./Products";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedproducts , setRelatedproducts] = useState([])
  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedproducts = items.filter((p)=>p.category === product.category)
    setRelatedproducts(relatedproducts)

  }, [id,product.category]);

  return (
    <>
      <div className="container">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="button2 ">
            <button className="btn-price2 ">रु {product.price}</button>
            <button className="btn-cart2 " style={{margin:"1.4rem"}}>Add to cart</button>
          </div>
        </div>
      </div>
      <h1 style={{display:"flex", justifyContent:"center"}}>Related Products</h1>
      <Products items={relatedproducts}/>      
    </>
  );
};

export default ProductDetail;
