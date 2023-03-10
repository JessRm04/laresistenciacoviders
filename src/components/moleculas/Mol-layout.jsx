import React from 'react';
import { Drawer } from '@mui/material';
import { flexbox } from '@mui/system';
import List from '@mui/material/List'; //ul
import ListItem from '@mui/material/ListItem'; //li
import ListItemIcon from '@mui/material/ListItemIcon';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import '../NavbarStyles.css' 
import coronavirus from '../../assets/img/coronavirus.png';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const drawerWidth = 80;

const menuItems = [
    { 
    icon: <PieChartOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    { 
    icon: <MenuOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    { 
    icon: <GridViewOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    {
    icon: <FolderOpenOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    {
    icon: <DynamicFeedOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    {
    icon: <MovingOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    {
    icon: <LanguageOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    {
    icon: <ChatBubbleOutlineOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    {
    icon: <RadioButtonCheckedIcon className='lastIcon' style={{ color: "#3639ae" }}/>,
    path: '/',
    },
]

export default function Layout({children}) {
    const classes = {
        drawer: {
          width: drawerWidth,
          ".MuiDrawer-paper": {
            width: drawerWidth,
          },
        },
        drawerPaper: {
            width: drawerWidth,
        },
        root: {
            display: flexbox,
        },
        items: {
            width: '10px',
        },
      }


    return (
        <div className={classes.root}>
            <Drawer
            sx={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <img className="covidLogo" src={coronavirus} alt="covidlogo"></img>
                </div>
                <List>
                    {menuItems.map(item => (
                    <ListItem className='listItem'
                    button
                    >
                        <ListItemIcon className='icon'>{item.icon}</ListItemIcon>
                    </ListItem>
                    )
                )}
                </List>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
};
