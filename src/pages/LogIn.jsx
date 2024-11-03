import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {

    // define the fields 
    const [email, setEmail] = useState('');
    const [password, setPW] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    async function logIn() {

        const userData = {
            email,
            password
        }
    
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                // Clear the input fields
                setEmail('');
                setPW('');
                setErrorMsg('');

                navigate('/my-classes');
            }

            if (!response.ok) {
                // Handle HTTP errors by extracting the message from the response
                const errorData = await response.json();
                console.log("EOROROROROROROROROR")
                setErrorMsg(errorData.message || "Sign up failed. Please try again.");
                return;
            }
        } catch (e) {
            console.log("WEEEEAAWWWWAEEEEE")
            setErrorMsg(e.message || "Oops, Something went wrong");
        }
    }

    return (
        <div class="centered-container">
            <Paper 
            elevation={3}
            style={{
                padding: '16px',
                margin: '16px',
                textAlign: 'center',
                boxShadow: 'none',
            }}
            variant='outlined'
            > 
            <h2 style={{marginBottom: '3px'}}>log in with ease</h2>
            <div>
                <Typography padding={'0px'}>{errorMsg}</Typography>
            </div>
            <div style={{marginBottom: '6px'}}>
                <TextField 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email-address" 
                label="email address" 
                variant="outlined" 
                style={{
                    margin: '6px',
                    width: '422px',
                }}
                />
            </div>

            <div style={{marginBottom: '12px'}}>
                <TextField 
                value={password}
                onChange={(e) => setPW(e.target.value)}
                id="password" 
                label="password" 
                variant="outlined"
                type="password"
                style={{
                    margin: '6px',
                    width: '422px',
                }}
                />
            </div>
            
            <div style={{marginBottom: '12px'}}>
                <Button 
                    variant="contained"
                    onClick={logIn}
                    className='better-button-inverted'
                >
                    log in
                </Button>
            </div>

            <p>don't have an account? <a href="/sign-up" style={{ color: 'black', fontWeight: 'bold' }}> sign up</a></p>

            </Paper>
        </div>
    );
}