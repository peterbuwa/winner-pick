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

let sliderIndex = 0;
plusSlides();
function plusSlides(){
    let table = document.getElementsByClassName("table");
    for(let i = 0; i < table.length; i++){
        table[i].style.display = "none";
    }
    sliderIndex++;
    if(sliderIndex > table.length){sliderIndex = 1;}
    table[sliderIndex -1].style.display = "block";
    setTimeout(plusSlides, 5000)
}

let left = document.querySelector(".arrow-left");
let right = document.querySelector(".arrow-right");
left.addEventListener("click", function(){
    let table = document.getElementsByClassName("table");
    sliderIndex += 1;
    if (sliderIndex > table.length){
        sliderIndex = 1;
    }

    for (let index = 0; index < table.length; index++){
        table[index].style.display = "none";
    }
    table[sliderIndex-1].style.display="block";
})

right.addEventListener("click", function(){
    let table = document.getElementsByClassName("table")
    sliderIndex -= 1;
    if(sliderIndex < 1){
        sliderIndex = table.length;
    }
    for(let index=0; index < table.length; index++){
        table[index].style.display="none";
        table[sliderIndex - 1].style.display="block"
    }

})

            //table view more

let block = document.querySelector(".block");
let ticket = document.querySelector(".more-ticket")
let viewmore = document.querySelector(".viewmore")
block.addEventListener("click", function(){
    ticket.style.display="block";
    viewmore.style.display="none";
})