// CustomDrawer.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, ListItemAvatar, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close'

export default function CustomDrawer({ isOpen, toggleDrawer }) {
    const menuItems = [
        { label: 'home', path: '/'},
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
                    {/* <ListItemAvatar>
                        <Avatar src="src/assets/enrollease_logo_big.png" alt="enrollease logo" />
                    </ListItemAvatar> */}
                    <ListItemText 
                        primary={
                            <img src="src/assets/enrollease_logo_big.png" alt="enrollease logo" style={{ width: 40, height: 40 }} />
                        }
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
                        right: '20px',
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
