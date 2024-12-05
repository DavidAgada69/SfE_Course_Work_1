// Get all menu items and the sliderWrapper
const wrapper = document.querySelector(".sliderWrapper");
const menuItem  = document.querySelectorAll(".menuItem");


// Add click events to navigation items
menuItem.forEach((item, index) =>{
    item.addEventListener("click", () =>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    }); 
});

// Attach event listeners to all Buy Now buttons
document.querySelectorAll(".buyButton").forEach((button, index) => {
    button.addEventListener("click", () => {
        // Get the corresponding painting ID from the parent slider item
        const paintingId = `painting-${index + 1}`;

        // Redirect to payment.html with the painting ID as a query parameter
        window.location.href = `payment.html?paintingId=${paintingId}`;
    });
});
