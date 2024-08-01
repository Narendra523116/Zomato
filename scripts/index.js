document.addEventListener('DOMContentLoaded',  function(){
    let accordings = document.querySelectorAll(".according");

    accordings.forEach(function(according){
        according.addEventListener('click', function(event){
            let data = according.querySelector(".according-data");
            let icon = according.querySelector(".icon-rotate");

            console.log(data);
            console.log(icon);

            data.classList.toggle("show");
            icon.classList.toggle("animate");
        });
    });
});


