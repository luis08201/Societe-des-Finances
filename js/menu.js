let menuToggle = document.getElementById("menuToggle");
let closeToggle = document.getElementById("closetoggle");

menuToggle.addEventListener("click", () =>{
    closeToggle.classList.remove("active");
    menuToggle.classList.add("active");
    let nav = document.getElementById("nav");
    nav.classList.add("active");

    if(menuToggle.classList.contains("active")){
        closeToggle.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            nav.classList.remove("active");
        });
    }
})