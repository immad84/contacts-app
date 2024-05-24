import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    line-height: 1.5;
    background-color: gray;
  }


  /* ========== Table ========== */

  .table-container {
    width: 1108px;
    height: 689px;
    margin: 0 auto;
    padding: 0 1rem;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 9px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }


  tr {
      text-transform: capitalize;
      border-bottom: 1px solid #808D9E;
    }

    th, td {
      padding: 1rem 0;
      text-align: left;
    }

    th {
      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 25.6px;
    }

    td {
      font-size: 14px;
      font-weight: 500;
      color: rgba(37, 45, 49, 1);
    }
`;

export default GlobalStyles;
