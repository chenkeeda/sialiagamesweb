// menu open close
const btnMenu = document.getElementById('menu')
const btnMenuClose = document.getElementById('menu-close')
const mobileMenuGroup = document.getElementById('nav')



btnMenu.onclick = () => {
    openMenu()
}
btnMenuClose.onclick = () => {
    hideMenu()
}

function openMenu() {
    btnMenu.style.display = 'none'
    btnMenuClose.style.display = 'block'
    mobileMenuGroup.classList.add('max-md:translate-y-0')
    mobileMenuGroup.classList.remove('max-md:-translate-y-full')
}

function hideMenu() {
    btnMenu.style.display = 'block'
    btnMenuClose.style.display = 'none'
    mobileMenuGroup.classList.add('max-md:-translate-y-full')
    mobileMenuGroup.classList.remove('max-md:translate-y-0')
}

window.onresize = () => {
    screenCheck()
}

screenCheck()

function screenCheck() {
    const width = document.body.clientWidth;
    if (width > 767) {
        btnMenu.style.display = 'none'
        btnMenuClose.style.display = 'none'
    } else {
        hideMenu()
    }
}
