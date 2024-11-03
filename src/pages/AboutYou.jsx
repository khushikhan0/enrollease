import { Button } from '@mui/material';
import React from 'react';
import "../App.css";
import { Paper, TextField } from '@mui/material';

export default function AboutYou() {
    return (
        <div className="centered-container">
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
                <h2>tell us about yourself</h2>

                <div style={{marginBottom: '6px'}}>
                    <TextField 
                        label="university" 
                        variant="outlined" 
                        style={{
                            margin: '6px',
                            width: '422px',
                        }}
                    />
                </div>

                <div style={{marginBottom: '12px'}}>
                    <TextField 
                        label="major" 
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
                        className='better-button'
                        sx={{
                            boxShadow: 'none'
                        }}
                    >
                        sign up
                    </Button>
                </div>

                <p>have an account? <a href="/sign-up"> log in</a>!</p>

            </Paper>
        </div>
    );
}