const wrapper = document.querySelector(".sliderWrapper")

console.log(wrapper)

// Get all menu items and the sliderWrapper
const menuItems = document.querySelectorAll('.menuItem');
const sliderWrapper = document.querySelector('.sliderWrapper');

// Add click events to navigation items
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Calculate the translateX value based on the index
        const offset = index * window.innerWidth;
        sliderWrapper.style.transform = `translateX(-${offset}px)`;
    });
});
