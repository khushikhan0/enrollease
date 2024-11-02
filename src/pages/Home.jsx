// Home.js
import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import { Button, CssBaseline, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarButton from '../components/NavBarButton';
import '../App.css'

export default function Home() {
    return (
        <div>
            <NavBarButton />
            <Stack spacing={2} alignItems="center">
                <h1>welcome to enrollease</h1>
                <h3>ai-powered advising</h3>
                <Button 
                    variant="outlined" 
                    className='better-button'
                    // sx={{ 
                    //     color: 'black', 
                    //     border: 'none',   
                    //     backgroundColor: '#f0f0f0',
                    //     '&:hover': {
                    //         backgroundColor: 'lightgray',
                    //     },
                    //     '&:focus': {
                    //         outline: 'none', 
                    //     },
                    //     transition: 'none'
                    // }}
                >
                    get started
                </Button>
            </Stack>
        </div>
    );
}