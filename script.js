function processPayment() {
  const ticketType = document.getElementById("ticketType");
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseInt(ticketType.value);
  const total = price * quantity;

  const resultText = `Вы выбрали: ${ticketType.options[ticketType.selectedIndex].text}
Количество: ${quantity}
Итого к оплате: ${total}₽`;

  document.getElementById("resultText").innerText = resultText;

  // Здесь в будущем будет перенаправление на платёжную страницу
  alert("Переход к оплате будет реализован на следующем этапе.");
}