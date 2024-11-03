import { Button } from '@mui/material';
import React from 'react';

var message

async function onClick(event) {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/courses");
        const data = await response.json();
        
        // Log the string directly from the backend
        console.log(data.courses); // Assuming data.courses is the string you want to log
    } catch (error) {
        console.error("Error fetching courses:", error);
    }
}

var apple = "hi"

export default function CourseDetails() {
    return (
        <Button onClick={onClick}>{apple}</Button>
    );
}