import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {!user ? "Guest" : user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
          />
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
