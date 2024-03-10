import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box
        sx={{display:"flex"}}
    >
        {/* Navbar */}
        <NavBar drawerWidth={drawerWidth}></NavBar>
        {/* Sidebar*/}
        <SideBar drawerWidth={drawerWidth}></SideBar>
        <Box 
            component={"main"}
            sx={{flexGrow: 1, p:3}}
        >
            <Toolbar></Toolbar>
            {children}
        </Box>
    </Box>
  )
}
