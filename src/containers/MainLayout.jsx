import { useContext } from "react"
import { MainContext } from "../context/createContext"

import Grid from "@mui/material/Grid"
import MainContent from "../components/MainContent"
import SideBar from "../components/SideBar"




const MainLayout = () => {

    const { drawerOpen } = useContext(MainContext)
    const showDrawer =  drawerOpen 

    return (
        <Grid container>
            {showDrawer ? (
                <>
                    <Grid item
                        xs={0}
                        sm={0}
                        md={0}
                        lg={0}
                        xl={0}
                        textAlign={'center'}
                        sx={{backgroundColor: 'red'}}
                    >
                        <SideBar />
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        textAlign={'center'}
                    >
                        <MainContent />
                    </Grid>
                </>
            ) : (
                <>
                    <Grid item
                        xs={0}
                        sm={0}
                        md={0}
                        lg={0}
                        xl={0}
                        textAlign={'center'}
                    >
                        <SideBar />
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        textAlign={'center'}
                    >
                        <MainContent />
                    </Grid>
                </>

            )}

        </Grid>
    )

}

export default MainLayout;