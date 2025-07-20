const menuElementsToToggle = document.querySelectorAll(".js-toggle-menu")
const toggleBtn = document.querySelector(".js-toggle-btn")

toggleBtn.addEventListener("click", toggleMenu)

function toggleMenu(){
  const isOpen = toggleBtn.getAttribute("aria-expanded") === "true"
  toggleBtn.setAttribute("aria-expanded", !isOpen)

  menuElementsToToggle.forEach(el => {
    el.classList.toggle("hidden")
    el.classList.toggle("flex")
  })
}

const navbarLinks = document.querySelectorAll(".js-navbar-link")
navbarLinks.forEach(link => link.addEventListener("click", toggleMenu))


