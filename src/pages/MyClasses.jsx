import React, { useState } from 'react';
import NavBarButton from '../components/NavBarButton';
import { Paper, Button, TextField } from '@mui/material';

// Initial semester data
const initialSemesters = {
    fall1: ['cs1200', 'cs1800', 'cs2500', 'cs2501', 'math1365', 'honr1102', 'honr1310'],
    spring1: ['cs2510', 'cs2511', 'cs3200', 'phil1115', 'phil2330'],
    summer1: [],
    fall2: ['cs1210', 'phil4515', 'phil4516', 'cs3500', 'cs3501'],
    spring2: ['coop3945'],
    summer2: ['coop3945'],
    fall3: ['phil1145', 'cs3000', 'cs3001', 'cs2800'],
    spring3: ['coop3945'],
    summer3: ['coop3945'],
    fall4: ['cs3800', 'phil5010', 'comm2105', 'phil2001'],
    spring4: ['cs4500', 'phil1271', 'engw3315', 'cs4100'],
    summer4: []
};

// Component to display classes for a single semester and add/remove classes
function SemesterClasses({ semester, classes, addClass, removeClass }) {
    const [classInput, setClassInput] = useState('');

    const handleAddClass = () => {
        if (classInput.trim()) {
            addClass(semester, classInput.trim());
            setClassInput(''); // Clear input field
        }
    };

    const handleRemoveClass = () => {
        if (classInput.trim()) {
            removeClass(semester, classInput.trim());
            setClassInput(''); // Clear input field
        }
    };

    return (
        <Paper 
            elevation={3}
            style={{
                padding: '10px',
                margin: '20px',
                textAlign: 'center',
                width: '200px',
                height: '300px'
            }}
        >
            <p><strong>{semester}</strong></p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
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
            <div style={{ marginTop: '10px' }}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleAddClass} 
                    style={{ marginRight: '5px' }}
                >
                    Add
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleRemoveClass}
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

    // Function to add a new class to a specific semester
    const addClass = (semester, newClass) => {
        setSemesterData((prevData) => ({
            ...prevData,
            [semester]: [...prevData[semester], newClass]
        }));
    };

    // Function to remove a class from a specific semester
    const removeClass = (semester, classToRemove) => {
        setSemesterData((prevData) => ({
            ...prevData,
            [semester]: prevData[semester].filter((classItem) => classItem !== classToRemove)
        }));
    };

    return (
        <div>
            <NavBarButton />
            <div className="table-container">
                <table>
                    <tbody>
                        <tr>
                            <td><SemesterClasses semester="fall1" classes={semesterData.fall1} addClass={addClass} removeClass={removeClass} /></td>
                            <td><SemesterClasses semester="spring1" classes={semesterData.spring1} addClass={addClass} removeClass={removeClass} /></td>
                            <td><SemesterClasses semester="summer1" classes={semesterData.summer1} addClass={addClass} removeClass={removeClass} /></td>
                        </tr>
                        <tr>
                            <td><SemesterClasses semester="fall2" classes={semesterData.fall2} addClass={addClass} removeClass={removeClass} /></td>
                            <td><SemesterClasses semester="spring2" classes={semesterData.spring2} addClass={addClass} removeClass={removeClass} /></td>
                            <td><SemesterClasses semester="summer2" classes={semesterData.summer2} addClass={addClass} removeClass={removeClass} /></td>
                        </tr>
                        <tr>
                            <td><SemesterClasses semester="fall3" classes={semesterData.fall3} addClass={addClass} removeClass={removeClass} /></td>
                            <td><SemesterClasses semester="spring3" classes={semesterData.spring3} addClass={addClass} removeClass={removeClass} /></td>
                            <td><SemesterClasses semester="summer3" classes={semesterData.summer3} addClass={addClass} removeClass={removeClass} /></td>
                        </tr>
                        <tr>
                            <td><SemesterClasses semester="fall4" classes={semesterData.fall4} addClass={addClass} removeClass={removeClass} /></td>
                            <td><SemesterClasses semester="spring4" classes={semesterData.spring4} addClass={addClass} removeClass={removeClass} /></td>
                            <td><SemesterClasses semester="summer4" classes={semesterData.summer4} addClass={addClass} removeClass={removeClass} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
