document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("lifeEventsHeader");
  const list = document.getElementById("lifeEventsList");

  header.addEventListener("click", () => {
    const isOpen = list.classList.toggle("open");

    // Покращення доступності
    header.setAttribute("aria-expanded", isOpen);
  });
});
