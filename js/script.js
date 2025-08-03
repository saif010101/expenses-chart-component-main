const bar = document.querySelectorAll(".bar");

bar.forEach((barItem) => {

  const amount = barItem.previousElementSibling;

  barItem.addEventListener("mouseenter", () => {
    amount.classList.toggle("active");
  });
  barItem.addEventListener("mouseleave", () => {
    amount.classList.toggle("active");
  });
});
