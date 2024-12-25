// todo: first fetch the api
// todo2: display all data

import { AjaxHandler } from "./ajax.module.js";

// serach input
let searchInput= document.getElementById("search");

// elements - today
let today_name = document.querySelector('#today_name');
let today_date = document.querySelector('#today_date');
let today_location = document.querySelector('#today_location');
let today_temp = document.querySelector('#today_temp');
let today_image = document.querySelector('#today_image');
let today_status = document.querySelector('#today_status');
let today_rain = document.querySelector('#today_rain');
let today_wind = document.querySelector('#today_wind');
let today_wind_dir = document.querySelector('#today_wind_dir');

// elements - tomorrow
let tomorrow_name = document.querySelector('#tomorrow_name');
let tomorrow_date = document.querySelector('#tomorrow_date');
let tomorrow_location = document.querySelector('#tomorrow_location');
let tomorrow_temp = document.querySelector('#tomorrow_temp');
let tomorrow_image = document.querySelector('#tomorrow_image');
let tomorrow_status = document.querySelector('#tomorrow_status');
let tomorrow_rain = document.querySelector('#tomorrow_rain');
let tomorrow_wind = document.querySelector('#tomorrow_wind');
let tomorrow_wind_dir = document.querySelector('#tomorrow_wind_dir');

// elements - next_tomorrow
let next_tomorrow_name = document.querySelector('#next_tomorrow_name');
let next_tomorrow_date = document.querySelector('#next_tomorrow_date');
let next_tomorrow_location = document.querySelector('#next_tomorrow_location');
let next_tomorrow_temp = document.querySelector('#next_tomorrow_temp');
let next_tomorrow_image = document.querySelector('#next_tomorrow_image');
let next_tomorrow_status = document.querySelector('#next_tomorrow_status');
let next_tomorrow_rain = document.querySelector('#next_tomorrow_rain');
let next_tomorrow_wind = document.querySelector('#next_tomorrow_wind');
let next_tomorrow_wind_dir = document.querySelector('#next_tomorrow_wind_dir');


document.getElementById("search").addEventListener("input", function(){


    weather = new AjaxHandler(this.value);
    weather.fetchWeather();

    // set time to get fetched data

setTimeout(function(){
    let location = weather.location;
    let current = weather.current;
    let forecast = weather.forecast;
    
    // console.log(location);
    // console.log(current );
    // console.log(forecast.forecastday);
    
    // set the element values
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(forecast.forecastday[0].date);
    
    let wind_direction = {
        W: "West",
        E: "East",
        N: "North",
        S: "Sounth"
    }
    
    let t =  String(forecast.forecastday[0].hour[0].wind_dir).charAt(0);
    
    // today 
    today_name.innerHTML = days[d.getDay()];
    today_date.innerHTML = forecast.forecastday[0].date;
    today_location.innerHTML = location.name;
    today_temp.innerHTML = forecast.forecastday[0].day.maxtemp_c;
    today_image.setAttribute("src", forecast.forecastday[0].day.condition.icon);
    today_status.innerHTML = forecast.forecastday[0].day.condition.text;
    today_rain.innerHTML = forecast.forecastday[0].day.
    daily_will_it_rain ===0 ? "No" : "Rain";
    today_wind.innerHTML = forecast.forecastday[0].day.maxwind_kph;
    today_wind_dir.innerHTML = wind_direction[t];
    
    // tomorrow
    let tt =  String(forecast.forecastday[1].hour[0].wind_dir).charAt(0);
    console.log(forecast.forecastday[1].day);
    tomorrow_name.innerHTML = days[d.getDay()+1];
    tomorrow_date.innerHTML = forecast.forecastday[1].date;
    tomorrow_location.innerHTML = location.name;
    tomorrow_temp.innerHTML = forecast.forecastday[1].day.maxtemp_c;
    tomorrow_image.setAttribute("src", forecast.forecastday[1].day.condition.icon);
    tomorrow_status.innerHTML = forecast.forecastday[1].day.condition.text;
    tomorrow_rain.innerHTML = forecast.forecastday[1].day.
    daily_will_it_rain ===0 ? "No" : "Rain";;
    tomorrow_wind.innerHTML = forecast.forecastday[1].day.maxwind_kph;
    tomorrow_wind_dir.innerHTML = wind_direction[tt];
    
    // next_tomorrow
    let ttt =  String(forecast.forecastday[2].hour[0].wind_dir).charAt(0);
    console.log(forecast.forecastday[2].day);
    next_tomorrow_name.innerHTML = days[d.getDay()+2];
    next_tomorrow_date.innerHTML = forecast.forecastday[2].date;
    next_tomorrow_location.innerHTML = location.name;
    next_tomorrow_temp.innerHTML = forecast.forecastday[2].day.maxtemp_c;
    next_tomorrow_image.setAttribute("src", forecast.forecastday[2].day.condition.icon);
    next_tomorrow_status.innerHTML = forecast.forecastday[2].day.condition.text;
    next_tomorrow_rain.innerHTML = forecast.forecastday[2].day.
    daily_will_it_rain === 0 ? "No" : "Rain";
    next_tomorrow_wind.innerHTML = forecast.forecastday[2].day.maxwind_kph;
    next_tomorrow_wind_dir.innerHTML = wind_direction[ttt];
    
    
    },1000);
});


// set time to get fetched data
let weather = new AjaxHandler();
weather.fetchWeather();

setTimeout(function(){
let location = weather.location;
let current = weather.current;
let forecast = weather.forecast;

console.log(location);
console.log(current );
console.log(forecast.forecastday);

// set the element values
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date(forecast.forecastday[0].date);

let wind_direction = {
    W: "West",
    E: "East",
    N: "North",
    S: "Sounth"
}

let t =  String(forecast.forecastday[0].hour[0].wind_dir).charAt(0);

// today 
today_name.innerHTML = days[d.getDay()];
today_date.innerHTML = forecast.forecastday[0].date;
today_location.innerHTML = location.name;
today_temp.innerHTML = forecast.forecastday[0].day.maxtemp_c;
today_image.setAttribute("src", forecast.forecastday[0].day.condition.icon);
today_status.innerHTML = forecast.forecastday[0].day.condition.text;
today_rain.innerHTML = forecast.forecastday[0].day.
daily_will_it_rain=== 0 ? "No" : "Rain";
today_wind.innerHTML = forecast.forecastday[0].day.maxwind_kph;
today_wind_dir.innerHTML = wind_direction[t];

// tomorrow
let tt =  String(forecast.forecastday[1].hour[0].wind_dir).charAt(0);
console.log(forecast.forecastday[1].day);
tomorrow_name.innerHTML = days[d.getDay()+1];
tomorrow_date.innerHTML = forecast.forecastday[1].date;
tomorrow_location.innerHTML = location.name;
tomorrow_temp.innerHTML = forecast.forecastday[1].day.maxtemp_c;
tomorrow_image.setAttribute("src", forecast.forecastday[1].day.condition.icon);
tomorrow_status.innerHTML = forecast.forecastday[1].day.condition.text;
tomorrow_rain.innerHTML = forecast.forecastday[1].day.
daily_will_it_rain=== 0 ? "No" : "Rain";
tomorrow_wind.innerHTML = forecast.forecastday[1].day.maxwind_kph;
tomorrow_wind_dir.innerHTML = wind_direction[tt];

// next_tomorrow
let ttt =  String(forecast.forecastday[2].hour[0].wind_dir).charAt(0);
console.log(forecast.forecastday[2].day);
next_tomorrow_name.innerHTML = days[d.getDay()+2];
next_tomorrow_date.innerHTML = forecast.forecastday[2].date;
next_tomorrow_location.innerHTML = location.name;
next_tomorrow_temp.innerHTML = forecast.forecastday[2].day.maxtemp_c;
next_tomorrow_image.setAttribute("src", forecast.forecastday[2].day.condition.icon);
next_tomorrow_status.innerHTML = forecast.forecastday[2].day.condition.text;
next_tomorrow_rain.innerHTML = forecast.forecastday[2].day.
daily_will_it_rain=== 0 ? "No" : "Rain";
next_tomorrow_wind.innerHTML = forecast.forecastday[2].day.maxwind_kph;
next_tomorrow_wind_dir.innerHTML = wind_direction[ttt];


},1000);
