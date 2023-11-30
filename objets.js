
 

// 1. Créez un objet personne
var personne = {
    nom: "Ousmane SANKHARE",
    age: 24,
    profession: "Développeur",

    // 2. Ajoutez une méthode d'introduction
    introduction: function () {
        console.log("Bonjour, je m'appelle " + this.nom + ", j'ai " + this.age + " ans et je suis " + this.profession + ".");
        document.write("Bonjour, je m'appelle </br>" + this.nom + ", j'ai " + this.age + " ans et je suis " + this.profession + ".");
    }
};

// 3. Créez plusieurs instances de l'objet personne avec des valeurs différentes
var personne1 = Object.create(personne);
personne1.nom = "Modou Gueye";
personne1.age = 25;
personne1.profession = "Designer";

var personne2 = Object.create(personne);
personne2.nom = "Adrien SARR";
personne2.age = 32;
personne2.profession = "Ingénieur";

// 4. Appelez la méthode d'introduction pour chaque instance
personne1.introduction();
personne2.introduction();

        document.write("<h2>"  + 'Arrondir les nombres' + "</h2>")

        let nombre = 4.567;

        // Arrondir à l'entier le plus proche
        let arrondi = Math.round(nombre);
        console.log("Arrondi :", arrondi);
        document.write("<p>Arrondi : " + arrondi + "</p>");
        // Racine carrée
        let racineCarree = Math.sqrt(nombre);
        console.log("Racine carrée :", racineCarree);
        document.write("<h4>Racine carrée : " + racineCarree + "</h4>");


        // Puissance (élévation à la puissance)
        let puissance = Math.pow(nombre, 2);
        console.log("Puissance :", puissance);
        document.write("<p>Puissance : " + puissance + "</h4>");

        // Génération de nombres aléatoires dans une plage spécifiée
        let nombreAleatoireEntre0et1 = Math.random();
        console.log("Nombre aléatoire entre 0 et 1 :", nombreAleatoireEntre0et1);
        document.write("<h5>Nombre aléatoire entre 0 et 1 : " + nombreAleatoireEntre0et1 + "</h5>");


        let nombreAleatoireEntre1et10 = Math.floor(Math.random() * 10) + 1;
        console.log("Nombre aléatoire entre 1 et 10 :", nombreAleatoireEntre1et10);
        document.write("<h4>Nombre aléatoire entre 1 et 10 : " + nombreAleatoireEntre1et10 + "</h4>");
  

 document.write("<h2>"  + 'Objets Date' + "</h2>");

 // Fonction pour afficher la date et l'heure actuelles
function afficherDateEtHeureActuelles() {
    const dateActuelle = new Date();
    console.log("Date et heure actuelles : " + dateActuelle);
    document.write("<h4>" + dateActuelle +"</h4>")
}

// Fonction pour calculer la différence en jours entre deux dates
function differenceEnJours(date1, date2) {
    const millisecondsParJour = 24 * 60 * 60 * 1000; // Nombre de millisecondes dans une journée
    const differenceEnMilliseconds = Math.abs(date1 - date2);
    const differenceEnJours = Math.floor(differenceEnMilliseconds / millisecondsParJour);
    return differenceEnJours;
}

// Exemple d'utilisation
afficherDateEtHeureActuelles();

const date1 = new Date("2023-01-01");
const date2 = new Date(); // Date actuelle

const joursDifference = differenceEnJours(date1, date2);
console.log("Différence en jours entre les deux dates : " + joursDifference + " jours");
document.write("Différence en jours entre les deux dates : " + joursDifference + " jours");


document.write("<h2>"  + "Manipulation d'objets String" + "</h2>");
            // Fonction pour compter le nombre de caractères dans une chaîne
function compterCaracteres(chaine) {
  // Utilise la propriété length de l'objet String pour compter les caractères
  var nombreCaracteres = chaine.length;
  return nombreCaracteres;
}

// Fonction pour rechercher et remplacer une sous-chaîne dans une chaîne donnée
function remplacerSousChaine(chaine, sousChaineARemplacer, nouvelleSousChaine) {
  // Utilise la méthode replace de l'objet String pour effectuer le remplacement
  var nouvelleChaine = chaine.replace(sousChaineARemplacer, nouvelleSousChaine);
  return nouvelleChaine;
}

// Exemples d'utilisation
var maChaine = "Bonjour, c'est un exemple de chaîne.";
console.log("Nombre de caractères dans la chaîne :", compterCaracteres(maChaine));
document.write("Nombre de caractères dans la chaîne :</br>", compterCaracteres(maChaine));


var chaineModifiee = remplacerSousChaine(maChaine, "exemple", "illustration");
console.log("Chaîne modifiée :", chaineModifiee);
document.write("Chaîne modifiée :", chaineModifiee);

        

            // Création d'un objet personnalisé
var personne = {
  nom: "Frederic LeRoy Pryor",
  age: 30,
  ville: "Paris",
  profession: "économiste et universitaire",
  
  // Méthode pour afficher les détails de la personne
  afficherDetails: function() {
    console.log(`Nom: ${this.nom}, Age: ${this.age}, Ville: ${this.ville}, Proffession: ${this.profession}`);
    document.write(`Nom: ${this.nom}, Age: ${this.age}, Ville: ${this.ville}, Profession: ${this.profession}`);
  }
};

// Ajout de nouvelles propriétés à l'objet
personne.profession = "économiste et universitaire";
personne.email = "john@example.com";

// Modification d'une propriété existante
personne.age = 31;

// Appel de la méthode pour afficher les détails
personne.afficherDetails();

// Utilisation de quelques méthodes des objets Math, Date et String
var nombreAleatoire = Math.random(); // Génère un nombre aléatoire entre 0 (inclus) et 1 (exclus)
console.log("Nombre aléatoire:", nombreAleatoire);

var dateActuelle = new Date(); // Obtient la date et l'heure actuelles
console.log("Date actuelle:", dateActuelle);

var texte = "Bonjour, comment ça va ?";
console.log("Longueur du texte:", texte.length); // Obtient la longueur du texte
document.write("Longueur du texte:", texte.length);
console.log("Texte en majuscules:", texte.toUpperCase()); // Convertit le texte en majuscules
document.write("Texte en majuscules:", texte.toUpperCase());
        

