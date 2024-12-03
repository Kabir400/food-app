import { useState, useEffect, createContext } from "react";

export const context = createContext();
export const cartContext = createContext();

function Store({ children }) {
  const value = useState({
    isCartOpen: false,
    loginChecked: false,
    isLogin: false,
    user: {},
    resturants: [],
    clickedResturant: {},
    searchQuery: "",
    selectedCategory: "",
    addressPoup: false,
    slectedAddressIndex: 0,
    addressList: [],
  });

  //cart funtionality.................................
  //state for cart
  const [state, setState] = useState({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  });

  // Sync cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Function to add items to the cart
  const addToCart = (food) => {
    setState((prevState) => {
      const existingItem = prevState.cart.find((item) => item._id === food._id);
      if (existingItem) {
        // Increase quantity if item already in cart
        const updatedCart = prevState.cart.map((item) =>
          item._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...prevState, cart: updatedCart };
      }
      // Add new item to cart with quantity 1
      const updatedCart = [...prevState.cart, { ...food, quantity: 1 }];
      return { ...prevState, cart: updatedCart };
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (foodId) => {
    setState((prevState) => {
      const updatedCart = prevState.cart
        .map((item) =>
          item._id === foodId ? { ...item, quantity: item.quantity - 1 } : item
        ) // Reduce quantity if the item matches
        .filter((item) => item.quantity > 0); // Remove items with quantity <= 0

      return { ...prevState, cart: updatedCart };
    });
  };

  //........................................................

  return (
    <context.Provider value={value}>
      <cartContext.Provider
        value={{ state, setState, addToCart, removeFromCart }}
      >
        {children}
      </cartContext.Provider>
    </context.Provider>
  );
}

export default Store;
