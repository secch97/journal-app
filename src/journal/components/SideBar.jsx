import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component={"nav"}
        sx={{width: {sm:drawerWidth}, flexShrink: {sm:0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: {xs:"block"},
                "& .MuiDrawer-paper": {boxSizing:"border-box", width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component={"div"}>
                    Saul Castillo
                </Typography>
            </Toolbar>
            <Divider></Divider>
            <List>
                {
                    ["January", "February", "March", "April"].map((text)=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot></TurnedInNot>
                                </ListItemIcon>
                                <Grid container alignItems={"center"} justifyContent={"center"}>
                                    <ListItemText primary={text}></ListItemText>
                                    <ListItemText secondary={"Lorem Ipsum"}></ListItemText>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
