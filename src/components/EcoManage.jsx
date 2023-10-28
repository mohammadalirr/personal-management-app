import { useContext } from "react";
import { useState } from "react";

import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { MainContext } from "../context/createContext";
import TabPanel from "./TabPanel";
import Sepah from "./cards/Sepah";
import EghtesadeNovin from "../components/cards/EghtesadeNovin"
import Resalat from "./cards/Saman";
import Saman from "./cards/Resalat";

import SamanIn from "./inputs/SamanIn";
import ResalatIn from "./inputs/ResalatIn";
import EghtesadeNovinIn from "./inputs/EghtesadeNovinIn";
import SepahIn from "./inputs/SepahIn";

import { dark, light } from "../layouts/theme";

import { CardStyle } from "../context/createContext"

const EcoManage = () => {


    //     const StyledTab = styled(Tab)`
    //     pointer-events: none;
    //     user-select: none;
    //   `;

    const { mode, ecoDrawerOpen } = useContext(MainContext);

    const [valueB, setValueB] = useState(0);
    const [isActive, setIsActive] = useState(1);


    function a11yPropsB(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    const handleChangeTabsB = (event, newValue) => {
        setValueB(newValue);
    };


    const drawerWidth = 250;



    return (
        <CardStyle.Provider
        value={{
            isActive,
            setIsActive
        }}>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    textAlign={'center'}
                >

                    <Box sx={{textAlign:'center', mr:'6rem'}}>

                        <TabPanel value={valueB} index={0}><SepahIn/></TabPanel>
                        <TabPanel value={valueB} index={1}><EghtesadeNovinIn/></TabPanel>
                        <TabPanel value={valueB} index={2}><ResalatIn/></TabPanel>
                        <TabPanel value={valueB} index={3}><SamanIn/></TabPanel>
                        <TabPanel value={valueB} index={4}>+</TabPanel>


                    </Box>


                </Grid>
                <Grid
                    item
                    xs={0}
                    sm={0}
                    md={0}
                    lg={0}
                    xl={0}
                // sx={{backgroundColor:'red'}}
                >
                    <Box>
                        <Drawer
                            variant="persistent"
                            anchor="right"
                            open={ecoDrawerOpen}
                            sx={{
                                zIndex: 9,
                                width: drawerWidth,
                                flexShrink: 0,

                                [`& .MuiDrawer-paper`]: {
                                    width: drawerWidth, boxSizing: 'border-box',
                                    backgroundColor: mode ? dark.drawer : light.drawer,
                                    zIndex: 9,

                                },

                            }}
                        >

                            <Box sx={{ mt: '8rem' }}>
                                <Tabs
                                    orientation='vertical'
                                    aria-label="Vertical tabs example"
                                    variant="scrollable"
                                    value={valueB}
                                    onChange={handleChangeTabsB}
                                    TabIndicatorProps={{
                                        style: { display: 'none' }
                                    }}
                                >
                                    <Tab onClick={() => setIsActive(1)} label={<Sepah />}  {...a11yPropsB(0)} />
                                    <Tab onClick={() => setIsActive(2)} label={<EghtesadeNovin />}  {...a11yPropsB(1)} />
                                    <Tab onClick={() => setIsActive(3)} label={<Saman />}  {...a11yPropsB(2)} />
                                    <Tab onClick={() => setIsActive(4)} label={<Resalat />} {...a11yPropsB(3)} />
                                    <Tab onClick={() => setIsActive(5)} label="+"  {...a11yPropsB(4)} />

                                </Tabs>

                            </Box>

                        </Drawer>

                    </Box>
                </Grid >
            </Grid >

        </CardStyle.Provider>
    )
}

export default EcoManage;