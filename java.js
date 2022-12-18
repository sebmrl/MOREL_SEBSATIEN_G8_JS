const button = document.getElementById("btn")
const exo1 = document.getElementById("exo1");
const list = document.querySelector("#liste");



// Exercice 1
button.addEventListener('click', function() {
    if (exo1.style.color === "red") {
        exo1.style.color = "green";
    }
    else {
        exo1.style.color = "red";
    }
});



// Exercice 3
const imgSwap = document.querySelector("#imgSwap");
imgSwap.addEventListener("click", function(){
    var rep = Math.floor(Math.random()*15);
    if(imgSwap.className == "js" && rep != 18){
        imgSwap.src ="Images/The Rock.png";
        imgSwap.classList.toggle("js");
        console.log(rep);
    }
    else if (rep == 10){
        imgSwap.src = "Images/indestructible.png";
        imgSwap.classList.toggle("js");
    }
    else{
        imgSwap.src = "Images/gigachad.jpg";
        imgSwap.classList.toggle("js");
        console.log(rep);
    }
})



// Exercice 4
document.addEventListener('keydown', (spacebarIsPressed) => {
    if(spacebarIsPressed.keyCode == 32){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    }
});



// Exercice 5
window.onscroll = function() {
    const windowHeight = document.documentElement.scrollTop;
    const progressHeight = (windowHeight / (document.body.offsetHeight - window.innerHeight)) * 100;
    document.getElementById("progress").style.width = progressHeight + "%";
};



// Add to list
const addButton = document.querySelector("#add");
addButton.addEventListener("click", function () {
    const li = document.createElement("li");
    const text = document.createTextNode("Test");

    li.appendChild(text);
    list.appendChild(li);
});


// Remove from list
const removeButton = document.getElementById("remove");
removeButton.addEventListener("click", function () {
    const li = list.children;

    list.removeChild(list.lastChild);
});




// Compte à rebour à la fin duquel, le background-color change
const playButton = document.getElementById("play");
async function timerChange() {
    for (let i = 3; i > 0; i--) {
        console.log(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log(0);
    document.body.style.backgroundColor = "green";

};




// Créer une variation de couleur du background quand on appuie sur entrée
var g = 0
var b = 255
var verif = 0
document.addEventListener('keydown', (enterIsPressed) => {
    if(enterIsPressed.keyCode == 13){
        if (verif == 0) {
            document.body.style.backgroundColor = "rgb(120," + g + "," + b + ")";
            g+=3;
            b-=3
            console.log(g + "c'est g")
            console.log(b + "c'est b")
            if (g == 255) {
                verif = 1
            }
        }   
        else if (verif == 1){
            document.body.style.backgroundColor = "rgb(120," + g + "," + b + ")";
            g-=3;
            b+=3;
            console.log(g + "c'est g")
            console.log(b + "c'est b")
            if (g == 0) {
                verif = 0
            }
        }
    }
});