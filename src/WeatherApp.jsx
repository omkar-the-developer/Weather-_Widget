import './WeatherApp.css';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = async (city) => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e220e468d1e09dec8ad0e5d5dd085b99";

    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const json = await response.json();

      const result = {
        city: city,
        temp: json.main.temp,
        maxTemp: json.main.temp_max,
        minTemp: json.main.temp_min,
        humidity: json.main.humidity,
        feelLike: json.main.feels_like,
        weather: json.weather[0].description,
        condition: json.weather[0].main
      };

      setWeatherInfo(result);
    } catch (err) {
      alert("City not found or network error.");
    }
  };

  return (
    <div className="wrapper">
      <div className="app-card">
        <SearchBox updateInfo={updateInfo} />
        {weatherInfo && <InfoBox info={weatherInfo} />}
      </div>
    </div>
  );
}
