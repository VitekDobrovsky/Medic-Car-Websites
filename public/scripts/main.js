document.querySelectorAll(".faq__question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("open");
  });
});

emailjs.init("8Ld87cp8DWdiI_cVV");

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbarItems = document.getElementById("navbarItems");

  hamburger.addEventListener("click", function () {
    navbarItems.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

function submitForm() {
  let sent = false;

  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  // Clear previous validation messages
  document
    .querySelectorAll(".validation-message")
    .forEach((msg) => msg.remove());

  // Validation
  let isValid = true;
  if (!data.name) {
    isValid = false;
    const nameInput = document.getElementById("name");
    nameInput.insertAdjacentHTML(
      "afterend",
      "<span class='validation-message'>Vyplňte jméno.</span>"
    );
  }
  if (!data.email) {
    isValid = false;
    const emailInput = document.getElementById("email");
    emailInput.insertAdjacentHTML(
      "afterend",
      "<span class='validation-message'>Vyplňte email.</span>"
    );
  }
  if (!data.subject) {
    isValid = false;
    const subjectInput = document.getElementById("subject");
    subjectInput.insertAdjacentHTML(
      "afterend",
      "<span class='validation-message'>Vyplňte předmět.</span>"
    );
  }
  if (!data.message) {
    isValid = false;
    const messageInput = document.getElementById("message");
    messageInput.insertAdjacentHTML(
      "afterend",
      "<span class='validation-message'>Vyplňte obsah.</span>"
    );
  }

  if (!isValid) {
    return;
  }

  console.log(data);
  emailjs
    .send("service_9i6ga1r", "template_ouva7jl", {
      from_name: data.name,
      message: data.message,
      reply_to: data.email,
      subject: data.subject,
    })
    .then(
      function () {
        sent = true;
      },
      function (error) {
        console.error("Failed to send message. Error:", error);
        alert(
          "Něco se pokazilo :(, kontaktujte nás přímo na emailu info@medic-car.cz"
        );
      }
    );

  // Simulate form submission
  var formMsg = sent
    ? "Email Poslán"
    : "Něco se pokazilo :(, <br>kontaktujte nás přímo na emailu";

  setTimeout(() => {
    form.reset();
    form.classList.add("email-sent");
    form.innerHTML = "<p>Email Poslán!</p>";
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
