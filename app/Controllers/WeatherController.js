
import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";



export default class WeatherController {

    constructor() {
        ProxyState.on('currentWeather', this.drawWeatherF)
        weatherService.getWeather()
    }
    drawWeatherF() {
        let weatherElem = document.getElementById('weather')
        let weather = ProxyState.currentWeather

        let currentTemp = (ProxyState.currentWeather.temp - 273.15) * 9 / 5 + 32

        weatherElem.innerHTML = /*html*/ `
                    <div class="col-12">
                        <span>${currentTemp.toFixed(1)} °F </span >
                        <i>Boise </i >
                       
                    </div>
    
        `
    }
    drawWeatherC() {
        let weatherElem = document.getElementById('weather')
        let weather = ProxyState.currentWeather.temp

        let currentTemp = weather - 273.15

        weatherElem.innerHTML = /*html*/ `
                    <div class="col-12">
                        <span >${currentTemp.toFixed(1)} °C </span >
                        <i>Boise </i >
                       
                    </div>
    
        `
    }

    drawWeatherK() {
        let weatherElem = document.getElementById('weather')
        let weather = ProxyState.currentWeather.temp


        weatherElem.innerHTML = /*html*/ `
                    <div class="col-12">
                        <span id="weather">${weather.toFixed(1)} °K </span >
                        <i>Boise </i >
                        
                    </div>
    
        `
    }
}