import React, { useState } from 'react';
import "../App.css";
import { Paper, TextField, Button, Chip, Stack } from '@mui/material';

export default function AboutYou() {
    const defaultCourses = ['CS2000', 'CS2500', 'CS2800', 'CS3000', 'CS3500', 'CS4000', 'CS4500', 'CS5000']
    const [allCourses, setAllCourses] = useState(defaultCourses);
    const [selectedChips, setSelectedChips] = useState([]);
    const [newCourse, setNewCourse] = useState('');

    const handleChipClick = (index) => {
        setSelectedChips((prevSelectedChips) => {
            if (prevSelectedChips.includes(index)) {
                return prevSelectedChips.filter((chipIndex) => chipIndex !== index)
            } else {
                return [...prevSelectedChips, index];
            }
        });
    };

    const handleAddCourse = (event) => {
        if (event.key === 'Enter' && newCourse.trim()) {
            const course = newCourse.trim().toUpperCase();
            if (course && !allCourses.includes(course)) {
                const newCourseIndex = allCourses.length;

                setAllCourses((prevCourses) => [...prevCourses, course]);
                setSelectedChips((prevSelectedChips) => [...prevSelectedChips, newCourseIndex]);

                setNewCourse('');
            }
        }
    };

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
                        style={{
                            margin: '6px',
                            width: '422px',
                        }}
                    />
                </div>
                
                <h4 style={{ margin: "10px", fontWeight: 'normal' }}>select classes you've taken:</h4>
                <div style={{ display: 'flex', alignSelf: 'center', maxWidth: '422px' }}>
                    <Stack direction="row" spacing={0} justifyContent="center" display='flex' style={{ marginBottom: '12px', flexWrap: 'wrap', overflowX: 'hidden' }}> 
                        {allCourses.map((course, index) => (
                            <Chip 
                                key={index}
                                label={course}
                                variant={selectedChips.includes(index) ? 'contained' : 'outlined'}
                                onClick={() => handleChipClick(index)}
                                style={{
                                    margin: "5px"
                                }}
                            />
                        ))}
                    </Stack>
                </div>

                <h5 style={{ margin: "10px", marginBottom: "5px", fontWeight: 'normal', textAlign: 'left' }}>don't see your classes?</h5>
                <div style={{ marginBottom: '35px' }}>
                    <Stack direction="row">
                        <h5 style={{ margin: "10px", marginTop: "1px", textAlign: 'left' }}>type the course number in and hit enter:</h5>
                        <TextField
                            label="course #" 
                            variant="outlined"
                            type="crn"
                            size='small'
                            value={newCourse}
                            onChange={(e) => setNewCourse(e.target.value)}
                            onKeyDown={handleAddCourse}
                            sx={{
                                maxWidth: '100px',
                                height: '10px',
                                display: 'flex',
                                marginLeft: '10px',
                                marginTop: '-8px', 
                                textAlign: 'center'
                            }}
                        />
                    </Stack>
                </div>
                

                <div style={{marginBottom: '12px'}}>
                    <Button 
                        variant="contained"
                        onClick={() => window.location.href = '/sign-up'}
                        className='better-button'
                        sx={{
                            boxShadow: 'none'
                        }}
                    >
                        next
                    </Button>
                </div>
            </Paper>
        </div>
    );
}