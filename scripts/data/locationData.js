const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

window.onload = function(){

   
}

let newRow = tableBody.insertRow();

   
    let cell1 = newRow.insertRow();
    cell1.innerHTML = data.LocationId

    let cell2 = newRow.insertRow();
    cell2.innerHTML = data.LocationName

    let cell3 = newRow.insertRow();
    cell3.innerHTML = data.Address
    cell3.innerHTML = data.City
    cell3.innerHTML = data.State
    cell3.innerHTML = data.ZipCode

    let cell4 = newRow.insertRow();
    cell4.innerHTML = data.Phone

    let cell5 = newRow.insertRow();
    cell5.innerHTML = data.Visit
    if(data.Visit === undefined){
        cell5.innerHTML = "N/A";
    }