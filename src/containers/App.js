import * as React from 'react'

import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { CacheProvider } from "@emotion/react";

import MainLayout from './MainLayout';
import AppBarC from '../components/AppBarC';

import { theme } from '../layouts/theme'
import { cacheRTL } from '../layouts/theme';

import { MainContext } from '../context/createContext';


function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [value, setValue] = React.useState(0);
  const [mode, setMode] = React.useState(false);
  const [valueC, setValueC] = React.useState(0);
  const [ecoDrawerOpen, setEcoDrawerOpen] = React.useState(true)



  const isSmallScreenMd = useMediaQuery(theme.breakpoints.down('md'));
  const variant = isSmallScreenMd ? 'persistent' : 'permanent';
  const handleWidth = isSmallScreenMd ? 8 : 13;

  const isSmallScreenSm = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerDivider = isSmallScreenSm ? 1.895 : 2.135;


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };



  return (


    <MainContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        value,
        setValue,
        mode,
        setMode,
        variant,
        handleWidth,
        drawerDivider,
        a11yProps,
        handleChangeTabs,
        valueC,
        setValueC,
        ecoDrawerOpen,
        setEcoDrawerOpen
      }}>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <AppBarC />
          <MainLayout />
        </ThemeProvider >
      </CacheProvider>
    </MainContext.Provider>

  );

}

export default App;
