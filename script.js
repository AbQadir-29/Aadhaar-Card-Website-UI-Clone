let closeBtn = document.getElementById("close-menu")
let menu = document.querySelector(".hammenu")


closeBtn.addEventListener("click", function handleClose() {
  menu.classList.remove("open")
})


// open-menu

let openBtn = document.getElementById("open-menu")
// let menu = document.querySelector(".hammenu")


openBtn.addEventListener("click", function handleOpen() {
  menu.classList.add("open")
})
