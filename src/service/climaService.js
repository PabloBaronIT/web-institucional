import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.weatherapi.com/v1/",
});

export default {
  getWeatherData() {
    return apiClient.post(
      "current.json?key=fd2c7764a52f44ecb13185946222712&q=Sacanta&aqi=no"
    );
  },
};
