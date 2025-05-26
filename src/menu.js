export function menuPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "The Tale of the Prancing Pony";
    heading.classList.add("text-3xl", "font-bold", "mb-6", "mx-2", "text-center");

    const drinksSection = document.createElement("section");
    drinksSection.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "mb-8");

    const drinksHeading = document.createElement("h2");
    drinksHeading.textContent = "Drinks"
    drinksHeading.classList.add("text-2xl", "font-bold", "mb-6", "mx-2", "text-center");

    drinksSection.appendChild(
        createMenuItem(
            "Butterbeer (non-alcoholic)",
            "A frothy, sweet blend of spiced cream and caramel, served warm or chilled. A hobbit favorite for cozy nights.",
            "1 silver"
        )
    );

    drinksSection.appendChild(
        createMenuItem(
            "Ent-Draught Elixir (mint & elderflower)",
            "A refreshing herbal tonic said to invigorate the spirit and add an inch or two to your stature—if the Ents are to be believed.",
            "2 silver"
        )
    );

    drinksSection.appendChild(
        createMenuItem(
            "Dwarven Stout Ale (16+ only)",
            "Thick, dark, and smoky with notes of roasted barley and stonefruit. Brewed deep in the mines of Erebor.",
            "3 silver"
        )
    );

    drinksSection.appendChild(
        createMenuItem(
            "Shire Cider",
            "Crisp, golden apple cider with a hint of cinnamon and honey. Harvested and brewed in the orchards of Hobbiton.",
            "2 silver"
        )
    );

    const foodSection = document.createElement("section");
    foodSection.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6");

    const foodHeading = document.createElement("h2");
    foodHeading.textContent = "Dishes"
    foodHeading.classList.add("text-2xl", "font-bold", "mb-6", "mx-2", "text-center");
    
    foodSection.appendChild(
        createMenuItem(
            "🥖 Halfling’s Breakfast Feast",
            "Crispy bacon, fried mushrooms, two eggs, roasted tomatoes, and pan-fried taters served with Shire-baked seed bread and butter.",
            "4 silver"
        )
    );

    foodSection.appendChild(
        createMenuItem(
            "🧅 Elven Forest Salad",
            "Fresh greens from Lothlórien, with lembas-crusted goat cheese, sun-dried tomatoes, and a misty herb vinaigrette.",
            "3 silver"
        )
    );

    foodSection.appendChild(
        createMenuItem(
            "🥘 Dwarven Meat Stew",
            "Slow-cooked boar and root vegetables in a thick ale gravy, served with stone-baked bread.",
            "5 silver"
        )
    );

    foodSection.appendChild(
        createMenuItem(
            "🐟 Rivendell River Trout",
            "Herb-stuffed whole trout grilled to perfection, served with wild rice and lemon thyme butter.",
            "6 silver"
        )
    );

    foodSection.appendChild(
        createMenuItem(
            "🍗 Ranger’s Roast",
            "Flame-seared venison haunch marinated in Old Toby spices, with roasted carrots and ale-glazed onions.",
            "7 silver"
        )
    );

    foodSection.appendChild(
        createMenuItem(
            "🍰 Hobbiton Honey Cake",
            "A spiced honey and apple cake, served warm with a scoop of cream from Rosie’s dairy.",
            "2 silver"
        )
    );

    content.appendChild(heading);
    content.appendChild(drinksHeading);
    content.appendChild(drinksSection);
    content.appendChild(foodHeading);
    content.appendChild(foodSection);
}

function createMenuItem(name, description, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("flex", "justify-between", "items-start", "text-oak", "p-4", "rounded-xl", "shadow-md", "max-w-md", "mx-auto", "my-4");

    const detailsDiv = document.createElement("div")

    const heading = document.createElement("h3");
    heading.textContent = name;
    heading.classList.add("text-xl", "font-bold");

    const para = document.createElement("p");
    para.textContent = description;
    para.classList.add("text-md", "italic", "text-oak/80")

    const priceElement = document.createElement("span");
    priceElement.textContent = price;
    priceElement.classList.add("text-ale", "font-semibold", "text-lg", "whitespace-nowrap", "ml-4");

    detailsDiv.appendChild(heading)
    detailsDiv.appendChild(para)
    menuItem.appendChild(detailsDiv)
    menuItem.appendChild(priceElement)

    return menuItem;
}