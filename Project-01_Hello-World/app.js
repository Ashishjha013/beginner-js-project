const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElement.addEventListener("click", () => {
  const yourName = prompt("What’s your name?");
  if (yourName?.trim()) {
    spanElement.textContent = yourName.trim();
    spanElement.style.color = "#7a00e3";
  } else {
    spanElement.textContent = "World";
    spanElement.style.color = "red";
  }
});
