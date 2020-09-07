import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'); */
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

    :root {
        --white: #fff;
        --light-gray: #f7f7f7;
        --gray: #e5e5e5;
        --light-green: #D1F2A5;
        --dark-green: #8C9D76;
        --light-red: #ff5a60;
        --dark-red: #c6171e;
        --blue: #1cb0f6;
        --dark-blue: #268ab9;
        --yellow: #ffc300;
        --border-size: 2px;
        --border-radius: 15px;
        --button-border-radius: 16px;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Robot', sans-serif; {/* Trocar a font */}
        background: #f5f5f5;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;