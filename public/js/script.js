document.addEventListener('DOMContentLoaded', function () {
    // fixed nav
    const header = document.querySelector("header")
    
    window.onscroll = function () {
        if (window.scrollY > header.offsetTop) {
            header.classList.remove('absolute')
            header.classList.add('navbar-fixed')
        } else {
            header.classList.remove('navbar-fixed')
            header.classList.add('absolute')
        }
    }

    // hamburger
    const hamburger = document.querySelector("#hamburger")
    const navMenu = document.querySelector("#navMenu")

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle("hamburger-active")
        navMenu.classList.toggle("hidden")
    })
})
