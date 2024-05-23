"use strict"


window.onload = () => {

    initMountCards();

    let mountDropdown = document.querySelector("#mountainSelect")

    mountDropdown.addEventListener("change", displayMountCard)

}

function displayMountCard(event) {
    let mountDiv = document.querySelector("#mountains")

    mountDiv.innerHTML = ""

    let mountain = mountainsArray.find((mountain) => mountain.name === event.target.value)

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "w-25");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "card-img-fit");

    cardImage.src = `./images/${mountain.img}`
    
   
    cardImage.alt = mountain.name

    cardDiv.appendChild(cardImage);

    let cardBody = document.createElement("div")
    cardDiv.classList.add("card-body")

    let cardTitle = document.createElement("h5")
    cardTitle.innerHTML = mountain.name

    cardBody.appendChild(cardTitle)

    let cardText = document.createElement("p")
    cardTitle.classList.add("card-text")

    cardText.innerHTML = mountain.desc

    cardBody.appendChild(cardText)
    cardDiv.appendChild(cardBody)
    mountDiv.appendChild(cardDiv)

}

function initMountCards() {
    let mountDropdown = document.querySelector("#mountainSelect");

    //create the element for the default option
    let defaultOption = document.createElement("option");

    //this is whate we get back in JS when we ask for the selected value
    defaultOption.value = "";

    //this is what the user actually selects from the dropdown
    defaultOption.textContent = "--Select a Mountain--";

    //add the option we created to the dropdown
    mountDropdown.appendChild(defaultOption);

    //write a loop to work with each individual category and build an option for it
    mountainsArray.forEach((mountain) => {

        //create the new option for the category we are on in the loop
        let newOption = document.createElement("option");

        //set the value for the option
        newOption.value = mountain.name;

        //set the textContent that the user will see when choosing a category
        newOption.textContent = mountain.name;

        mountDropdown.appendChild(newOption);

    })
}