document.querySelectorAll(".faq__question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbarItems = document.getElementById("navbarItems");

  hamburger.addEventListener("click", function () {
    navbarItems.classList.toggle("active");
    hamburger.classList.toggle("active"); // Toggle "X" icon
  });
});
