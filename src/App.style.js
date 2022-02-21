import styled from 'styled-components';


export const Box = styled.div`
  background: url(${props => props.background}) center center no-repeat fixed;
`

export const Main = styled.div`
  height: 100vh;
  background-postion: cover;
  backdrop-filter: blur(${props => props.blur});
  -webkit-backdrop-filter: blur(${props => props.blur});
`;

export const Container = styled.div`
  height: 90vh !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  > * {
    /* margin: 1rem; */
  }
`;
