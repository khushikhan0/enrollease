// Home.js
import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import { Button, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavBarButton from '../components/NavBarButton';

export default function Home() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
    <div>
        <NavBarButton />
    </div>
    );
}