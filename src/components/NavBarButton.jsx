// Home.js
import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import { Button, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBarButton() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <div>
            <Button 
                onClick={toggleDrawer(true)} 
                variant='text'
                sx={{ 
                    color: 'black', 
                    width: 50,
                    height: 50,
                    display: 'flex', 
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    border: 'none',      
                    '&:focus': {
                        outline: 'none', 
                    }
            }}>
                <MenuIcon />
            </Button>
            <NavBar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </div>
    );
}