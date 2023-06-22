import React from 'react';
import { Typography, Paper, Box } from '@material-ui/core';
import Resume from '../../settings/resume.json';

export const AboutSection = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        About
      </Typography>
      <Paper component="section" elevation={3} square>
        <Box p={4}>
          <Typography variant="body1" component="p" gutterBottom style={{ fontWeight: 300 }}>
            {Resume.basics.description}
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" component="p" gutterBottom style={{ fontWeight: 300 }}>
              {Resume.basics.summary}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
