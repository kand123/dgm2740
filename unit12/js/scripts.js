// what is the path to the JSON file?
const apiURL = "./hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0;  i < myList.length; i++) {

    
    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
  
    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    let myFigureTag = document.createElement("figure");


    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
  

let addressDiv = document.createElement("div");


addressDiv.className = "addressBlock";
let phoneDiv = document.createElement("div");

phoneDiv.className = "phoneBlock";
let contactDiv = document.createElement("div");
contactDiv.className = "contactInfo";

contactDiv.appendChild(addressDiv);
contactDiv.appendChild(phoneDiv);




let myIconDiv = document.createElement("div");


let myiconCar = document.createElement('span');
myiconCar.className = 'fas fa-car-alt'
myIconDiv.appendChild(myiconCar);
addressDiv.appendChild(myIconDiv);

let addressText = document.createElement("p");
addressText.textContent = myList[i].address;
addressDiv.appendChild(addressText);



let myphoneIconDiv = document.createElement("div");


let myiconPhone = document.createElement('span');
myiconPhone.className = 'fas fa-phone-alt'
myphoneIconDiv.appendChild(myiconPhone);
phoneDiv.appendChild(myphoneIconDiv);

let phoneText = document.createElement("p");
phoneText.textContent = myList[i].phone;
phoneDiv.appendChild(phoneText);











let cardDiv = document.createElement("div");
cardDiv.appendChild(myFigureTag);
cardDiv.appendChild(contactDiv);
cardDiv.className = "eachCard"

document.getElementById('myCards').appendChild(cardDiv);





  } //end of loop
}); //end of "then" fat arrow function

