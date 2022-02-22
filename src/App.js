// Modules Imports.
import { useEffect, useState } from "react";

// Components Imports.
import { Box, Main, Container } from './App.style';
import { WeatherBox } from './WeatherBox';
import { Quote } from './Quote';
import { Section } from './Sections';
import { ModalWindow } from './Components/Modal/Modal';

// Utils.
import { listPlaceHolder, defaultSettings } from './cheatsheet';

export const App = () => {
  const Storage = window.localStorage;
  const StorageQuery = (ctx) => JSON.parse(Storage.getItem(ctx));
  const [listLinks, setListLinks] = useState(StorageQuery('sections') || listPlaceHolder);
  const [settings, setSettings] = useState(StorageQuery('settings') || defaultSettings);

  useEffect(() => {
    if (!window.localStorage.getItem('sections')) {
      console.log("Not Found sections")
      window.localStorage.setItem('sections', JSON.stringify(listPlaceHolder));
    } else if (!window.localStorage.getItem('settings')) {
      console.log("Not Found Setting")
      window.localStorage.setItem('settings', JSON.stringify(defaultSettings));
    }
  }, [])

  return (
    <Box background={settings.background}>
      <Main blur={settings.blur}>
        <Container className="pt-5">
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
        <div className="footer">
          <Quote />
          <ModalWindow opt={settings} callback={setSettings} />
        </div>
      </Main>
    </Box>
  );
}
