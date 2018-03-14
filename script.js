window.onload = function () {
    let championsItem = document.querySelectorAll(".champions__item");


    for(let i = 0; i < championsItem.length; i++){
        championsItem[i].addEventListener("click", function() {
           this.classList.toggle("champions__item--active")
        });
    }
};