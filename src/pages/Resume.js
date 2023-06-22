import React from 'react';
import ResumeData from '../settings/resume.json';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, ListItem, ListItemText, List, Divider, AppBar, Toolbar } from '@material-ui/core';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import { Helmet } from 'react-helmet';
import { FirstName } from '../utils/getName';
import { LogoLink } from '../components/logo/LogoLink';


const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  root: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(12),
  },
  sectionTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

function Section({ title, children }) {
  const classes = useStyles();

  return (
    <Box mt={4} mb={4}>
      <Typography variant="h5" component="h2" className={classes.sectionTitle}>
        {title}
      </Typography>
      {children}
      <Divider className={classes.divider} />
    </Box>
  );
}

function ResumeItem({ title, subtitle, date, description }) {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem} alignItems="flex-start">
      <ListItemText
        primary={
          <>
            <Typography variant="h6" component="span">
              {title}
            </Typography>
            {' – '}
            <Typography variant="subtitle1" component="span">
              {subtitle}
            </Typography>
          </>
        }
        secondary={
          <>
            <Typography variant="body2" component="span" color="textSecondary">
              {date}
            </Typography>
            {description && (
              <Typography variant="body1" component="p">
                {description}
              </Typography>
            )}
          </>
        }
      />
    </ListItem>
  );
}

export default function Resume() {
  const {
    basics,
    work,
    volunteer,
    education,
    awards,
    skills,
    interests,
  } = ResumeData;
  const classes = useStyles();

  return (
    <>
    <AppBar position="fixed" color="transparent" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <LogoLink />
          <SocialIcons />
          <ThemeToggle />
        </Toolbar>
      </AppBar>
    <div className={classes.root}>
      <Helmet>
        <title>{`Resume - ${FirstName}`}</title>
        <meta
          name="description"
          content={`Resume for ${FirstName}, ${basics.label}`}
        />
      </Helmet>
      <Typography variant="h3" component="h1" gutterBottom>
        {basics.name}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {basics.label}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Email: {basics.email}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Phone: {basics.phone}
      </Typography>

      <Section title="Work Experience">
        <List>
          {work.map((job, index) => (
            <ResumeItem
              key={index}
              title={job.position}
              subtitle={job.company}
              date={`${job.startDate} – ${job.endDate}`}
              description={job.summary}
            />
          ))}
        </List>
      </Section>

      <Section title="Volunteer Experience">
        <List>
          {volunteer.map((vol, index) => (
            <ResumeItem
              key={index}
              title={vol.position}
              subtitle={vol.organization}
              date={`${vol.startDate} – ${vol.endDate}`}
              description={vol.summary}
            />
          ))}
        </List>
      </Section>

      <Section title="Education">
        <List>
          {education.map((edu, index) => (
            <ResumeItem
              key={index}
              title={`${edu.studyType} in ${edu.area}`}
              subtitle={edu.institution}
              date={`${edu.startDate} – ${edu.endDate}`}
            />
          ))}
        </List>
      </Section>

      <Section title="Awards">
        <List>
          {awards.map((award, index) => (
            <ResumeItem
              key={index}
              title={award.title}
              subtitle={award.awarder}
              date={award.date}
            />
          ))}
        </List>
      </Section>

      <Section title="Skills">
        <List>
          {skills.map((skill, index) => (
            <ResumeItem
              key={index}
              title={skill.name}
              subtitle={`Level: ${skill.level}`}
              description={`Keywords: ${skill.keywords.join(', ')}`}
            />
          ))}
        </List>
      </Section>

      <Section title="Interests">
        <List>
          {interests.map((interest, index) => (
            <ResumeItem
              key={index}
              title={interest.name}
              description={`Keywords: ${interest.keywords.join(', ')}`}
            />
          ))}
        </List>
      </Section>
    </div>
    </>
  );
}