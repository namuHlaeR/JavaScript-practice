const character = document.getElementById("character-img");
const object = document.getElementById("object-img");
const score = document.getElementById("score");
let counter = 0;

//Geeting click action for jump
document.body.addEventListener("click", function jump(){

//Ckecking if animation is already applied
    if(character.classList == "animate"){return}

//Adding and removing the animation 
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate")
    }, 2000);
});

//Checking if we git the obstacle
const survival = setInterval( function() {

//Asking for output to compare
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let objectLeft = parseInt(window.getComputedStyle(object).getPropertyValue("left"));
//Checking the merging point
    if(objectLeft < 20 && objectLeft >- 20 && characterTop >= 130){
        object.style.animation = "none";
        alert(`Game Over! Score: ${Math.floor(counter/100)}`);
        object.style = "block 5s infinite linear";
//Reseting the counter
        counter = 0
        }
//Point counter
        else{
            scoreCounter(score.innerHTML = Math.floor(counter / 100));
       }
}, 10);

//Point counter
function scoreCounter(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let objectLeft = parseInt(window.getComputedStyle(object).getPropertyValue("left"));

//Setting counting point
    if(objectLeft < 20 && objectLeft >- 20 && characterTop >= 130){
    }

//Adding point
    else{
        score.innerHTML = Math.floor(counter / 100);
        counter++;
    }
}