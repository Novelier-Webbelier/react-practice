let counter = 0;
const button = document.querySelector("#btn");
const span = document.querySelector("#span");

function handleClickBtn() {
  counter += 1;
  span.innerText = `Total clicks : ${counter}`;
}

button.addEventListener("click", handleClickBtn);
