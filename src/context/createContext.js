import { createContext } from "react";

export const MainContext = createContext({
    drawerOpen: false,
    setDrawerOpen: () => { },
    value: 0,
    setValue: () => { },
    mode: false,
    setMode: () => { },
    variant: {},
    handleWidth: {},
    drawerDivider: {},
    a11yProps : () => {},
    handleChangeTabs: () => {},
    valueC: 0,
    setValueC: () => {},
    ecoDrawerOpen: true,
    setEcoDrawerOpen: () => {},
});

export const CardStyle = createContext({
    isActive: 1,
    setIsActive: () => {},
})