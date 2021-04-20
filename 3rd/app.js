const character = document.getElementById("character-img");
const object = document.getElementById("object");
const counter = 0;

function jump(){
    if(character.classList == "animation"){return};
    character.classList.add( "animate");
    setTimeout(function(){
        character.classList.remove("animation");
    },300);
};

let checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let objectLeft = parseInt(window.getComputedStyle(object).getPropertyValue("left"));;
    if (objectLeft < 20 && objectLeft >- 20 && characterTop >- 130){
        object.style.animation = "none";
        alert("Game over SCORE: "+ Math.floor(counter / 100));
        counter = 0;
        object.style.animation = "block 1s infinite linear";}
        else{
            counter++;
            document.getElementById("score").innerHTML = Math.floor(counter/100);

        }   
}, 100);

console.log("hello")