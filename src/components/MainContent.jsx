import Box from "@mui/material/Box"

import { dark, light } from "../layouts/theme"

import TabPanel from '../components/TabPanel';
import EcoManage from './EcoManage';

import { MainContext } from '../context/createContext';
import { useContext } from 'react';

const MainContent = () => {

  const { mode, value } = useContext(MainContext)

  return (

    <Box sx={{
      backgroundColor:
        mode ? `${dark.main}` : `${light.main}`,
      color:
        mode ? `${dark.text}` : `${light.text}`,
      height: '78vh',
      pt: '1rem',
    }}>

      <TabPanel value={value} index={0}><EcoManage /></TabPanel>
      <TabPanel value={value} index={1}>کار های روزانه</TabPanel>
      <TabPanel value={value} index={2}>برنامه هفتگی</TabPanel>
      <TabPanel value={value} index={3}>یادداشت ها</TabPanel>

    </Box>
  )

}

export default MainContent;