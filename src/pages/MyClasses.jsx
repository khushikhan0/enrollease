import React, { useState } from 'react';
import NavBarButton from '../components/NavBarButton';
import { Paper, Button, TextField } from '@mui/material';

// Initial semester data
const initialSemesters = {
    fall1: [["year 1: fall"],[]],
    spring1: [["year 1: spring"],[]],
    summer1: [["year 1: summer"],[]],
    fall2: [["year 2: fall"],[]],
    spring2: [["year 2: spring"],[]],
    summer2: [["year 2: summer"],[]],
    fall3: [["year 3: fall"],[]],
    spring3: [["year 3: spring"],[]],
    summer3: [["year 3: summer"],[]],
    fall4: [["year 4: fall"],[]],
    spring4: [["year 4: spring"],[]],
    summer4: [["year 4: summer"],[]]
};

// Component to display classes for a single semester and add/remove classes
function SemesterClasses({ semester, classes, updateClasses }) {
    const [classInput, setClassInput] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleAddClass = () => {
        if (classInput.trim()) {
            if (classes.includes(classInput.trim())) { // Check for duplicates
                setErrorMessage('This class is already added!'); // Set error message
            } else {
                updateClasses(semester, classInput.trim(), 'add');
                setClassInput(''); // Clear input field
                setErrorMessage(''); // Clear error message
            }
        }
    };

    const handleRemoveClass = () => {
        if (classInput.trim()) {
            updateClasses(semester, classInput.trim(), 'remove');
            setClassInput(''); // Clear input field
            setErrorMessage(''); // Clear error message
        }
    };

    return (
        <Paper 
            elevation={3}
            style={{
                padding: '10px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <p style={{ fontWeight: 'bold' }}>{semester}</p>
            <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: '10px 0', 
                maxHeight: '150px',
                overflowY: 'auto'
            }}>
                {classes.length > 0 ? (
                    classes.map((classItem, index) => (
                        <li key={index}>{classItem}</li>
                    ))
                ) : (
                    <li>No classes available</li>
                )}
            </ul>
            <TextField
                size="small"
                variant="outlined"
                placeholder="Enter a class"
                value={classInput}
                onChange={(e) => setClassInput(e.target.value)}
                style={{ marginTop: '10px' }}
            />
            {errorMessage && ( // Display error message if it exists
                <p style={{ color: 'red', margin: '5px 0' }}>{errorMessage}</p>
            )}
            <div style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
                <Button 
                    variant="contained" 
                    className="better-button-inverted"
                    onClick={handleAddClass} 
                    disableRipple
                >
                    Add
                </Button>
                <Button 
                    variant="contained"
                    className="better-button" 
                    onClick={handleRemoveClass}
                    disableRipple
                >
                    Remove
                </Button>
            </div>
        </Paper>
    );
}

// Main component to display the grid of semesters
export default function MyClasses() {
    const [semesterData, setSemesterData] = useState(initialSemesters);

    // Function to add or remove a class from a specific semester
    const updateClasses = (semester, classItem, action) => {
        setSemesterData((prevData) => {
            const updatedClasses = 
                action === 'add'
                    ? [...prevData[semester], classItem]
                    : prevData[semester].filter((item) => item !== classItem);

            return { ...prevData, [semester]: updatedClasses };
        });
    };

    return (
        <div>
            <NavBarButton />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '20px'
            }}>
                {Object.keys(semesterData).map((semester) => (
                    <div key={semester} style={{ width: '100%' }}>
                        <SemesterClasses 
                            semester={semesterData[semester][0][0]} 
                            classes={semesterData[semester][1]} 
                            updateClasses={updateClasses} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
