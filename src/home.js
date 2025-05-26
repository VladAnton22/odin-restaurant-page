export function homePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to The Prancing Pony";
    heading.classList.add("text-3xl", "font-bold", "mb-6", "mx-2", "text-center");

    const para = document.createElement("p");
    para.textContent =
        "Nestled at the crossroads of adventure and comfort, The Prancing Pony offers hearty meals, warm firelight, and a tankard always brimming with cheer. Whether you’re a ranger from the North, a hobbit from the Shire, or a curious traveler from beyond the Misty Mountains, you’ll find rest and revelry here. Step inside and taste the magic of Middle-earth.";
    para.classList.add("text-xl", "m-4")
    
    content.appendChild(heading);
    content.appendChild(para)
}

const content = document.getElementById("content");
content.innerHTML = "";

const heading = document.createElement("h1");
heading.textContent = "Welcome to The Prancing Pony";
heading.classList.add("text-3xl", "font-bold", "mb-6", "mx-2", "text-center");

const para = document.createElement("p");
para.textContent =
    "Nestled at the crossroads of adventure and comfort, The Prancing Pony offers hearty meals, warm firelight, and a tankard always brimming with cheer. Whether you’re a ranger from the North, a hobbit from the Shire, or a curious traveler from beyond the Misty Mountains, you’ll find rest and revelry here. Step inside and taste the magic of Middle-earth.";
para.classList.add("text-xl", "m-4")

content.appendChild(heading);
content.appendChild(para)
