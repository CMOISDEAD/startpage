import { useEffect, useState } from "react";

import { Main, Container } from './App.style';
import { WeatherBox } from './WeatherBox';
import { Quote } from './Quote';
import { Section } from './Sections';
import { listPlaceHolder } from './PlaceHolder'

export const App = () => {
  const Storage = window.localStorage;
  const [listLinks, setListLinks] = useState(
    JSON.parse(Storage.getItem('sections'))
  );

  return (
    <Main>
      <Container className="container">
        <WeatherBox />
        <div className="links-box">
          {
            listLinks.map((obj, i) => {
              return (
                <Section data={obj} callback={setListLinks} key={i} />
              )
            })
          }
        </div>
      </Container>
      <Quote />
    </Main>
  );
}
