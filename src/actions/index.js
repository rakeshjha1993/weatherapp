import axios from 'axios';


const API_KEY = "44e93e1a88567bdd587c16e25b153256";

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},IN`;

    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    }
}