// base url
const base_url = import.meta.env.VITE_BASE_URL;

// other imports
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import getRequest from "../utility/getRequest.js";
import { toast } from "react-toastify";
import { cartContext, context } from "../pages/Store.jsx";

// components
import Loader from "../components/Loader.jsx";
import Cart from "./Cart";

// images
import discount1 from "../assets/discount1.png";
import discount2 from "../assets/discount2.png";
import discount3 from "../assets/discount3.png";
import cover from "../assets/cover.png";
import plus from "../assets/Plus.png";

import style from "../css/foodItems.module.css";

function FoodItems() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [groupedFoods, setGroupedFoods] = useState({});
  const [value, setValue] = useContext(context);
  const { searchQuery, selectedCategory, isCartOpen } = value;
  const { addToCart } = useContext(cartContext);

  const fetchFoodItems = async () => {
    if (!id) {
      toast.error("No restaurant ID provided in the URL!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    setIsLoading(true);
    const response = await getRequest(`${base_url}/food/${id}`);
    setIsLoading(false);

    if (response.suceess) {
      // Group food items by category
      const grouped = response.data.reduce((acc, food) => {
        if (!acc[food.category]) acc[food.category] = [];
        acc[food.category].push(food);
        return acc;
      }, {});
      setGroupedFoods(grouped);
    } else {
      toast.error(response.message, { position: "top-right", autoClose: 3000 });
    }
  };

  //add to cart
  const cartHandler = (food) => {
    addToCart(food);
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 3000,
    });
    if (window.innerWidth >= 1300) {
      setValue({ ...value, isCartOpen: true });
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  // Filter logic
  const filteredFoods = Object.entries(groupedFoods).reduce(
    (acc, [category, items]) => {
      // Filter by selected category
      if (selectedCategory && selectedCategory !== category) return acc;

      // Filter by search query
      const filteredItems = items.filter(
        (food) =>
          food.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          food.toppings.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredItems.length > 0) acc[category] = filteredItems;

      return acc;
    },
    {}
  );

  return (
    <div className={style.container} id="cartScroll">
      <div className={style.box}>
        {/* Discounts */}
        <div className={style.discountContainer}>
          <img src={discount1} className={style.discountImg} alt="Discount 1" />
          <img src={discount2} className={style.discountImg} alt="Discount 2" />
          <img src={discount3} className={style.discountImg} alt="Discount 3" />
        </div>

        {/* Food Items */}
        {Object.entries(filteredFoods).map(([category, items], index) => (
          <div className={style.foodContainer} key={index}>
            <h3 className={style.foodCategory}>{category}</h3>
            <div className={style.foodBox}>
              {items.map((food) => (
                <div className={style.foodItem} key={food._id}>
                  <div className={style.foodItemLeft}>
                    <h4 className={style.foodName}>{food.title}</h4>
                    <p className={style.foodItems}>{food.toppings}</p>
                    <p className={style.price}>₹ {food.price}</p>
                  </div>
                  <div className={style.foodImgContainer}>
                    <img
                      src={food.img}
                      className={style.foodImg}
                      alt={food.title}
                    />
                    <img src={cover} className={style.cover} alt="Cover" />
                    <img
                      src={plus}
                      className={style.plus}
                      alt="Add to cart"
                      onClick={() => cartHandler(food)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
}

export default FoodItems;
