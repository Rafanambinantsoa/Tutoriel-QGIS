document
  .getElementById("toggle-paragraph")
  .addEventListener("click", function () {
    var italicParagraph = document.getElementById("toggle-italic");
    if (italicParagraph.style.display === "block") {
      italicParagraph.style.display = "none";
    } else {
      italicParagraph.style.display = "block";
    }
  });
