
const d = new Date();
const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";



const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5780026&appid=f40209af280eab7ad98ea20f8d7de2ec&units=imperial";

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
console.log(weatherInfo);

document.getElementById('place').innerHTML=weatherInfo.city.name;


let mylist = weatherInfo.list;

let forecastDayNumber = todayDayNumber;

console.log(forecastDayNumber);

for (i=0; i<mylist.length; i++){
    let time = mylist[i].dt_txt;
    if(time.includes('21:00:00')){
forecastDayNumber += 1;
if (forecastDayNumber === 7) {forecastDayNumber = 0;
}
let theDayName = document.createElement("span");

theDayName.textContent = weekday[forecastDayNumber];
console.log(">"+weekday[forecastDayNumber]);

let theTemp = document.createElement("p");
theTemp.innerHTML = weatherInfo.list[i].main.temp + " &deg; F"

// const iconcode = weatherInfo.weather[0].icon
// iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";

// let theicon = document.createElement("img");

// theicon.src = iconPath;


// const iconcode = weatherInfo.weather[0].icon
// console.log(iconcode);
// const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
// console.log(icon_path)





let theDay = document.createElement("div");
theDay.appendChild(theDayName);
theDay.appendChild(theTemp);
// theDay.appendChild(theicon);

document.getElementById('weatherforecast').appendChild(theDay)

    }
}

});







// document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
// document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;




// document.getElementById('weather_icon').src = icon_path;
// // console.log(mydata.name);

// // document.getElementById('puppy').innerHTML = mydata.url;

// // let sample = document.createElement("h1");
// // sample.textContent = mydata.name;
// // document.getElementById("puppy").appendChild(sample);

// }); // end of .then


// const mydata = new Date();

// const myweekday = newArray(7);
// const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5780026&appid=f40209af280eab7ad98ea20f8d7de2ec&units=imperial";
// const apiURL = "//api.openweathermaps.org/data/2.5/forecast?id=5780026&appid=f40209af280eab7ad98ea20f8d7de2ec&units=imperial";

// fetch (apiURL)
// .then((response) => response.json())
// .then((weatherInfo) => {
//     console.log(weatherInfo);

