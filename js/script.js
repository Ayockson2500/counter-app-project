const counterDisplay = document.querySelector('#display');
const lowerCount = document.querySelector('#lower-count');
const addCount = document.querySelector("#add-count");

let count = 0;
var color = "";

lowerCount.addEventListener('click', function(e) {
    e.preventDefault();
    count--;
    counterDisplay.value = count;
    if (count < 0) {
        counterDisplay.style.color = "red";
    } else {
        return color;
    }
})

addCount.addEventListener('click', function(e) {
    e.preventDefault();
    count++;
    counterDisplay.value = count;
    if(count >= 0) {
        counterDisplay.style.color = "green";
    } else{
        return color;
    }
})