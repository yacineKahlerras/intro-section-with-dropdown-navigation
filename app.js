/** vars */
const btns = [...document.getElementsByTagName("button")];
const sidebarContainer = document.querySelector(".sidebar-container");

/** handles all button clicks */
const btnHandler = (btn) => {
  if (
    btn.classList.contains("btn-toggle") ||
    btn.classList.contains("close-button")
  ) {
    sidebarContainer.classList.toggle("show-sidebar");
  }
};

/** listeners */
btns.forEach((b) => {
  b.addEventListener("click", () => btnHandler(b));
});
