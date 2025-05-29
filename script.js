document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const message = document.getElementById("message");

  startBtn.addEventListener("click", () => {
    message.textContent = "Hello, Web Game!";
  });
});
