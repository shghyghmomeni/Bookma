const btn = document.getElementById("go-to-orders");
btn.addEventListener("click", goToOrders);
function goToOrders() {
  window.open("../pages/orders.html", "_self");
}
