import styled from 'styled-components';


export const Box = styled.div`
  background: url(${props => props.background}) center center fixed;
  background-size: cover;
`

export const Main = styled.div`
  height: 100vh;
  overflow-y: hidden;
  background-postion: cover;
  backdrop-filter: blur(${props => props.blur});
  -webkit-backdrop-filter: blur(${props => props.blur});

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
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
