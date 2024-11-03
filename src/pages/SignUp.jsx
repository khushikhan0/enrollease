import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SignUp() {
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
            <h1>Sign Up for EnrollEase!</h1>

            <div style={{marginBottom: '2px'}}>
                <TextField 
                id="first-name" 
                label="First Name" 
                variant="outlined" 
                style={{
                    margin: '10px',
                    width: '200px',
                }}
                />
                <TextField 
                id="last-name" 
                label="Last Name" 
                variant="outlined" 
                style={{
                    margin: '10px',
                    width: '200px',
                }}
                />
            </div>

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

            <div style={{marginBottom: '6px'}}>
                <TextField 
                id="password" 
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
                <TextField 
                id="confirm-password" 
                label="Confirm Password" 
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
                onClick={() => window.location.href = '/my-classes'}
                >
                    Sign Up
                </Button>
            </div>

            <p>Already have an account? <a href="/log-in"> Log In</a>!</p>

            </Paper>
        </div>
    );
}