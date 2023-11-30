// Variables
const projectList = document.getElementById('project-list');
const projectNameInput = document.getElementById('projectName');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const performanceResults = document.getElementById('performance-results');

// Fonction pour valider le formulaire
function validateForm(projectName, startDate, endDate) {
    // Vérifier si les champs sont vides
    if (!projectName || !startDate || !endDate) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false;
    }

    // Vérifier si la date de fin est postérieure à la date de début
    if (new Date(endDate) < new Date(startDate)) {
        alert("La date de fin ne peut pas être antérieure à la date de début.");
        return false;
    }

    return true; // Le formulaire est valide
}

// Fonction pour comparer les dates
function compareDates(startDate1, endDate1, startDate2, endDate2) {
    return startDate1 === startDate2 && endDate1 === endDate2;
}

// Fonction pour gérer l'ajout d'un projet
function addProject() {
    // Récupérer les valeurs des champs du formulaire
    const projectName = projectNameInput.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    // Valider le formulaire
    if (validateForm(projectName, startDate, endDate)) {
        // Comparer les dates avec les projets existants
        const rows = projectList.getElementsByTagName('tr');
        for (const row of rows) {
            const existingStartDate = row.getElementsByTagName('td')[1].innerText;
            const existingEndDate = row.getElementsByTagName('td')[2].innerText;

            if (compareDates(startDate, endDate, existingStartDate, existingEndDate)) {
                alert("Un projet avec ces dates existe déjà.");
                return;
            }
        }

        // Ajouter la nouvelle ligne à la liste des projets
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${projectName}</td>
            <td>${startDate}</td>
            <td>${endDate}</td>
            <td><button onclick="editProject(this)">Modifier</button> <button onclick="deleteProject(this)">Supprimer</button></td>
        `;

        // Ajout de la nouvelle ligne à la liste des projets
        projectList.appendChild(newRow);

        // Effacer les champs du formulaire après l'ajout
        projectNameInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';

        // Afficher un message de succès
        alert("Le projet a été ajouté avec succès.");
    }
}

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault(); // Empêcher le rechargement de la page par défaut
    addProject(); // Appeler la fonction pour ajouter le projet
}

// Ajouter un gestionnaire d'événements pour le formulaire
const projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', handleSubmit);


// Fonction pour modifier un projet
function editProject(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    // Remplir le formulaire avec les détails du projet sélectionné
    projectNameInput.value = cells[0].textContent;
    startDateInput.value = cells[1].textContent;
    endDateInput.value = cells[2].textContent;

    // Supprimer le projet de la liste
    row.parentNode.removeChild(row);
}

// Fonction pour supprimer un projet
function deleteProject(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Fonction pour mesurer les performances
function measurePerformance() {
        const performanceResults = document.getElementById('performance-results');

        if (window.performance) {
            const timing = window.performance.timing;

            // Calcul du temps de chargement
            const loadTime = timing.loadEventEnd - timing.navigationStart;

            // Afficher les résultats dans la section d'optimisation du BOM
            performanceResults.innerHTML = `
                <h3>Résultats de Performance</h3>
                <p>Temps de chargement: ${loadTime} ms</p>
            `;
        } else {
            performanceResults.innerHTML = "<p>Les performances ne peuvent pas être mesurées sur ce navigateur.</p>";
        }
    }

    // Appeler la fonction une fois que la page est chargée
    window.onload = measurePerformance;

// Appeler la fonction de mesure des performances au chargement de la page
window.onload = measurePerformance;

