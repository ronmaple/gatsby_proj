import React from 'react';
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        darkGray: '#5D5C61',
        lightGray: '#379683',
        lightBlue: '#7395AE',
        darkBlue: '#557A95',
        cream: '#B1A296',
        backgroundGray: '#f0f0f0',
    },
    shadow: '0 0.3125rem 1rem 0 rgba(0,0,0,.24)',
}

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme;