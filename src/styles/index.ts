import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #341f97;
  }

  h1 {
    color: #fff;
    text-align: center;
    margin: 25px;
  }
`

export default EstiloGlobal
