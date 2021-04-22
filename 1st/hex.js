//Creating basic variables and #hex code array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const textColor = document.getElementById('textColor');

//Creatig button button loop 
btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

//Displaying color #hex code and coloring body of page
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    color.style.color = hexColor;    
    textColor.style.color = hexColor;
});

//Randomizer engine
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
};