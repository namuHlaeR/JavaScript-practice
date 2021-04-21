const character = document.getElementById("character-img");
const object = document.getElementById("object-img");
const counter = 0;

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

