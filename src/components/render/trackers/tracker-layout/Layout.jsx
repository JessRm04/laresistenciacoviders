import React from 'react'
import Drawer from '@mui/material/Drawer';
import { flexbox } from '@mui/system';
import List from '@mui/material/List'; //ul
import ListItem from '@mui/material/ListItem'; //li
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
//import ListItemText from '@mui/material/ListItemText';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import {useNavigate} from 'react-router-dom';
import './layout-styles.css' 
import coronavirus from '../../../../assets/img/img/icons/coronavirus.png';
//import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


const drawerWidth = 80;

const menuItems = [
    { 
    id: 1,
    icon: <PieChartOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    { 
    id: 2,
    icon: <MenuOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/TrackerTres',
    },
    { 
    id: 3,
    icon: <GridViewOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/TrackerCuatro',
    },
    {
    id: 4,
    icon: <FolderOpenOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/TrackerCinco',
    },
    {
    id: 5,
    icon: <DynamicFeedOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/',
    },
    {
    id: 6,
    icon: <MovingOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/TrackerSeis',
    },
    {
    id: 7,
    icon: <LanguageOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/TrackerSiete',
    },
    {
    id: 8,
    icon: <ChatBubbleOutlineOutlinedIcon style={{ color: "#3639ae" }}/>,
    path: '/TrackerOcho',
    },
    // {
    // id: 9,
    // icon: <RadioButtonCheckedIcon className='lastIcon' style={{ color: "#3639ae" }}/>,
    // path: '/',
    // },
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

       const navigate = useNavigate();

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
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    >
                        <ListItemIcon className='icon' key={item.id}>{item.icon}</ListItemIcon>
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
}


