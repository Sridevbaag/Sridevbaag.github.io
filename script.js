// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const icon = themeToggle.querySelector("i");
  if (body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});


// ========== EMAILJS CONTACT FORM ==========
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Initialize EmailJS
  emailjs.init("_EFUuHM3aoLfX2hL1");

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const params = {
      user_name: document.getElementById("user_name").value,
      user_email: document.getElementById("user_email").value,
      message: document.getElementById("message").value,
      time: new Date().toLocaleString()
    };

    const serviceID = "service_pvz4gue";
    const templateID = "template_qw3qgg6";

    emailjs.send(serviceID, templateID, params)
      .then(() => {
        alert("✅ Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  });
});


// ========== FADE-IN ANIMATION ==========
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
