import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { items } from "./Data";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();
  const [searchitems, setSeachItems] = useState("");
  const filterByCategory = (category) => {
    const element = items.filter((products) => products.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((products) => products.price >= price);
    setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchitems}`);
    setSeachItems("");
  };

  return (
    <header className="sticky-top">
      <div className="nav-bar">
        <Link to={"/"} className="brand">
          @mbo Gadgets
        </Link>
        <form onSubmit={handleSubmit} className="search-bar">
          <input
            type="text"
            placeholder="Search Products"
            value={searchitems}
            onChange={(e) => setSeachItems(e.target.value)}
          ></input>
        </form>
        <Link to={"cart"} className="cart">
          <Button variant="primary">
            Cart <Badge bg="secondary">{cart.length}</Badge>
            <span className="visually-hidden">unread messages</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 12 20"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </Button>
        </Link>
      </div>
      <div className="nav-bar-wrapper">
        <div className="items">Filter By{"->"}</div>
        <div onClick={() => setData(items)} className="items">
          No Filter
        </div>
        <div onClick={() => filterByCategory("mobiles")} className="items">
          Smart Phones
        </div>
        <div onClick={() => filterByCategory("laptops")} className="items">
          Laptops
        </div>
        <div onClick={() => filterByCategory("tablets")} className="items">
          Tablets
        </div>
        <div onClick={() => filterByPrice("30000")} className="items">
          More than 30000
        </div>
      </div>
    </header>
  );
};

export default Navbar;
