import React, { useState } from 'react';
import "../App.css";
import { TextField, Button, Card, CardContent, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import axios from 'axios';
import { Grid } from '@mui/joy';
import ChatBubble from './ChatBubble';

export default function ChatBox() {
    const [userInput, setUserInput] = useState('');
    const [messageHistory, setMessageHistory] = useState([{ sender: "ai", text: "welcome, how can I help you?" }, { sender: "user", text: "i need help!!!!"}]);

    const handleSubmit = async () => {
        if (!userInput) return; // Prevent submission if input is empty

        try {
            setMessageHistory((prev) => [...prev, { sender: 'user', text: userInput }]);

            const response = await axios.post('http://127.0.0.1:5000/api/ask', {
                question: userInput,
            });

            // Set the AI's response
            setMessageHistory((prev) => [...prev, { sender: 'ai', text: response.data.answer }]);
            setUserInput(''); // Clear input after sending
        } catch (error) {
            console.error('Error communicating with the server:', error);
        }
    };

    return (
        <Box display='flex' flexDirection='column' width="600px" top='50px' height='100vh' sx={{ position: 'relative' }}>
            <Box display='flex' justifyContent='center' alignItems='flex-start' sx={{ flexGrow: 1, padding: '30px', overflowY: 'auto' }}>
                <Card variant='outlined' sx={{ width: '100%', maxWidth: '800px', height: 'calc(100vh - 100px)', borderRadius: '10px', boxShadow: '0px 4px 20px rgba(200, 200, 200, 0.5)', transition: 'box-shadow 0.3s ease-in-out' }}>
                    {messageHistory.map((item, index) => {
                            const isAI = item.sender === "ai";
                            const backgroundColor = isAI ? '#000000' : '#ffffff'; 
                            const textColor = isAI ? '#ffffff' : '#000000';
                            
                            return (
                                <Grid item xs={12} key={index}>
                                    <ChatBubble
                                        key={index}
                                        text={item.text}
                                        bkgdColor={backgroundColor}
                                        borderColor={backgroundColor}
                                        textColor={textColor}
                                        isAI={isAI}
                                    />
                                </Grid>
                            );
                        })}
                </Card>
            </Box>

            <Box sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1000px', minWidth: '300px' }}>
                <Card variant='outlined' sx={{ boxShadow: 'none', borderRadius: '10px' }}>
                    <CardContent sx={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                        <TextField 
                            label="ask an advisor" 
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
                        <Button size="small" sx={{ marginLeft: "-12px", display: 'flex', backgroundColor: "transparent", '&:focus': { outline: 'none' } }} onClick={handleSubmit}>
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
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
