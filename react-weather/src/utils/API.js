import axios from "axios";

export default {
    getWeather: function(location){
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily=7&units=I&key=2671f5be92e04cea8ceaef7a9653eef6&city=${city}`)
    }
}