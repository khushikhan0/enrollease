import React, { useState } from 'react';
import "../App.css";
import { Paper, TextField, Button, Chip, Stack, Card, CardContent, Typography, CardActions } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ChatBox() {
    const [userInput, setUserInput] = useState('');
    const [aiInput, setAiInput] = useState('');

    return (
        <div>
            <p>{userInput}</p> 
            <p>{aiInput}</p>

            <Card variant='outlined' sx={{ minWidth: '300px', display: 'flex', boxShadow: 'none', width: '90%', maxWidth: '600px', bottom: '5px' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                        <TextField 
                            label="ask advisor a question" 
                            variant="outlined" 
                            style={{
                                margin: '6px',
                                width: '100%',
                            }}
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                </CardContent>
                <CardActions sx={{ display: 'flex' }}>
                    <Button size="small" sx={{ marginLeft: "-20px", display: 'flex' }}>
                        <ArrowUpwardIcon 
                            fontSize='large'
                            sx={{
                                backgroundColor: '#000000',  
                                color: '#fff',             
                                borderRadius: '20%',       
                                padding: '4px'              
                            }}
                        />
                    </Button>
                </CardActions>
            </Card>
        </div>
      );
}