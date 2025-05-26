export function aboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "The Tale of the Prancing Pony";
    heading.classList.add("text-3xl", "font-bold", "mb-6", "mx-2", "text-center");

    const para = document.createElement("p");
    para.textContent =
        "First opened by Barliman Butterbur’s great-grandfather, The Prancing Pony has long been a haven for wanderers and wanderlusters. Over the ages, it has welcomed pipe-smoking hobbits, sword-wielding warriors, and even the occasional wizard.";
    para.classList.add("text-xl", "m-4");

    const para2 = document.createElement("p");
    para2.textContent =
        "With a roaring hearth, enchanted mead, and a menu inspired by all the Free Peoples of Middle-earth, we aim to bring a taste of the realm’s best cuisine to your table. Our staff hail from every corner of Arda—from the hills of Hobbiton to the mines of Moria—and each brings their own story and spice to your plate.";
    para2.classList.add("text-xl", "m-4");

    const para3 = document.createElement("p");
    para3.textContent =
        "So whether you're planning your next quest or simply seeking second breakfast, you're always welcome at The Prancing Pony.";
    para3.classList.add("text-xl", "m-4");
    
    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(para2);
    content.appendChild(para3);
}