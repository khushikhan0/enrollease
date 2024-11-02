// CustomDrawer.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CustomDrawer({ isOpen, toggleDrawer }) {
    return (
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
            <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                <ListItem 
                    button component={Link} 
                    to="/"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'white',
                        }
                    }}>
                    <ListItemText 
                        primary="home" 
                        sx={{ 
                                color: 'black', 
                                fontWeight: 'normal',
                                '&:hover': {
                                    textDecoration: 'underline'
                                },
                            }}
                    />
                </ListItem>
                <ListItem 
                    button component={Link} 
                    to="/my-classes"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'white',
                        }
                    }}>
                    <ListItemText 
                        primary="my classes" 
                        sx={{ 
                                color: 'black', 
                                fontWeight: 'normal',
                                '&:hover': {
                                    textDecoration: 'underline'
                                },
                            }}
                    />
                </ListItem>
                <ListItem 
                    button component={Link} 
                    to="/course-details"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'white',
                        }
                    }}>
                    <ListItemText 
                        primary="course details" 
                        sx={{ 
                                color: 'black', 
                                fontWeight: 'normal',
                                '&:hover': {
                                    textDecoration: 'underline'
                                },
                            }}
                    />
                </ListItem>
                <ListItem 
                    button component={Link} 
                    to="/"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'white',
                        }
                    }}>
                    <ListItemText 
                        primary="settings" 
                        sx={{ 
                                color: 'black', 
                                fontWeight: 'normal',
                                '&:hover': {
                                    textDecoration: 'underline'
                                },
                            }}
                    />
                </ListItem>
            </List>
        </Drawer>
    );
}
