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
    activeDropDowns = [...document.querySelectorAll(".sidebar-arrow-up")];
    activeDropDowns.forEach((b) => {
      b.classList.toggle("sidebar-arrow-down");
      b.classList.toggle("sidebar-arrow-up");
    });
  }
  if (btn.classList.contains("features-sidebar")) {
    sidebarSubmenus[0].classList.toggle("show-sidebar-submenu");
    btn.classList.toggle("sidebar-arrow-down");
    btn.classList.toggle("sidebar-arrow-up");
  }
  if (btn.classList.contains("company-sidebar")) {
    sidebarSubmenus[1].classList.toggle("show-sidebar-submenu");
    btn.classList.toggle("sidebar-arrow-down");
    btn.classList.toggle("sidebar-arrow-up");
  }
};

/** listeners */
btns.forEach((b) => {
  b.addEventListener("click", () => btnHandler(b));
});
