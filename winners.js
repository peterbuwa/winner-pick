let bars = document.querySelector(".bars i")
let nav = document.querySelector(".nav-display")


bars.addEventListener("click", () =>{
    if(bars.classList.contains("fa-bars")){
        nav.style.height= "100%";
        bars.classList.add("fa-times");
        bars.classList.remove("fa-bars");
        nav
    }else {
        nav.style.height= "0";
        nav.style.display= "block";
        bars.classList.remove("fa-times");
        bars.classList.add("fa-bars");
    }
})