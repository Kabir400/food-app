import React, { useContext } from "react";
import style from "../css/ResturantSearchSort.module.css";
import { context } from "../pages/Store.jsx";

//img
import search from "../assets/search.png";

function ResturantSearchSort() {
  const [{ searchQuery, selectedCategory }, setState] = useContext(context);

  const handleSearch = (e) => {
    setState((prev) => ({ ...prev, searchQuery: e.target.value }));
  };

  const handleCategoryClick = (category) => {
    setState((prev) => ({ ...prev, selectedCategory: category }));
  };
  return (
    <>
      <div className={style.searchContainer}>
        <h4 className={style.searchText}>
          All Offers from McDonald’s East London
        </h4>
        <div className={style.searchBox}>
          <input
            type="text"
            className={style.searchInput}
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search from menu..."
          />
          <img src={search} className={style.searchIcon} />
        </div>
      </div>

      <div className={style.sortContainer}>
        {/* <p className={`${style.sortLink} ${style.active}`}>Offers</p>
        <p className={style.sortLink}>Burgers</p>
        <p className={style.sortLink}>Fries</p>
        <p className={style.sortLink}>Snacks</p>
        <p className={style.sortLink}>Salads</p>
        <p className={style.sortLink}>Cold drinks</p>
        <p className={style.sortLink}>Happy Meal®</p>
        <p className={style.sortLink}>Desserts</p>
        <p className={style.sortLink}>Hot drinks</p>
        <p className={style.sortLink}>Sauces</p>
        <p className={style.sortLink}>Orbit®</p> */}

        {[
          "Offers",
          "Burgers",
          "Fries",
          "Snacks",
          "Salads",
          "Cold drinks",
          "Happy Meal®",
          "Desserts",
          "Hot drinks",
          "Sauces",
          "Orbit®",
        ].map((category) => (
          <p
            key={category}
            className={`${style.sortLink} ${
              selectedCategory === category ? style.active : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </p>
        ))}
      </div>
    </>
  );
}

export default ResturantSearchSort;
