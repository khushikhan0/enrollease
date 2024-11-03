import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { FormatItalic } from '@mui/icons-material';

export default function SignUp() {
    // set the use states for the fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPassword] = useState('');
    const [firstName, setFN] = useState('');
    const [lastName, setLN] = useState('');

    async function signUp() {

        if (password !== confirmPW) {
            //handle error
            return
        }
    
        const userData = {
            firstName,
            lastName,
            email,
            password
        }
    
        try {
            await fetch('http://127.0.0.1:5000/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .catch(e => console.log("Async Error:", e))
        } catch (e) {
            console.log(e)
        }
    }

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
            <h2>sign up with ease</h2>

            <div style={{marginBottom: '2px'}}>
                <Stack direction="row">
                    <TextField 
                    value={firstName}
                    onChange={(e) => setFN(e.target.value)}
                    id="first-name" 
                    label="first name" 
                    variant="outlined" 
                    style={{
                        margin: '10px',
                        width: '200px',
                        display: 'flex'
                    }}
                    />
                    <TextField 
                        value={lastName}
                        onChange={(e) => setLN(e.target.value)}
                        id="last-name" 
                        label="last name" 
                        variant="outlined" 
                        style={{
                            margin: '10px',
                            width: '200px',
                            display: 'flex'
                        }}
                        />
                    </Stack>    
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

            <div style={{marginBottom: '6px'}}>
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <TextField 
                    value={confirmPW}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="confirm-password" 
                    label="confirm password" 
                    variant="outlined"
                    type="password"
                    style={{
                        margin: '6px',
                        width: '422px',
                    }}
                />
            </div>

            <div style={{ marginTop: '12px', marginBottom: '12px'}}>
                <Button 
                    variant="contained"
                    onClick={signUp}
                    className='better-button-inverted'
                >
                    sign up
                </Button>
            </div>

            <p>already have an account? <a href="/log-in" style={{ color: 'black', fontWeight: 'bold' }}> log in</a></p>

            </Paper>
        </div>
    );
}