import { useEffect, useState } from 'react';
import moment from "moment";

import { Container } from './WeatherBox.style'

export const WeatherBox = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = () => {
      fetch('http://api.weatherapi.com/v1/current.json?key=9ddc8be9de4449c9a34224736211710&q=4.535000 -75.675690&aqi=no')
        .then(res => res.json())
        .then(data => {
          const main = {
            country: data.location.country,
            name: data.location.name,
            condition: data.current.condition.text,
            date: moment().format('dddd'),
          }
          setWeather(main);
        })
    }

    fetchData();
  }, []);

  return (
    <Container className="text-white">
      <div class="fs-3 text-capitalize fw-bolder">{weather.condition}</div>
      <div class="fst-italic">
        {weather.country} - {weather.name} - {weather.date}
      </div>
    </Container>
  )
}
