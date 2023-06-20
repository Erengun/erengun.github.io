import { React, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Box, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import Resume from '../../settings/resume.json';

const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: '100vh',
		minWidth: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.palette.background.default,
	},
	leftSection: {
		flex: 1,
	},
	rightSection: {
		flex: 1,
	},
}));

export const AboutSection = () => {
	const classes = useStyles();
	const [expandedExperience, setExpandedExperience] = useState(null);

	const handleExperienceClick = (index) => {
	  setExpandedExperience(index === expandedExperience ? null : index);
	};

	return (
		<Container component="main" className={classes.container} maxWidth="md" fullWidth>
			<Typography variant="h2" component="h1" gutterBottom>
				About
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				{Resume.basics.description}
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				{Resume.basics.summary}
			</Typography>

			<Box mt={4}>
				<Typography variant="h4" component="h2" gutterBottom>
					Experience
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<List>
							{Resume.work.map((experience, index) => (
								<ListItem button key={index} onClick={() => handleExperienceClick(index)}>
									<ListItemText primary={`${experience.company}`} />
								</ListItem>
							))}
						</List>
					</Grid>
					<Grid item xs={12} sm={8}>
						{Resume.work.map((experience, index) => (
							<Box key={index} mb={2} style={{ display: expandedExperience === index ? 'block' : 'none' }}>
								<Typography variant="h6" component="h3" gutterBottom>
									{experience.position} at {experience.company}
								</Typography>
								<Typography variant="body1" component="p" gutterBottom>
									{experience.startDate} - {experience.endDate || 'Present'}
								</Typography>
								<Typography variant="body1" component="p" gutterBottom>
									{experience.summary}
								</Typography>
							</Box>
						))}
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};
