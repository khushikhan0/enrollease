import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

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
        <div class="centered-container">
            <Paper 
            elevation={3}
            style={{
                padding: '24px',
                margin: '16px',
                textAlign: 'center',
            }}> 
            <h1>Sign Up for EnrollEase!</h1>

            <div style={{marginBottom: '2px'}}>
                <TextField 
                value={firstName}
                onChange={(e) => setFN(e.target.value)}
                id="first-name" 
                label="First Name" 
                variant="outlined" 
                style={{
                    margin: '10px',
                    width: '200px',
                }}
                />
                <TextField 
                value={lastName}
                onChange={(e) => setLN(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPW}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                onClick={signUp}
                >
                    Sign Up
                </Button>
            </div>

            <p>Already have an account? <a href="/login"> Log In</a>!</p>

            </Paper>
        </div>
    );
}