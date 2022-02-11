import { Main, Container } from './App.style';
import { WeatherBox } from './WeatherBox';
import { Quote } from './Quote';

export const App = () => {
  return (
    <Main>
      <Container className="container">
        <WeatherBox />
        <div className="links-box">
          <div className="section-personal">
            <p className="header">Personal</p>
            <ul>
              <li><a href="https://youtube.com">Youtube</a></li>
              <li><a href="https://southpark.lat">Southpark</a></li>
              <li><a href="https://cuevana3.io">Cuevana</a></li>
            </ul>
          </div>
          <div className="section-college">
            <p className="header">College</p>
            <ul>
              <li><a href="https://universidaddelquindio.com">Universidad</a></li>
              <li><a href="https://aulasvirtuales.com">Aulas</a></li>
              <li><a href="https://gmail.com">Correo</a></li>
            </ul>
          </div>
          <div className="section-dev">
            <p className="header">Dev</p>
            <ul>
              <li><a href="https://github.com/CMOISDEAD">Github</a></li>
              <li><a href="https://archwiki.org">Arch Wiki</a></li>
              <li><a href="https://dev.to">Dev</a></li>
            </ul>
          </div>
        </div>
      </Container>
      <Quote />
    </Main>
  );
}
