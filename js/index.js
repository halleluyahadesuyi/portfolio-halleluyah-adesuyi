const hamburgerToggle = document.getElementsByClassName('hamburger-toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburgerToggle.addEventListener("click", () => {
  navbarLinks.classList.add("active")
})

