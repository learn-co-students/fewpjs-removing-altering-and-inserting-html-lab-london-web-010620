// Write your code here!

//removing main#main
document.querySelector("main#main").remove()


// create a new header and assign it nonsense
const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Knobhead is the champion"
