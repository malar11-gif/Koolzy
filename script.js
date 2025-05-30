// Store cart items
let cart = [];

// Add item to cart
function addToCart(productName, productPrice) {
  const product = {
    name: productName,
    price: productPrice,
    quantity: 1
  };

  // Check if product already in cart
  const existingProductIndex = cart.findIndex(item => item.name === productName);
  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += 1; // Increase quantity if item is already in cart
  } else {
    cart.push(product); // Add new product to cart
  }

  updateCart();
}

// Update cart display
function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItemsList.innerHTML = ''; // Clear existing cart items

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity};
    cartItemsList.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = Total: ₹${total};
}

// Checkout function
function checkout() {
  const cartSummary = cart.map(item => ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}).join('\n');
  const orderSummary = Order Summary:\n${cartSummary}\n\nTotal: ₹${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)};

  const checkoutMessage = Hi, I'd like to place an order. Here's my order:\n\n${orderSummary}\n\nPlease contact me at: vasanthakumarvk33@gmail.com\nWhatsApp: +91 9443016625;
  
  window.open(https://wa.me/919443016625?text=${encodeURIComponent(checkoutMessage)}, '_blank');
}