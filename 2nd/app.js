// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//Counter functionality
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
//Adding arguments for buttons
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        };
//Adding color based on value of odd and even
        if(count > 0){
            value.style.color = 'green'
        }
        if(count < 0 ){
            value.style.color = 'red'
        }
        if(count === 0 ){
            value.style.color = 'grey'
        }
//Displaying counter value
        value.textContent = count;
    })
});