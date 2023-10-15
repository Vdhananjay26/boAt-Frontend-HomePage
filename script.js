let nav = document.getElementById("navbar");
window.onscroll = function(){
    if(window.pageYOffset >= 50){
        console.log("hello");
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}

let goTop = document.querySelector(".go-top");

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 500){
        goTop.style.display = "block";
    }else{
        goTop.style.display = "none";
    }
})


const side_bar = document.querySelector("#sidebar");
        const open_bar = document.querySelector(".bar");
        const close_bar = document.querySelector("#close");
        console.log(open_bar);
        console.log(close_bar);
        console.log((side_bar));

        open_bar.addEventListener('click', () => {
            side_bar.style.left = '0';
        })
        close_bar.addEventListener('click', () => {
            side_bar.style.left = '-100%';
        })