document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const res = await fetch("../api/contact.php", {
        method: "POST",
        body: formData,
      });
      const msg = await res.text();
      alert(msg);
    });
  }
});
