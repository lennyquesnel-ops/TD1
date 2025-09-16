let tab = ["Pierre","Feuille","Ciseaux"];
let egalite = 0;
let victoire = 0;
let defaite = 0;

function mettreajour(){
document.getElementById("egalite").innerHTML = egalite;
document.getElementById("victoire").innerHTML = victoire;
document.getElementById("defaite").innerHTML = defaite;
}

function affichechoix(choix){
    document.getElementById("choixRobot").innerHTML = choix 
}
function affichechoix2(choix){
    document.getElementById("choixH").innerHTML = choix 
}

function afficheresultat(result){
    document.getElementById("resultat").innerHTML = result;
}

function getRandomint(max){
    return Math.floor(Math.random()*max);
}

function choixRobot(){
    let nb = getRandomint(3);
    return nb;
}
mettreajour();

var Pierre = document.getElementById('Pierre');
Pierre.addEventListener("click", function(){
    var choix = tab[choixRobot()];
    var result;
    if (choix == "Pierre"){
        egalite++;
        result = "égalité"
    } 
    if (choix == "Feuille"){
        defaite++;
        result = "défaite"
    }
    if (choix == "Ciseaux"){
    victoire++;
    result = "victoire"
    }
    afficheresultat(result);
    affichechoix2("Pierre");
    affichechoix(choix);
   mettreajour();
});

var Feuille = document.getElementById('Feuille');
Feuille.addEventListener("click", function(){
    var choix = tab[choixRobot()];
    if (choix == "Pierre"){
        victoire++;
        result = "victoire"
    } 
    if (choix == "Feuille"){
        egalite++;
        result = "égalité"
    }
    if (choix == "Ciseaux"){
    defaite++;
    result = "défaite"
    }
    afficheresultat(result);
    affichechoix2("Feuille");
    affichechoix(choix);
    mettreajour();
});

var Ciseaux = document.getElementById('Ciseaux');
Ciseaux.addEventListener("click", function(){
    var choix = tab[choixRobot()];
     if (choix == "Pierre"){
        defaite++;
        result = "défaite"
    } 
    if (choix == "Feuille"){
        victoire++;
        result = "victoire"
    }
    if (choix == "Ciseaux"){
    egalite++;
    result = "égalité"
    }
    afficheresultat(result);
    affichechoix2("Ciseaux");
    affichechoix(choix);
    mettreajour();
});

var reset = document.getElementById('reini');
reset.addEventListener('click', function() {
    egalite = 0;
    victoire = 0;
    defaite = 0;
    mettreajour();
})