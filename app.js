const wrapper = document.querySelector(".sliderWrapper");
const menuItem  = document.querySelectorAll(".menuItem");

const products = [
    {
    id: painting-1,
    title: "Fallen-Sky",
    price: 1000000,
    colors: [
        {
        code: "black",
        img: "./img/Products/Item_1",
    },
    ],
},
{
    id: painting-2,
    title: "Space-Rift",
    price: 1000000,
    colors: [
        {
        code: "black",
        img: "./img/Products/Item_2",
    },
    ],
},
{
    id: painting-3,
    title: "Heterochrome",
    price: 1000000,
    colors: [
        {
        code: "black",
        img: "./img/Products/Item_3",
    },
    ],
},
{
    id: painting-4,
    title: "Psychedelic",
    price: 1000000,
    colors: [
        {
        code: "black",
        img: "./img/Products/Item_4",
    },
    ],
},
{
    id: painting-5,
    title: "Transcendence",
    price: 1000000,
    colors: [
        {
        code: "black",
        img: "./img/Products/Item_5",
    },
    ],
},
],

menuItem.forEach((item, index) =>{
    itemaddEventListener("click", () =>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    }); 
});

