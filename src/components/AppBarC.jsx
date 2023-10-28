import { useContext } from 'react'

import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { yellow } from "@mui/material/colors";

import { MainContext } from '../context/createContext';
import { dark, light } from '../layouts/theme/index'

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';



const AppBarC = () => {
  const { mode, setDrawerOpen, setMode, setEcoDrawerOpen, ecoDrawerOpen } = useContext(MainContext);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleMode = () => {
    setMode(!mode);
  }

  return (
    <AppBar
      sx={{
        backgroundColor: mode ? `${dark.appBar}` : `${light.appBar}`,
        color: mode ? `${dark.appBarText}` : `${light.appBarText}`,
        zIndex: 10,
        position: 'sticky',
        height: '18.5vh'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          mb: 2.5,
          mt: 3.5,
        }}>
        <Box>
          <IconButton
            onClick={handleDrawerOpen}
          >
            <MenuIcon
              sx={{ color: mode ? dark.appBarText : light.text }}
            />
          </IconButton>

        </Box>
        <Box>
          <Typography variant='h6' sx={{ mr: 1 }}>
            اپلیکیشن توسعه فردی
          </Typography>
        </Box>

        <Box>
          <Box>
          <IconButton
           sx={{color:'#c9c9c9'}}
           onClick={() => setEcoDrawerOpen(!ecoDrawerOpen)}

           >
          {ecoDrawerOpen ? <CloseIcon /> : <AddIcon/>}
            </IconButton>

            <IconButton
              onClick={handleMode}
              sx={{
                color: mode ? `${yellow[300]}` : '#c9c9c9',
              }}
            >
              {mode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

          </Box>
        </Box>
        {console.log(mode)}
      </Toolbar>


    </AppBar>

  )
}

export default AppBarC;