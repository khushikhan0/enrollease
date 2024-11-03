import React, { useState } from 'react';
import NavBarButton from '../components/NavBarButton';
import { Paper, Button, TextField, Stack, Divider, InputAdornment, IconButton } from '@mui/material';
import ChatBox from '../components/ChatBox';
import SearchIcon from '@mui/icons-material/Search';

// Initial semester data
const initialSemesters = {
    fall1: [],
    spring1: [],
    summer1: [],
    fall2: [],
    spring2: [],
    summer2: [],
    fall3: [],
    spring3: [],
    summer3: [],
    fall4: [],
    spring4: [],
    summer4: []
};

// Titles for each semester
const semesterTitles = {
    fall1: "year 1: fall",
    spring1: "year 1: spring",
    summer1: "year 1: summer",
    fall2: "year 2: fall",
    spring2: "year 2: spring",
    summer2: "year 2: summer",
    fall3: "year 3: fall",
    spring3: "year 3: spring",
    summer3: "year 3: summer",
    fall4: "year 4: fall",
    spring4: "year 4: spring",
    summer4: "year 4: summer",
};

// Component to display classes for a single semester and add/remove classes
function SemesterClasses({ semesterTitle, classes, updateClasses, semesterKey }) {
    const [classInput, setClassInput] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    const handleAddClass = () => {
        const trimmedInput = classInput.trim();
        if (trimmedInput) {
            if (classes.includes(trimmedInput)) { // Check for duplicates
                setErrorMessage('This class is already added!'); // Set error message
            } else {
                updateClasses(semesterKey, trimmedInput, 'add'); // Use the key for updating
                setClassInput(''); // Clear input field
                setErrorMessage(''); // Clear error message
            }
        }
    };

    const handleRemoveClass = () => {
        const trimmedInput = classInput.trim();
        if (trimmedInput) {
            updateClasses(semesterKey, trimmedInput, 'remove'); // Use the key for updating
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
            <p style={{ fontWeight: 'bold' }}>{semesterTitle}</p> {/* Use the title here */}
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
                    <li>no classes available</li>
                )}
            </ul>
            <TextField
                size="small"
                variant="outlined"
                placeholder="enter a class"
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
                    add
                </Button>
                <Button 
                    variant="contained"
                    className="better-button" 
                    onClick={handleRemoveClass}
                    disableRipple
                >
                    remove
                </Button>
            </div>
        </Paper>
    );
}

// Main component to display the grid of semesters
export default function MyClasses() {
    const [semesterData, setSemesterData] = useState(initialSemesters);

    // Function to add or remove a class from a specific semester
    const updateClasses = (semesterKey, classItem, action) => {
        setSemesterData((prevData) => {
            const updatedClasses = 
                action === 'add'
                    ? [...prevData[semesterKey], classItem]
                    : prevData[semesterKey].filter((item) => item !== classItem);

            return { ...prevData, [semesterKey]: updatedClasses }; // Update the specific semester
        });
    };

    return (
        <div>
            <NavBarButton />
            <Stack direction="row">
                <Stack direction="column">
                    <h2>classes</h2>
                    <Divider sx={{ marginX: 2 }} />
                    <Stack direction="row" alignItems="center" justifyContent="center">
                        <TextField
                            placeholder="search for semester"
                            sx={{ margin: '10px', width: '90%' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => console.log('Search button clicked')}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Stack>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
                    {Object.keys(semesterData).map((semesterKey) => (
                        <div key={semesterKey} style={{ width: '100%' }}>
                            <SemesterClasses 
                                semesterTitle={semesterTitles[semesterKey]}  // Pass the title here
                                classes={semesterData[semesterKey]} 
                                updateClasses={updateClasses} 
                                semesterKey={semesterKey}  // Pass the semester key for updates
                            />
                        </div>
                    ))}
                </div>
                </Stack>
                <ChatBox />
            </Stack>
        </div>
    );
}
