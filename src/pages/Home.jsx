// Home.js
import React, { useState } from 'react';
import IconButton from '@mui/joy/IconButton';
import NavBar from '../components/Navbar';
import { Button, CssBaseline } from '@mui/material';

export default function Home() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        // <React.Fragment>
        //     <IconButton variant="outlined" color="neutral" onClick={toggleDrawer(true)} style={{ zIndex: 1000 }}>
        //         open drawer
        //     </IconButton>
        //     {/* <NavBar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} /> */}
        // </React.Fragment>
        // <div>
        //     <IconButton variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        //         open drawer
        //     </IconButton>
        //     <NavBar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        // </div>
        <div>
        <Button onClick={toggleDrawer(true)} sx={{ color: 'black' }}>
            click me
        </Button>
        <NavBar isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
    );
}
