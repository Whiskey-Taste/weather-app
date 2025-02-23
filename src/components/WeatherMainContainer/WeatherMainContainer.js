import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard"
import ForecastWeatherCard from "../ForecastWeatherCard/ForecastWeatherCard"
import CityWeatherCard from "../CityWeatherCard/CityWeatherCard"
import "./WeatherMainContainer.css"

function WeatherMainContainer() {
  const apiData = {
    temp: 32,
    temp_max: 35,
    temp_min: 31,
    humidity: 2,
    wind: 1,
  };

  const cityData = [
    {
      min: 18,
      max: 19,
      city: 'sydney',
    },
    {
      min: 18,
      max: 19,
      city: 'melbourne',
    },
    {
      min: 18,
      max: 20,
      city: 'brisbane',
    },
    {
      min: 18,
      max: 20,
      city: 'perth',
    },
  ];

  const foreCastData = [
    {
      min: 18,
      max: 19,
    },
    {
      min: 18,
      max: 19,
    },
    {
      min: 18,
      max: 20,
    },
    {
      min: 18,
      max: 20,
    },
  ];

  return (
    <div className="weather-main-container flex">
      <TodayWeatherCard data={apiData} />
      <div>
        <CityWeatherCard cities={cityData} />
        <ForecastWeatherCard foreCastData={foreCastData} />
      </div>
    </div>
  );
}

export default WeatherMainContainer;
