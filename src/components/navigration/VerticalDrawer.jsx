//react import
import React from 'react';
import PropTypes from "prop-types";

//material-ui import
import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SettingsIcon from '@material-ui/icons/Settings';

//custom style
const DrawerStyle = makeStyles((theme) => createStyles({
    outerWrapper : {
        background : "rgb(58, 55, 55)",
    }

    
}));


const VerticalDrawer = [
    {
      title: 'Home',
      path: '/',
      icon: <HomeIcon />,
      cName: 'nav-text'
    },
    {
      title: 'Search',
      path: '/search',
      icon: <SearchIcon />,
      cName: 'nav-text'
    },
    {
      title: 'Camera',
      path: '/camera',
      icon: <PhotoCameraIcon />,
      cName: 'nav-text'
    },
    {
      title: 'Chat',
      path: '/chat',
      icon: <ChatIcon />,
      cName: 'nav-text'
    },
    {
      title: 'Store',
      path: '/store',
      icon: <StoreIcon />,
      cName: 'navText'
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <SettingsIcon />,
      cName: 'navText'
    }
  ];

export default VerticalDrawer;