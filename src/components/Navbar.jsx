// CustomDrawer.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close'

export default function CustomDrawer({ isOpen, toggleDrawer }) {
    const menuItems = [
        { label: 'my classes', path: '/my-classes'},
        { label: 'course details', path: '/course-details'},
        { label: 'settings', path: '/'}
    ];

    const listItemStyles = {
        '&:hover': { backgroundColor: 'white' },
    };

    const listitemTextStyles = {
        color: 'black', 
        '&:hover': { textDecoration: 'underline' }
    };

    return (
        <Drawer 
            anchor="left" 
            open={isOpen} 
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: { width: 250 },
            }}>
            <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                <ListItem
                    key='/'
                    button component={Link}
                    to='/'
                    sx={{
                        '&:hover': { backgroundColor: 'white' },
                    }}
                >
                    <ListItemText 
                        primary="enrollease"
                        primaryTypographyProps={{
                            sx: {
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 'large'
                            }
                        }}
                    />
                    <IconButton 
                        onClick={toggleDrawer(false)} 
                        edge="end" 
                        sx={{ 
                            color: 'black', 
                            bgcolor: 'transparent',
                            border: 'none',      
                            '&:hover': {
                                bgcolor: 'transparent', 
                            },
                            '&:focus': {
                                outline: 'none', 
                            }
                        }}
                    >
                    <CloseIcon sx={{ 
                        display: 'flex', 
                        position: 'absolute',
                        right: '12px',
                        top: '-5px'
                    }} />
                </IconButton>

                </ListItem>
                {menuItems.map((item, index) => (
                    <ListItem
                        key={index}
                        button component={Link}
                        to={item.path}
                        sx={listItemStyles}
                    >
                        <ListItemText
                            primary={item.label}
                            sx={listitemTextStyles}
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
