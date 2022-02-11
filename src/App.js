import { useState } from "react";

import { Main, Container } from './App.style';
import { WeatherBox } from './WeatherBox';
import { Quote } from './Quote';
import { Section } from './Sections';
import { listPlaceHolder } from './PlaceHolder'

export const App = () => {
  const [listLinks, setListLinks] = useState([
    ...listPlaceHolder
  ])

  return (
    <Main>
      <Container className="container">
        <WeatherBox />
        <div className="links-box">
          {
            listLinks.map((obj) => {
              return (
                <Section data={obj} callback={setListLinks} key={obj.id} />
              )
            })
          }
        </div>
      </Container>
      <Quote />
    </Main>
  );
}
