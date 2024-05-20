"use strict"

window.onload = () => {

    initLocationDropdown();

    let locationDropdown = document.querySelector("#locationDropdown")

    locationDropdown.addEventListener("change", getLocations);

}

function getLocations(event){

    let selectedLocations = event.target.value

    let matchingLocations = nationalParksArray.filter( (location) => {

        return location.State === selectedLocations;
    })

    //get a hold of the table body so we can add rows to it for all the activities 
    let tableBody = document.querySelector("#locationTableBody");

    tableBody.innerHTML = "";

    matchingLocations.forEach( (state) => {

        buildTableRow(tableBody, state)

    })
}

function initLocationDropdown() {

    let locationDropdown = document.querySelector("#locationDropdown");

    let defaultOption = document.createElement("option");

    defaultOption.textContent = "Choose a Park Location"
    defaultOption.value = ""

    locationDropdown.appendChild(defaultOption)

    //write a loop to work with each individual category and build an option for it
    locationsArray.forEach( (location) => {

        //create the new option for the category we are on in the loop
        let newOption = document.createElement("option");

        //set the value for the option
        newOption.value = location;

        //set the textContent that the user will se whne choosing a category
        newOption.textContent= location;

        locationDropdown.appendChild(newOption);
    })

}

function buildTableRow(tableBody, data){

    //create the row to hold the data
    let newRow = tableBody.insertRow();

    //loop over all the properties in the object and create a cell for them
    for(let property in data){

        let newTD = newRow.insertCell();
        newTD.innerText = data[property];
    }
}