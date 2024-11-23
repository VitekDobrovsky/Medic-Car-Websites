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
    hamburger.classList.toggle("active");
  });

  const testimonials = [
    {
      text: "„Kluci jsou úplně luxusní! Kdykoliv mám jakýkoliv problém, hned se mi věnují, ačkoliv mají ostatní práce habakuk. Vše mi vždy vysvětlí a snaží se pomoct co nejdříve, vlastně skoro hned! A hlavně si neříkají peníze za něco, co neudělali.. Vždy se nějak domluvíme.. za což jsem jim moc vděčná! Za mě super servis!“",
      author: "Denisa Niesnerová",
    },
    {
      text: "„Golf4 2.3V5, super přístup, přátelský jednání a co je hlavní, KVALITNÍ a POCTIVÁ práce. Každou naleznou závadu nejdříve prokonzultují se zákazníkem než pokračují v práci. Vřele doporučuji opravdu umí.“",
      author: "Honzu",
    },
    {
      text: "„Rychlé a levné přezutí pneumatik. Spoustu let jsem jezdil do pneuservisu na Novoveské ulici ale za poslední rok se tam neskutečně zhoršila kvalita a ještě se nestydí si říct 2000Kč za přehození pneumatik takže autoservis Medic car je jasná volba.“",
      author: "Czech Delivery",
    },
    {
      text: "„V sobotu na počkání oprava pneu. Příjemné jednání. Díky“",
      author: "Jiří Lánský",
    },
    {
      text: "„Prostě jsou dobří. Co víc dodat“",
      author: "Pavel J.",
    },
  ];

  let currentTestimonialIndex = 0;

  const testimonialText = document.querySelector(".testimonials__review");
  const testimonialAuthor = document.querySelector(".testimonials__author");
  const leftArrow = document.querySelector(
    ".testimonial__arrow[src*='arrow-left']"
  );
  const rightArrow = document.querySelector(
    ".testimonial__arrow[src*='arrow-right']"
  );

  function updateTestimonial(index) {
    testimonialText.classList.add("fade-out");
    testimonialAuthor.classList.add("fade-out");

    setTimeout(() => {
      testimonialText.textContent = testimonials[index].text;
      testimonialAuthor.textContent = testimonials[index].author;

      testimonialText.classList.remove("fade-out");
      testimonialAuthor.classList.remove("fade-out");
      testimonialText.classList.add("fade-in");
      testimonialAuthor.classList.add("fade-in");
    }, 300);
  }

  leftArrow.addEventListener("click", function () {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
  });

  rightArrow.addEventListener("click", function () {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
  });

  updateTestimonial(currentTestimonialIndex);
});

function submitForm() {
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  console.log(data); // You can replace this with actual form submission logic

  // Simulate form submission
  setTimeout(() => {
    form.reset();
    form.classList.add("email-sent");
    form.innerHTML = "<p>Email poslán!</p>";
    form.addEventListener(
      "click",
      () => {
        form.classList.remove("email-sent");
        form.innerHTML = `
        <label for="name">Jméno:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="subject">Předmět:</label>
        <input type="text" id="subject" name="subject" required>
        <label for="message">Obsah:</label>
        <textarea id="message" name="message" required></textarea>
        <a class="btn" onclick="submitForm()">Odeslat</a>
      `;
      },
      { once: true }
    );
  }, 500);
}
