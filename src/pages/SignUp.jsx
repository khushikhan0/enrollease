import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { FormatItalic } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    // set the use states for the fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPassword] = useState('');
    const [firstName, setFN] = useState('');
    const [lastName, setLN] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

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
            const response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                // Clear the input fields
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setFN('');
                setLN('');
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
            <h2 style={{marginBottom: '3px'}}>sign up with ease</h2>
            <div>
                <Typography padding={'0px'}>{errorMsg}</Typography>
            </div>
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