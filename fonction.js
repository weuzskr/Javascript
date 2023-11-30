
        // Définition de la fonction greet
        function greet(name) {
            console.log("Bonjour, " + name + " !");
            document.write('<h5>' + name + '</h5>');
        }

        // Invoquer la fonction greet avec différents noms
        greet("Harris SEFEROVIC");
        greet("Ousmane SANKHARE");
        

 
        // Fonction calculate qui prend num1, num2 et operator comme paramètres
function calculate(num1, num2, operator) {
    // Utilisation d'une instruction switch pour effectuer différentes opérations en fonction de l'opérateur
    switch (operator) {
        case '+':
            return num1 + num2; // Addition
        case '-':
            return num1 - num2; // Soustraction
        case '*':
            return num1 * num2; // Multiplication
        case '/':
            if (num2 !== 0) {
                return num1 / num2; // Division (vérification pour éviter la division par zéro)
            } else {
                return "Division par zéro impossible";
            }
        default:
            return "Opérateur non reconnu";
    }
}


document.write('<h5>Résultats des calculs :</h5>');

        document.write('<p>' + calculate(5, 3, '+') + '</p>');  // Addition : 8
        document.write('<p>' + calculate(8, 2, '-') + '</p>');  // Soustraction : 6
        document.write('<p>' + calculate(4, 6, '*') + '</p>');  // Multiplication : 24
        document.write('<p>' + calculate(10, 2, '/') + '</p>'); // Division : 5
        document.write('<p>' + calculate(7, 0, '/') + '</p>');  // Tentative de division par zéro : "Division par zéro impossible"
        document.write('<p>' + calculate(5, 3, '%') + '</p>');  // Opérateur non reconnu : "Opérateur non reconnu"


     

// Définir la fonction calculateArea
function calculateArea(longueur, largeur) {
    // Calculer l'aire du rectangle
    var aire = longueur * largeur;
    // Retourner l'aire calculée
    return aire;
}

// Invoquer la fonction avec différentes dimensions
var aireRectangle1 = calculateArea(5, 10);
var aireRectangle2 = calculateArea(8, 15);
var aireRectangle3 = calculateArea(12, 7);

// Afficher les résultats
console.log("Aire du rectangle 1 :", aireRectangle1);
console.log("Aire du rectangle 2 :", aireRectangle2);
console.log("Aire du rectangle 3 :", aireRectangle3);
// Afficher les résultats sur la page HTML
        document.write('<p>Aire du rectangle 1 : ' + aireRectangle1 + '</p>');
        document.write('<p>Aire du rectangle 2 : ' + aireRectangle2 + '</p>');
        document.write('<p>Aire du rectangle 3 : ' + aireRectangle3 + '</p>');
    


    function outer() {
    console.log("Fonction outer De Harris SEFEROVIC");
    document.write("Fonction outer De Harris SEFEROVIC </br> </br> </br>");

    function inner() {
        console.log("Fonction inner Ousmane SANKHARE");
        document.write("Fonction inner Ousmane SANKHARE");
    }

    // Appel de la fonction imbriquée inner
    inner();
}

// Appel de la fonction principale outer
outer();



       
        function exemplePorteeVariables() {
            let variableLocale = "Je suis locale à la fonction.";
            document.getElementById("resultatPorteeVariables").innerHTML = variableLocale;
        }

        let variableExterne = "Je suis externe à la fonction.";

        console.log(variableExterne);
        exemplePorteeVariables();
        function genererNombreAleatoire(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let nombreAleatoire = genererNombreAleatoire(1, 100);
        document.getElementById("resultatNombreAleatoire").innerHTML = "Nombre aléatoire : " + nombreAleatoire;

        function trouverPlusGrandElement(tableau) {
            if (tableau.length === 0) {
                return "Le tableau est vide.";
            }

            let plusGrand = tableau[0];

            for (let i = 1; i < tableau.length; i++) {
                if (tableau[i] > plusGrand) {
                    plusGrand = tableau[i];
                }
            }

            return plusGrand;
        }

        // Exemple d'utilisation de la fonction pour trouver le plus grand élément d'un tableau
        let tableauExemple = [45, 78, 23, 56, 89, 12];
        let resultatPlusGrand = trouverPlusGrandElement(tableauExemple);
        document.getElementById("resultatPlusGrandElement").innerHTML = "Le plus grand élément du tableau est : " + resultatPlusGrand;
   