import React, { useState } from 'react';
import "../App.css";
import { Paper, TextField, Button, Chip, Stack, Card, CardContent, Typography, CardActions } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import axios from 'axios'; // Import Axios for making HTTP requests

export default function ChatBox() {
    const [userInput, setUserInput] = useState('');
    const [aiInput, setAiInput] = useState('');

    const handleSubmit = async () => {
        if (!userInput) return; // Prevent submission if input is empty

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/ask', {
                question: userInput,
            });

            // Set the AI's response
            setAiInput(response.data.answer);
            // Optionally clear the input after sending
            setUserInput('');
        } catch (error) {
            console.error('Error communicating with the server:', error);
        }
    };

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
                    <Button size="small" 
                    sx={{ marginLeft: "-20px", display: 'flex' }}
                    onClick={handleSubmit} 
                    >
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