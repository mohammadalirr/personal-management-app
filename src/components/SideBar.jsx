import { useContext } from 'react';

import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { light, dark } from "../layouts/theme";

import { MainContext } from "../context/createContext";


const SideBar = () => {

  const {
    drawerOpen,
    setDrawerOpen,
    value,
    mode,
    handleWidth,
    variant,
    drawerDivider,
    a11yProps,
    handleChangeTabs
  } = useContext(MainContext);



  // function a11yProps(index) {
  //   return {
  //     id: `simple-tab-${index}`,
  //     'aria-controls': `simple-tabpanel-${index}`,
  //   };
  // }



  // const handleChangeTabs = (event, newValue) => {
  //   setValue(newValue);
  // };





  return (
    <Drawer
      variant={variant}
      anchor='left'
      open={drawerOpen}
      sx={{
        width: `${handleWidth}rem`,
        flexShrink: 0,
        zIndex: 11,

        '& .MuiDrawer-paper': {
          backgroundColor: mode ? `${dark.drawer}` : `${light.drawer}`,
          width: `${handleWidth}rem`,
          boxSizing: 'border-box',
          zIndex: 11,

        },
      }}
    >
      <Box sx={{ backgroundColor: mode ? `${dark.drawer}` : `${light.drawer}` }}>
        <Grid container sx={{ mt: `${drawerDivider}rem`, mb: `${drawerDivider}rem` }}>

          <Grid item xs={3} sm={3} sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none',
            },
          }} >

          </Grid>


          <Grid item xs={5} sm={5} md={12} lg={12} xl={12}>

            <Typography variant='h6'>
              <DashboardRoundedIcon fontSize='large' />
            </Typography>

          </Grid>

          <Grid item xs={4} sm={4} sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none',

            },

          }}>

            <Box>
              <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                <ChevronRightIcon />
              </IconButton>

            </Box>
          </Grid>
        </Grid>

      </Box>
      <Divider />
      <Box sx={{ mt: 5 }}>
        <Tabs

          orientation='vertical'
          aria-label="Vertical tabs example"
          variant="scrollable"
          value={value}
          onChange={handleChangeTabs}
          TabIndicatorProps={{
          }}
        >
          <Tab label="مدیریت مالی" {...a11yProps(0)} />
          <Tab label="کارهای روزانه"  {...a11yProps(1)} />
          <Tab label="برنامه هفتگی" {...a11yProps(2)} />
          <Tab label="یادداشت ها"  {...a11yProps(3)} />
        </Tabs>

      </Box>
    </Drawer>

  )

}

export default SideBar;