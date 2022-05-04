const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexString = "#";

  for (let i = 0; i < 6; i++) {
    hexString += `${getRandomHex()}`;
  }

  document.body.style.backgroundColor = hexString;
  color.textContent = hexString;
});

function getRandomHex() {
  return hex[Math.floor(Math.random() * hex.length)];
}
