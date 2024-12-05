// Extract the painting ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const paintingId = urlParams.get("paintingId");

// Painting details mapping
const paintings = {
    "painting-1": { title: "Fallen-Sky", price: "$1,000,000" },
    "painting-2": { title: "Space-Rift", price: "$2,500,000" },
    "painting-3": { title: "Heterochromatic", price: "$1,000,000" },
    "painting-4": { title: "Psychedelic", price: "$1,100,000" },
    "painting-5": { title: "Transcendence", price: "$950,000" }
};

// Display the selected painting details
const paintingDetailsElement = document.getElementById("painting-details");
if (paintingId && paintings[paintingId]) {
    const selectedPainting = paintings[paintingId];
    paintingDetailsElement.innerText = `You are purchasing "${selectedPainting.title}" for ${selectedPainting.price}.`;
} else {
    paintingDetailsElement.innerText = "Invalid painting selected.";
}

// Payment form validation
document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Input fields
    const cardNumber = document.getElementById("card-number").value;
    const expirationDate = document.getElementById("expiration-date").value;
    const cvc = document.getElementById("cvc").value;

    // Validate card number (numeric, 13–16 digits)
    if (!/^\d{13,16}$/.test(cardNumber)) {
        showMessage("Invalid card number. Must be 13–16 digits.", "error");
        return;
    }

    // Validate expiration date (format MM/YY and in the future)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate) || !isFutureDate(expirationDate)) {
        showMessage("Invalid expiration date. Must be in MM/YY format and in the future.", "error");
        return;
    }

    // Validate CVC (3 numeric digits)
    if (!/^\d{3}$/.test(cvc)) {
        showMessage("Invalid CVC. Must be 3 digits.", "error");
        return;
    }

    // If all validations pass
    showMessage("Payment processed successfully!", "success");
});

// Helper: Check if the expiration date is in the future
function isFutureDate(expirationDate) {
    const [month, year] = expirationDate.split("/").map(Number);
    const now = new Date();
    const currentYear = now.getFullYear() % 100; // Last 2 digits of current year
    const currentMonth = now.getMonth() + 1;

    return year > currentYear || (year === currentYear && month >= currentMonth);
}

// Helper: Display a message to the user
function showMessage(message, type) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = type === "success" ? "green" : "red";
}
