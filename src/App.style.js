import styled from 'styled-components';
import { gruvbox } from './Colors';


export const Main = styled.div``;

export const Container = styled.div`
  height: 90vh !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  > * {
    /* margin: 1rem; */
  }

  .links-box {
    > div > .header {
      text-decoration: underline;
    }

    > div > ul {
      list-style: none;
       > li > a {
        color: ${gruvbox.green};

        :hover {
          color: ${gruvbox.purple};
        }
      }
    }
  }
`;
