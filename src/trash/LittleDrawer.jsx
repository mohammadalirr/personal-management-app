import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import TabPanel from "../components/TabPanel";
import Grid from '@mui/material/Grid';

/*Icons*/
import IconButton from "@mui/material/IconButton";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from "@mui/material"

const LittleDrawer = ({ value, handleChange, drawerOpen, setDrawerOpen }) => {


    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };

    }


    const drawerWidth = 200
    return (
        <Box>
            <Drawer
                variant='persistent'
                anchor='right'
                open={drawerOpen}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'none',
                            lg: 'none',
                            xl: 'none'
                        }
                    },
                }}
            >

                <Grid container>
                    <Grid item xs={9} sm={9}>
                        <Typography variant="h3" sx={{ pt: 2, pr: 4, pb: 2 }}>
                            <DashboardRoundedIcon fontSize='large' />
                        </Typography>

                    </Grid>
                    <Grid item xs={3} sm={3}>


                        <Box sx={{pt:3.5, pb:2}}>
                            <IconButton
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            >
                                <ChevronRightIcon />
                            </IconButton>

                        </Box>
                    </Grid>
                </Grid>


                <Divider />
                <Box sx={{ mt: 5 }}>
                    <Tabs

                        orientation='vertical'
                        aria-label="Vertical tabs example"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{
                            sx: { right: 'auto', left: 0 },
                        }}
                    >
                        <Tab label="مدیریت مالی" {...a11yProps(0)} />
                        <Tab label="کارهای روزانه"  {...a11yProps(1)} />
                        <Tab label="برنامه هفتگی" {...a11yProps(2)} />
                        <Tab label="یادداشت ها"  {...a11yProps(3)} />
                    </Tabs>

                </Box>
                <Box>
                    <TabPanel value={value} index={0}>مدیریت مالی</TabPanel>
                    <TabPanel value={value} index={1}>کار های روزانه</TabPanel>
                    <TabPanel value={value} index={2}>برنامه هفتگی</TabPanel>
                    <TabPanel value={value} index={3}>یادداشت ها</TabPanel>

                </Box>
            </Drawer>

        </Box>
    )
}

export default LittleDrawer;