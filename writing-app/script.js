if (localStorage.getItem("content")) {
  document.getElementsByTagName("textarea")[0].innerHTML = localStorage.getItem(
    "content"
  );
}
document.addEventListener("keydown", saveText);

function saveText() {
  var textArea = document.getElementsByTagName("textarea")[0].value;
  localStorage.setItem("content", textArea);
}
