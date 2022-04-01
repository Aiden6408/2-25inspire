import { ProxyState } from "../AppState.js";
import Weather from "../Models/WeatherModel.js";
import { sandboxapi } from '../Services/AxiosService.js';



class WeatherService {

    async getWeather() {
        let res = await sandboxapi.get('weather')
        console.log(res.data)
        ProxyState.currentWeather = new Weather(res.data)
        console.log(ProxyState.currentWeather)
    }

}
export const weatherService = new WeatherService();