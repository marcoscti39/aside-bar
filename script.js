let menuButton = document.querySelector(".menu")
let closeSideBar = document.querySelector(".close-sidebar")
let aside = document.querySelector(".aside")

menuButton.addEventListener("click", ()=>{
    aside.classList.toggle("show-sidebar")
    console.log('kjfnvjdv')
})

closeSideBar.addEventListener("click", ()=>{
    aside.classList.remove("show-sidebar")
})