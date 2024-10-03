console.log("Hello World");

const form2 = document.getElementById("form2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3)");
const html = document.getElementById("html)");

form2.addEventListener("submit", (event) => {
  console.log(form2);
  event.preventDefault();
});

div1.addEventListener("click", function (event) {
  div1.style.backgroundColor = "yellow";
});
div2.addEventListener("click", function (event) {
  div2.style.backgroundColor = "blue";
});
div3.addEventListener("click", function (event) {
  div3.style.backgroundColor = "green";
});

console.log(html);

html.addEventListener("keydown", function (event) {
  html.style.backgroundColor = "aqua";
});
html.addEventListener("keyup", function (event) {
  if (event.key == "b") {
    html.style.backgroundColor = "lightblue";
  }
});
