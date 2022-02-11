import { useEffect, useState } from 'react';
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
            condition: data.current.condition.text
          }
          setWeather(main);
        })
    }

    fetchData();
  }, []);

  return (
    <Container>
      {weather.country}/{weather.name}/10 Feb
      <br />
      {weather.condition}
    </Container>
  )
}
