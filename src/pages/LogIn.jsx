import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function LogIn() {
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
            <h1>Log In Here</h1>

            <div style={{marginBottom: '6px'}}>
                <TextField 
                id="email-address" 
                label="Email Address" 
                variant="outlined" 
                style={{
                    margin: '6px',
                    width: '422px',
                }}
                />
            </div>

            <div style={{marginBottom: '12px'}}>
                <TextField 
                id="password" s
                label="Password" 
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
                onClick={() => window.location.href = '/my-classes'}>
                    Log In
                </Button>
            </div>

            <p>Don't have an account? <a href="/sign-up" style={{ color: 'black', fontWeight: 'bold' }}> Sign Up</a>!</p>

            </Paper>
        </div>
    );
}