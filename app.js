/** vars */
const btns = [...document.getElementsByTagName("button")];
const sidebarContainer = document.querySelector(".sidebar-container");
const sidebarSubmenus = [...document.querySelectorAll(".sidebar-submenu")];

/** handles all button clicks */
const btnHandler = (btn) => {
  if (
    btn.classList.contains("btn-toggle") ||
    btn.classList.contains("close-button")
  ) {
    sidebarContainer.classList.toggle("show-sidebar");
    sidebarSubmenus.forEach((s) => s.classList.remove("show-sidebar-submenu"));
  }
  if (btn.classList.contains("features-sidebar")) {
    sidebarSubmenus[0].classList.toggle("show-sidebar-submenu");
  }
  if (btn.classList.contains("company-sidebar")) {
    sidebarSubmenus[1].classList.toggle("show-sidebar-submenu");
  }
};

/** listeners */
btns.forEach((b) => {
  b.addEventListener("click", () => btnHandler(b));
});
