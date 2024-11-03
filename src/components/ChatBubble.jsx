import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export default function ChatBubble({ 
  text = "Hello! How are you? I'm fine, thank you.", 
  bkgdColor = '#000000', 
  borderColor = "#ffffff", 
  textColor = '#ffffff',
  isAI = true // Determines if the bubble is from AI or user
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isAI ? 'flex-start' : 'flex-end', // Align bubbles based on sender
        margin: '5px 0', // Space between bubbles
        padding: '10px 10px', // Padding to create some space from edges
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: '70%', // Limit the width for better readability
          padding: '10px',
          borderRadius: '20px', // More rounded edges
          backgroundColor: bkgdColor,
          border: `1px solid ${borderColor}`,
          color: textColor,
          textAlign: 'left', // Align text to the left
          boxShadow: 'none',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: textColor,
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {text}
        </Typography>
      </Paper>
    </Box>
  );
}
