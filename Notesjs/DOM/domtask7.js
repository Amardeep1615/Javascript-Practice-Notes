const textarea = document.getElementById("myTextarea");
const counter = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  counter.textContent = textarea.value.length;
});