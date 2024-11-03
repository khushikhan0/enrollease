import React, { useState } from 'react';
import "../App.css";
import { TextField, Button, Card, CardContent, Box, CardActions } from '@mui/material';
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
            <Box display='flex' justifyContent='center' alignItems='center'>
                <p>{userInput}</p> 
                <p>{aiInput}</p>

                <Card variant='contained' sx={{ boxShadow: 'none', display: 'flex', width: '90%', maxWidth: '1000px', borderRadius: '10px', backgroundColor: 'lightgray' }}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw">
                        <Card variant='outlined' sx={{ boxShadow: 'none', minWidth: '200px', display: 'flex', width: '80%', maxWidth: '1000px', marginBottom: '-80vh', borderRadius: '10px' }}>
                            <CardContent sx={{ flexGrow: 1, borderRadius: '10px' }}>
                                    <TextField 
                                        label="ask advisor a question" 
                                        variant="outlined" 
                                        sx={{
                                            margin: '6px',
                                            width: '100%',
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '10px'
                                            }
                                        }}
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                    />
                            </CardContent>
                                <Button size="small" 
                    sx={{ marginLeft: "-12px", display: 'flex', backgroundColor: "transparent", '&:focus': { outline: 'none' } }}
                    onClick={handleSubmit} 
                    >
                                    <ArrowUpwardIcon 
                                        fontSize='large'
                                        sx={{
                                            backgroundColor: 'lightgray',  
                                            color: '#fff',             
                                            borderRadius: '20%',       
                                            padding: '4px',     
                                            '&:hover': { backgroundColor: '#272727' },     
                                        }}
                                    />
                                </Button>
                        </Card>
                    </Box>
                </Card> 
            </Box>
           
        </div>
      );
}