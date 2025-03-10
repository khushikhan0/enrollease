// Home.js
import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import { Button, CssBaseline, Stack } from '@mui/material';
import NavBarButton from '../components/NavBarButton';
import '../App.css'

export default function Home() {
    return (
        <div>
            <div className='image-container'>
                <img src='src\assets\gradient.png' className='responsive-image'/>
            </div>
            <NavBarButton />
            <div className='centered-container'>
                <Stack spacing={2} alignItems="center" className='stack-styling'>
                    <h1>welcome to enrollease</h1>
                    <h3>your academic advisor but better</h3>
                    <Button 
                        variant="outlined" 
                        className='better-button-inverted'
                        
                    >
                        <a href="/about-you" style={{
                            color: 'white'
                        }}>get started</a>
                    </Button>
                </Stack>
            </div>
        </div>
    );
}