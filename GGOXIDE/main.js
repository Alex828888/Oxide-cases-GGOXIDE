function resizePanel(width, height) {
  const panel = document.getElementById("myPanel");
  panel.style.width = width + "px";
  panel.style.height = height + "px";
}

  function updateOnline() {
    const number = Math.floor(Math.random() * (1786 - 921 + 1)) + 921;
    document.getElementById("onlineNumber").textContent = number.toLocaleString("ru-RU");
  }

  updateOnline();
  setInterval(updateOnline, 3000);