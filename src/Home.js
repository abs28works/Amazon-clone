import React from "react";
import AddToCartPopUp from "./AddToCartPopUp";
import "./Home.css";
import PopupList from "./PopupList";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* <AddToCartPopUp />
      <AddToCartPopUp />
      <AddToCartPopUp /> */}
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/817HU25c2uL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="101"
            title="The Lean statrup props"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="102"
            title="
            Bezier board Games One Night Ultimate Werewolf Black
            "
            price={23.7}
            image="https://m.media-amazon.com/images/I/51ouRAlfl7L._AC_SR320,320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="103"
            title="Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6 HD Touch4GB LPDDR4, 32GB eMMC, Gigabit Wi-Fi"
            price={249}
            image="https://m.media-amazon.com/images/I/71c5W9NxN5L._AC_UL640_FMwebp_QL65_.jpg"
            rating={15}
          />
          <Product
            id="104"
            title="SteelSeries Apex 7 Mechanical Gaming Keyboard – OLED Smart Display – USB Passthrough and Media Controls – Tactile and Clicky – RGB Backlit (Blue Switch)"
            price={159.99}
            image="https://m.media-amazon.com/images/I/81yOuAUQAiL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="105"
            title="Amazon Basics Reversible Microfiber Comforter Blanket - Full/Queen, Navy / Sky Blue"
            price={30.1}
            image="https://m.media-amazon.com/images/I/813XoPgLskL._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="106"
            title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistant College School Computer Bag Gifts for Men & Women Fits 15.6 Inch Notebook, Grey"
            price={40}
            image="https://images-na.ssl-images-amazon.com/images/I/51Rw7jmy1LL.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
