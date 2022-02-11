import styled from "styled-components";
import { gruvbox } from "./Colors";

export const Container = styled.div`
    > div > .header {
      text-decoration: underline;
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
        font-size: .7rem;
        text-style: italic;
      }

      input {
        background: ${gruvbox.background};
        color: ${gruvbox.foreground};
        border: 0;
        border-bottom: 1px solid ${gruvbox.foreground};
      }

       > li > a {
        color: ${gruvbox.green};

        :hover {
          color: ${gruvbox.purple};
        }
      }
    }
`
