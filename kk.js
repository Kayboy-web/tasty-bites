function orderFood(foodItem) {
    const message = `Hello, I would like to order ${foodItem}`;
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
