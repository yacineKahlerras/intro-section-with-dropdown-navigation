/** vars */
const btns = [...document.getElementsByTagName("button")];
const sidebarContainer = document.querySelector(".sidebar-container");
const sidebarSubmenus = [...document.querySelectorAll(".sidebar-submenu")];
const navebarSubmenus = [...document.querySelectorAll(".navbar-submenu")];

/** handles all button clicks */
const btnHandler = (btn) => {
  // show/close sidebar
  if (
    btn.classList.contains("btn-toggle") ||
    btn.classList.contains("close-button")
  ) {
    setResetSidebar();
  }
  // sidebar features dropdown
  if (btn.classList.contains("features-sidebar")) {
    sidebarDropDown(0, btn);
  }
  // sidebar company dropdown
  if (btn.classList.contains("company-sidebar")) {
    sidebarDropDown(1, btn);
  }
  // nav features dropdown
  if (btn.classList.contains("nav-features")) {
    navebarSubmenus[0].classList.toggle("show-navbar-submenu");
    let box = btn.getBoundingClientRect();
    let top = box.bottom;
    let left = (box.left + box.right) / 2;
    navebarSubmenus[0].style.top = `${top}px`;
    navebarSubmenus[0].style.left = `${left}px`;
  }
  // nav company dropdown
  if (btn.classList.contains("nav-company")) {
    navebarSubmenus[1].classList.toggle("show-navbar-submenu");
    let box = btn.getBoundingClientRect();
    let top = box.bottom;
    let left = (box.left + box.right) / 2;
    navebarSubmenus[1].style.top = `${top}px`;
    navebarSubmenus[1].style.left = `${left}px`;
  }
};

/** activates or disables the dropdown */
const sidebarDropDown = (index, btn) => {
  sidebarSubmenus[index].classList.toggle("show-sidebar-submenu");
  btn.classList.toggle("sidebar-arrow-down");
  btn.classList.toggle("sidebar-arrow-up");
};

/** reset sidebar dropdowns */
const setResetSidebar = () => {
  sidebarContainer.classList.toggle("show-sidebar");
  sidebarSubmenus.forEach((s) => s.classList.remove("show-sidebar-submenu"));
  const activeDropDownBtns = [
    ...document.querySelectorAll(".sidebar-arrow-up"),
  ];
  activeDropDownBtns.forEach((b) => {
    b.classList.toggle("sidebar-arrow-down");
    b.classList.toggle("sidebar-arrow-up");
  });
};

/** listeners */
btns.forEach((b) => {
  b.addEventListener("click", () => btnHandler(b));
});
