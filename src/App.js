import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import './App.css';

// LET OP: VOEG HIER JOUW API KEY IN
const apiKey = '55f6341b3c0188ee15199254c28aee3e';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);



  useEffect(() => {


    async function fetchData() {
      try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`);
        setWeatherData(result.data);
      } catch (e) {
        console.error(e);
      }
    }
  })



  return (

      <>
        <div className="weather-container">

          {/*HEADER -------------------- */}
          <div className="weather-header">
            <SearchBar setLocationHandler={setLocation}/>

            <span className="location-details">
            {weatherData &&
            <>
              <h2>{weatherData.weather[0].description}</h2>
              <h3>{weatherData.name}</h3>
              <h1>{weatherData.main.temp}</h1>
            </>
            }

          </span>
          </div>

          {/*CONTENT ------------------ */}
          <div className="weather-content">
            <TabBarMenu/>

            <div className="tab-wrapper">
              Alle inhoud van de tabbladen komt hier!
            </div>
          </div>

          <MetricSlider/>
        </div>
      </>
  );
}

export default App;