import styled from "styled-components";
import { gruvbox } from "./Colors";

export const Container = styled.div`
  > div {
    background: #1d20214f !important;
    border-radius: 2%;
  }

  > div > .header {
    text-transform: uppercase;
    color: ${gruvbox.red};
  }

  .add-button {
    transition: all 0.5s ease;

    :hover {
      color: ${gruvbox.yellow} !important;
    }
  }

  .add {
    padding-top: 10px;
    color: ${gruvbox.yellow};
    text-decoration-style: dotted;
    font-size: 1rem;
  }

  > div > ul {
    list-style: none;

    .text-muted {
      color: ${gruvbox.gray};
      font-size: 0.7rem;
      text-style: italic;
    }

    input {
      background: ${gruvbox.background};
      color: ${gruvbox.foreground};
      border: 0;
      border-bottom: 1px solid ${gruvbox.foreground};
      transition: all 0.5s ease;

      :active {
        border: 0 !important;
        border-bottom: 1px solid ${gruvbox.yellow} !important;
      }
    }
  }
`;
