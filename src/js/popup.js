const popup = document.querySelector("#popup");

const toggle = () => {
    popup.classList.add("hidden");  
};

document.querySelector("#button-popup").addEventListener("click", () => toggle());

popup.addEventListener('click', function(e) {
    if (e.target == this){
        toggle();
    };
});