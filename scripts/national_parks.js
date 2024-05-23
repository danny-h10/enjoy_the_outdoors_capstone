"use strict"

window.onload = () => {


    initLocationDropdown();

    let locationDropdown = document.querySelector("#locationDropdown")

    locationDropdown.addEventListener("change", loadTable);

    initTypeDropdown()

    let typeDropdown = document.querySelector("#typeDropdown")

    typeDropdown.addEventListener("change", loadTypeTable)






    hideElement("#locationDropdown")
    hideElement("#typeDropdown")

    let locationRadio = document.querySelector("#Location")
    let typeRadio = document.querySelector("#Type")

    locationRadio.addEventListener("click", hideShowRadio)
    typeRadio.addEventListener("click", hideShowRadio)

}


function hideShowRadio(event) {

    if (event.target.value === "Type") {
        showElement("#typeDropdown")
        hideElement("#locationDropdown")
    } else {
        showElement("#locationDropdown")
        hideElement("#typeDropdown")
    }
}

function loadTable(event) {

    let dropdown = event.target
    let tableBody = document.querySelector("#locationTableBody")


    let selectedLocations = event.target.value

    let matchingLocations = nationalParksArray.filter((location) => {

        return location.State === selectedLocations;
    })

    tableBody.innerHTML = ""

    matchingLocations.forEach((data) => {
        buildTableRows(tableBody, data)
    })

}


function buildTableRows(tableBody, data) {

    let newRow = tableBody.insertRow();


    let cell1 = newRow.insertCell();
    cell1.innerHTML = data.LocationID

    let cell2 = newRow.insertCell();
    cell2.innerHTML = data.LocationName

    let cell3 = newRow.insertCell();
    cell3.innerHTML = `${data.Address} ${data.State}, ${data.ZipCode}`


    let cell4 = newRow.insertCell();
    cell4.innerHTML = `
    <div> Phone:${data.Phone} </div>
    <div> Fax:${data.Fax} </div>`
    if (data.Phone === 0) {
        cell4.innerHTML = "N/A"
    }
    if (data.Fax === 0){
        
        cell4.innerHTML = `
        <div> Phone: ${data.Phone}</div>
        <div>Fax: N/A</div>`
    }

    let cell5 = newRow.insertCell();
    if (data.Visit === undefined) {
        cell5.innerHTML = "N/A";
    } else {
        cell5.innerHTML = data.Visit
    }

}

function initLocationDropdown() {

    let locationDropdown = document.querySelector("#locationDropdown");

    let defaultOption = document.createElement("option");

    defaultOption.textContent = "--Choose a Park Location--"
    defaultOption.value = ""

    locationDropdown.appendChild(defaultOption)

    locationsArray.forEach((location) => {
        let newOption = document.createElement("option");

        newOption.value = location;

        newOption.textContent = location;

        locationDropdown.appendChild(newOption);
    })
}


function initTypeDropdown() {

    let typeDropdown = document.querySelector("#typeDropdown");

    let defaultOption = document.createElement("option");

    defaultOption.textContent = "--Choose a Park Type--"
    defaultOption.value = ""

    typeDropdown.appendChild(defaultOption)

    parkTypesArray.forEach((Type) => {

        let newOption = document.createElement("option");

        newOption.value = Type;

        newOption.textContent = Type;

        typeDropdown.appendChild(newOption);
    })
}

function loadTypeTable(event) {

    let dropdown = event.target
    let tableBody = document.querySelector("#locationTableBody")


    let selectedtypes = event.target.value

    let matchingTypes = nationalParksArray.filter((data) => {
        if (data.LocationName.indexOf(selectedtypes) !== -1) {
            return selectedtypes
        }

    })

    tableBody.innerHTML = ""

    matchingTypes.forEach((data) => {
        buildTableRows(tableBody, data)
    })

}


function hideElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "none";
}


function showElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "block";
}