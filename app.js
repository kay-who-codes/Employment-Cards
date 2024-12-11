document.addEventListener("DOMContentLoaded", () => {
    const drawJobButton = document.getElementById("draw-job-card");
    const drawQualificationButton = document.getElementById("draw-qualification-cards");
    const backButton = document.getElementById("back-button");
    const mainMenu = document.getElementById("main-menu");
    const cardDisplay = document.getElementById("card-display");
    const cardsContainer = document.getElementById("cards");
    const employerCardCount = 70;
    const meritCardCount = 272;

    // Dropdown menu functionality
    const moreAppsButton = document.getElementById("more-apps-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    moreAppsButton.addEventListener("click", (event) => {
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
        event.stopPropagation();  // Prevent click event from propagating to the body
    });

    // Close dropdown menu if clicked outside
    document.addEventListener("click", (event) => {
        if (!moreAppsButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    // Function to draw a random Job card
    function drawJobCard() {
        const randomIndex = Math.floor(Math.random() * employerCardCount) + 1;
        const cardImage = `Individual PNGs/Employer Card (${randomIndex}).png`;
        displayCards([cardImage]);
    }

    // Function to draw 7 random Merit cards
    function drawQualificationCards() {
        const indices = Array.from({ length: meritCardCount }, (_, i) => i + 1)
            .sort(() => 0.5 - Math.random())
            .slice(0, 7);
        const cardImages = indices.map(index => `Individual PNGs/Merit Card (${index}).png`);
        displayCards(cardImages);
    }

    // Function to display cards on screen
    function displayCards(cardImages) {
        mainMenu.style.display = "none";
        cardDisplay.style.display = "block";
        cardsContainer.innerHTML = ""; // Clear previous cards
        cardImages.forEach(cardImage => {
            const cardElement = document.createElement("img");
            cardElement.classList.add("card");
            cardElement.src = cardImage;
            cardElement.alt = "Card Image";
            // Add click event for fullscreen toggle
            cardElement.addEventListener("click", () => {
                if (cardElement.classList.contains("fullscreen")) {
                    cardElement.classList.remove("fullscreen");
                } else {
                    cardElement.classList.add("fullscreen");
                }
            });
            cardsContainer.appendChild(cardElement);
        });
    }

    // Event listeners for buttons
    drawJobButton.addEventListener("click", drawJobCard);
    drawQualificationButton.addEventListener("click", drawQualificationCards);
    backButton.addEventListener("click", () => {
        cardDisplay.style.display = "none";
        mainMenu.style.display = "block";
    });
});
