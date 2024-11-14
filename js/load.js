// LOADING ANIMATION START

function closepreloader(){
    var preloader = document.getElementById("preloader");
    preloader.classList.add('fade-out');

    setTimeout(function(){
        preloader.style.display = "none";
    }, 1000);
}

window.addEventListener("load",function(){
    setTimeout(closepreloader, 2000);
});
// LOADING ANIMATION END