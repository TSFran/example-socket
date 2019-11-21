import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { App } from './views';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #4A4A4A;
    font-size: 14px;
  }
  a {
    color: #888;
    text-decoration: none;
  }
  li {
    list-style:none;
  }
  pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #f36d33;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 16px !important;
    line-height: 1.6;
    max-width: 100%;
    width:80%;
    overflow: auto;
    padding: 1em 1.5em;
    word-wrap: break-word;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);