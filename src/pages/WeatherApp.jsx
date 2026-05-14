import { useEffect, useState } from "react";
// import moment from "moment";


function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = "d0ce3d24f8ac43671f3d2b542ee4408a";

  // navigator.geolocation.getCurrentPosition((position) => console.log(position));

  useEffect(() => {
    setWeatherData(null);
    if (city.length > 1) {
      setLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat={lat}&lon={lon}&appid=${API_KEY}&units=metric`,
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.cod == 200) {
            setWeatherData(data);
          }
          console.log(data);
        });
    }
  }, [city]);

  return (
    <>
      <h1>Weather App</h1>
      <div className="w-container">
        <div className="w-search-wrapper">
          <div className="w-search">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter city name.."
            />
            {/* <button>Search</button> */}
          </div>
        </div>
        {loading && (
          <>
            {" "}
            <h3>Loading...</h3>{" "}
          </>
        )}
        {!weatherData && (
          <>
            <h1>No data</h1>
          </>
        )}
        {weatherData && (
          <>
            <div className="w-city-wrapper">
              <h1>{weatherData?.name}</h1>
              <p>{weatherData?.main?.temp}℃</p>
              <p>{weatherData?.weather[0]?.description}</p>
              <p>{weatherData?.sys.country}</p>
            </div>
            <br />
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default WeatherApp;