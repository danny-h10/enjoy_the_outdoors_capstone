"use strict"

window.onload = () => {

    initLocationDropdown();

    let locationDropdown = document.querySelector("#locationDropdown")

    locationDropdown.addEventListener("change", getLocations);

}

function getLocations(){

}

function initCategoriesDropdown() {

    let locationDropdown = document.querySelector("#locationDropdown");

    let defaultOption = document.createElement("option");

    defaultOption.textContent = "Choose a Park Location"
    defaultOption.value = ""

    locationDropdown.appendChild(defaultOption)

    //write a loop to work with each individual category and build an option for it
    categories.forEach( (location) => {

        //create the new option for the category we are on in the loop
        let newOption = document.createElement("option");

        //set the value for the option
        newOption.value = location;

        //set the textContent that the user will se whne choosing a category
        newOption.textContent= location;

        locationsDropdown.appendChild(newOption);
    })

}