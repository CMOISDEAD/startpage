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

  .absolute {
    postion: absolute !important;
    top: 10vh;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  height: 100vh !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-bottom: -7vh !important;
`;

export const Option = styled.div`
`
