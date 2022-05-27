import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountMenu from "../accountMenu/AccountMenu";
import {Badge, IconButton, Typography} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom";


export default function Header() {
    const email = localStorage.getItem("email");
    // const emailRegister = localStorage.getItem("emailRegister");
    // const emailLogin = localStorage.getItem("emailLogin");

    return (
        <Box sx={{flexGrow: 2, width: '100%'}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h4" color="inherit" component="div">
                        <Link to="/">Моя школа</Link>
                    </Typography>
                    <Box sx={{flexGrow: 1}}/>

                    {email
                        // || emailRegister || emailLogin
                        &&
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                            </IconButton>
                        </Box>
                    }
                    {email ? <AccountMenu/> : <Link to="/">Увійти</Link>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
