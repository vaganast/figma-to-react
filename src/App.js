import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { DrawerLeft } from './components'


const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',      
      'sans-serif;',
    ].join(','), 
    tableRows: {
      fontWeight:400, 
      fontSize:'13px', 
      lineHeight:'16px', 
      letterSpacing:'-0.01em', 
      color:'#202020', 
      }
    },
    
    
  
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <DrawerLeft />
    
    </ThemeProvider>
  )
}

export default App