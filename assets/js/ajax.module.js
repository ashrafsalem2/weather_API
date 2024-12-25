// fetch the api and return response

class AjaxHandler{

    static #apiUrl;
    location = {};
    current = {};
    forecast = {};
    constructor(location = "cairo"){
        AjaxHandler.#apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${location}&days=3`;
        console.log( AjaxHandler.#apiUrl);
    }

    async fetchWeather(){
        var data = await fetch(AjaxHandler.#apiUrl);
        var response = await data.json();
        this.current = response.current;
        this.forecast = response.forecast;
        this.location = response.location;
    }
}

export {AjaxHandler}