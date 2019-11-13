if (localStorage.length > 0) {
  let elements = document.getElementsByTagName("textarea");
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = localStorage.getItem(elements[i].id);
  }
}

document.addEventListener("keydown", saveText);

function saveText() {
  var textAreas = document.getElementsByTagName("textarea");
  for (let i = 0; i < textAreas.length; i++) {
    localStorage.setItem(textAreas[i].id, textAreas[i].value);
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var title = document.querySelectorAll("input");

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      this.previousElementSibling.style.display = "block";
      this.previousElementSibling.innerHTML =
        title[i].value + '  <i class="arrow down"></i>';
      this.parentNode.removeChild(title[i]);
    } else {
      title[i].previousElementSibling.style.display = "none";
    }
  });
}
