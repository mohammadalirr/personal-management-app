// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const TabPanel = (props) => {

    const { children, value, index,} = props;

    return (
        <div 
        role="tabpanel"
        hidden={value!== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        >
        {value === index && <Box fontSize='large'>{children}</Box>}
        </div>
    )
}





export default TabPanel;