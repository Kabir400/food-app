export const updateCart = (food) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingFoodIndex = cart.findIndex((item) => item._id === food._id);

  if (existingFoodIndex !== -1) {
    cart[existingFoodIndex].quantity += 1; // Increase quantity if the food is already in the cart
  } else {
    cart.push({ ...food, quantity: 1 }); // Add new food item with quantity 1
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (foodId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item._id !== foodId);
  localStorage.setItem("cart", JSON.stringify(cart));
};
