import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './index.css';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import { Typography } from "@mui/material";

const MyAppBar = () => {
    let loginStatus = 'Logged Out';
    return (
        <>
            <form>
                <Box >
                    <AppBar position="static">
                        <Toolbar>
                            <Stack direction="row" spacing={2}>
                                <Stack direction="row" spacing={72}>
                                    <Link to="/">
                                        <IconButton color="default" size="large" edge="start" >
                                            <HomeIcon />
                                        </IconButton>
                                    </Link>
                                    <Link to="log">
                                        <IconButton color="default" size="large" edge="end" >
                                            <LoginIcon />
                                        </IconButton>
                                    </Link>
                                </Stack>
                                <Typography className="appbar">{loginStatus}</Typography>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                </Box>
            </form >
        </>
    );
}

export default MyAppBar;

//sx={{ flexGrow: 1 }}