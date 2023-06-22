import React, { useState } from 'react';
import { Typography, Box, Grid, List, ListItem, ListItemText, Card, CardContent, TextField, Chip } from '@material-ui/core';
import Resume from '../../settings/resume.json';
import { useStyles } from './AboutStyles';
import { FirstName } from "../../utils/getName";
import { Helmet } from "react-helmet";

export const ExperienceSection = () => {
  const classes = useStyles();
  const [expandedExperience, setExpandedExperience] = useState(0);

  const handleExperienceClick = (index) => {
    setExpandedExperience(index);
  };

  return (
    <>
    <Helmet>
      <meta name="description" content="Experience details of the developer" />
      <meta property="og:description" content="Experience details of the developer" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`Experience - ${FirstName}`} />
      <meta name="twitter:description" content="Experience details of the developer" />
    </Helmet>
    <Box mt={4} mb={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <List>
            {Resume.work.map((experience, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleExperienceClick(index)}
                className={expandedExperience === index ? classes.listItemSelected : ''}
              >
                <ListItemText primary={`${experience.company}`} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={8}>
          {Resume.work.map((experience, index) => (
            <Box key={index} mb={2} style={{ display: expandedExperience === index ? 'block' : 'none' }}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {experience.position}
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom style={{ fontWeight: 300 }}>
                    {experience.startDate} - {experience.endDate || 'Present'}
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom style={{ fontWeight: 300 }}>
                    {experience.summary}
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    variant="outlined"
                    value={experience.highlights}
                    InputProps={{ readOnly: true }}
                  />
                  <Box mt={2}>
                    {experience.keywords.map((keyword, idx) => (
                      <Chip key={idx} label={keyword} className={classes.chip} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
    </>
  );
};
