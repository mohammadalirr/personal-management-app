import grey from '@mui/material/colors/grey';
import {createTheme} from '@mui/material/styles';
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";



  export const theme = createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "Vazir , tahoma",
    },

    // palette: {
    //   primary: "#FFA500",
    //   secondary:"red"
    // },
  })

export const light = {
    appBar: '#1976d2',
    main: 'white',
    drawer: 'whiteSmoke',
    text: 'black',
    appBarText: 'white',
  }

  export const dark = {
    appBar: grey[800],
    main: grey[300],
    drawer: grey[400],
    text: 'black',
    appBarText: 'whiteSmoke',
  }

  export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });


