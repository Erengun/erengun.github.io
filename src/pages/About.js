import { React, forwardRef } from 'react';
import { Container } from '@material-ui/core';
import { AboutSection } from '../components/content/AboutSection';
import { ExperienceSection } from '../components/content/ExperienceSection';
import { useStyles } from '../components/content/AboutStyles';
import Resume from '../settings/resume.json';
import { Helmet } from 'react-helmet';

export const About = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <>
    <Helmet>
      <meta
        name="description"
        content={Resume.basics.description}
      />
    </Helmet>
    <Container component="main" className={classes.container} maxWidth="md" ref={ref}>
      <AboutSection />
      <ExperienceSection />
    </Container>
    </>
  );
});
