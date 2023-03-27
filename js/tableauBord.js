let container = document.querySelector(".container")
let containerBtn = document.querySelector(".containerBtn")

containerBtn.onclick = function(){
    container.classList.toggle("active");
}