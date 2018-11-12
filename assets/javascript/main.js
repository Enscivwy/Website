var open = document.getElementById("openSideNav")
var close = document.getElementById("closeSideNav")
var toAction = document.getElementById("phnavContainer")

open.onclick = () => openNav()
close.onclick = () => closeNav()

function openNav() {
    toAction.style.width = "100%"
}

function closeNav() {
    toAction.style.width = "0"

}