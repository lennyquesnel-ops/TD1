let tab = ["Pierre","Feuille","Ciseaux"];
let egalite = 0;
let victoire = 0;
let defaite = 0;

mettreajour();

function getRandomint(max){
    return Math.floor(Math.random()*max);
}

function mettreajour(){
document.getElementById("egalite").innerHTML = egalite;
document.getElementById("victoire").innerHTML = victoire;
document.getElementById("defaite").innerHTML = defaite;
}


function choixRobot(){
    let nb = getRandomint(3);
    return nb;
}

var Pierre = document.getElementById('Pierre');
Pierre.addEventListener("click", function(){
    var choix = tab[choixRobot()];
    if (choix == "Pierre") egalite++;
    if (choix == "Feuille") defaite++;
    if (choix == "Ciseaux") victoire++;
   mettreajour();
});

var Feuille = document.getElementById('Feuille');
Feuille.addEventListener("click", function(){
    var choix = tab[choixRobot()];
    if (choix == "Pierre") victoire++;
    if (choix == "Feuille") egalite++;
    if (choix == "Ciseaux") defaite++;
    mettreajour();
});

var Ciseaux = document.getElementById('Ciseaux');
Ciseaux.addEventListener("click", function(){
    var choix = tab[choixRobot()];
    if (choix == "Pierre") defaite++;
    if (choix == "Feuille") victoire++;
    if (choix == "Ciseaux") egalite++;
    mettreajour();
});

var reset = document.getElementById('reini');
reset.addEventListener('click', function() {
    egalite = 0;
    victoire = 0;
    defaite = 0;
    mettreajour();
})