document.addEventListener("DOMContentLoaded", () => {
    const drawJobButton = document.getElementById("draw-job-card");
    const drawQualificationButton = document.getElementById("draw-qualification-cards");
    const backButton = document.getElementById("back-button");
    const mainMenu = document.getElementById("main-menu");
    const cardDisplay = document.getElementById("card-display");
    const cardsContainer = document.getElementById("cards");
    
    let cardsData = [];

    // Fetch card data from JSON file
    fetch('cards.json')
        .then(response => response.json())
        .then(data => {
            cardsData = data;
        })
        .catch(error => console.error("Error loading card data:", error));

    // Function to draw a random Job card
    function drawJobCard() {
        const jobCards = cardsData.filter(card => card.CardType === "Job");
        const randomJob = jobCards[Math.floor(Math.random() * jobCards.length)];
        displayCards([randomJob]);
    }

    // Function to draw 7 random Qualification cards
    function drawQualificationCards() {
        const qualificationCards = cardsData.filter(card => card.CardType === "Qualification");
        const shuffled = qualificationCards.sort(() => 0.5 - Math.random());
        const selectedQualifications = shuffled.slice(0, 7);
        displayCards(selectedQualifications);
    }

    // Function to display cards
    function displayCards(cards) {
        mainMenu.style.display = "none";
        cardDisplay.style.display = "block";
        cardsContainer.innerHTML = ""; // Clear previous cards

        cards.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.textContent = card.Card;
            cardsContainer.appendChild(cardElement);
        });
    }

    // Event listeners
    drawJobButton.addEventListener("click", drawJobCard);
    drawQualificationButton.addEventListener("click", drawQualificationCards);
    backButton.addEventListener("click", () => {
        cardDisplay.style.display = "none";
        mainMenu.style.display = "block";
    });
});
