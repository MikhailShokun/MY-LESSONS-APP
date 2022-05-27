import React, {useState, Fragment} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import {signUserOut, User} from "../../firebase-config";
import {EventNote, HomeWork} from "@mui/icons-material";
import {Badge} from "@mui/material";
import ava from "../../assets/images/avaBoy1.png"

const AccountMenu = () => {
    const avaUrl = localStorage.getItem("profilePic");
    const email = localStorage.getItem("email");
    // const emailRegister = localStorage.getItem("emailRegister");
    // const emailLogin = localStorage.getItem("emailLogin");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Меню">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{mr: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >

                        <Badge badgeContent={5} color="error">
                            <Avatar src={avaUrl != null ? avaUrl : ava} alt={'ava'}
                                    sx={{width: 50, height: 50, background: '#f1f1f1'}}/>
                        </Badge>

                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >

                <Link to="/profile">
                    <MenuItem>
                        <Avatar src={avaUrl != null ? avaUrl : ava} alt={'ava'}/>
                        {/*Моя сторінка*/}
                        {email
                            // || emailLogin || emailRegister
                        }
                    </MenuItem>
                </Link>

                <Link to="/lessons">
                    <MenuItem>
                        <ListItemIcon>
                            <EventNote fontSize="small"/>
                        </ListItemIcon>
                        Розклад уроків
                    </MenuItem>
                </Link>

                <Link to="/homework">
                    <MenuItem>


                        <ListItemIcon>
                            <Badge badgeContent={5} color="error">
                                <HomeWork fontSize="small"/>
                            </Badge>
                        </ListItemIcon>
                        Домашні завдання
                    </MenuItem>
                </Link>


                <Link to="/settings">
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small"/>
                        </ListItemIcon>
                        Налаштування
                    </MenuItem>
                </Link>

                <Divider/>

                <MenuItem onClick={signUserOut}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Вийти
                </MenuItem>
            </Menu>
        </Fragment>
    );
}


export default AccountMenu;

