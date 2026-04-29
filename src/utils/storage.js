// Utilidades de almacenamiento local.
// Uso localStorage para simular un backend sencillo en el proyecto académico.
// Aquí se guardan usuario, carrito y entradas compradas.

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("ticksy_user")) || null;
}

export function saveCurrentUser(user) {
  localStorage.setItem("ticksy_user", JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem("ticksy_user");
}

export function getTickets() {
  return JSON.parse(localStorage.getItem("ticksy_tickets")) || [];
}

export function saveTicket(ticket) {
  const tickets = getTickets();
  const updatedTickets = [ticket, ...tickets];
  localStorage.setItem("ticksy_tickets", JSON.stringify(updatedTickets));
  return updatedTickets;
}

export function getCart() {
  return JSON.parse(localStorage.getItem("ticksy_cart")) || [];
}

export function saveCart(cart) {
  localStorage.setItem("ticksy_cart", JSON.stringify(cart));
}

export function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(cartItem => cartItem.eventId === item.eventId);

  if (existing) {
    const updatedCart = cart.map(cartItem =>
      cartItem.eventId === item.eventId
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );
    saveCart(updatedCart);
    return updatedCart;
  }

  const updatedCart = [item, ...cart];
  saveCart(updatedCart);
  return updatedCart;
}

export function removeFromCart(eventId) {
  const updatedCart = getCart().filter(item => item.eventId !== eventId);
  saveCart(updatedCart);
  return updatedCart;
}

export function clearCart() {
  localStorage.removeItem("ticksy_cart");
}
