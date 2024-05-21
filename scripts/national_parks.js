"use strict"

window.onload = () => {

    
    initLocationDropdown();

    let locationDropdown = document.querySelector("#locationDropdown")

    locationDropdown.addEventListener("change", loadTable); 

}

function loadTable(event){

    let dropdown = event.target
    let tableBody = document.querySelector("#locationTableBody")
    
    
    let selectedLocations = event.target.value
    
    let matchingLocations = nationalParksArray.filter( (location) => {

        return location.State === selectedLocations;
    })
    
    tableBody.innerHTML = ""
    matchingLocations.forEach( (data) => {
        buildTableRows(tableBody, data)
    })

}


function buildTableRows(tableBody, data){

    

    
     let newRow = tableBody.insertRow();

   
    let cell1 = newRow.insertCell();
    cell1.innerHTML = data.LocationID

    let cell2 = newRow.insertCell();
    cell2.innerHTML = data.LocationName

    let cell3 = newRow.insertCell();
    cell3.innerHTML = `${data.Address} ${data.State}, ${data.ZipCode}`
    

    let cell4 = newRow.insertCell();
    cell4.innerHTML = data.Phone

    let cell5 = newRow.insertCell();
    if(data.Visit === undefined){
        cell5.innerHTML = "N/A";
    }else{
        cell5.innerHTML = data.Visit
    }
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
