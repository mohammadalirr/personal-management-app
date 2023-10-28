import Fab from "@mui/material/Fab"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';


const DrawerFab = () => {
    return (
        <Fab color={'#64ffda'} sx={{position:'absolute', top:20, right:20}}>
            <DashboardRoundedIcon/>
        </Fab> 
    ) 
}

export default DrawerFab;