import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import React from "react";
import Currencyformat from "react-currency-format";
import { useHistory } from "react-router";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button
        onClick={(e) => history.push("/payment")}
        className="subtotal__button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
