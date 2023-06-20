import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box, Grid, List, ListItem, ListItemText, Card, CardContent, Paper, TextField, Chip } from '@material-ui/core';
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
	chip: {
		margin: theme.spacing(0.5),
	},
}));

export const AboutSection = () => {
	const classes = useStyles();
	const [expandedExperience, setExpandedExperience] = useState(0);

	const handleExperienceClick = (index) => {
	  setExpandedExperience(index);
	};

	return (
		<Container component="main" className={classes.container} maxWidth="md">
			<Paper component="section" elevation={3} square>
				<Box p={4}>
					<Typography variant="h2" component="h1" gutterBottom>
						About
					</Typography>
					<Typography variant="body1" component="p" gutterBottom>
						{Resume.basics.description}
					</Typography>
					<Typography variant="body1" component="p" gutterBottom>
						{Resume.basics.summary}
					</Typography>
				</Box>
			</Paper>

			<Box mt={4} mb={4}>
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
								<Card>
									<CardContent>
										<Typography variant="h6" component="h3" gutterBottom>
											{experience.position} at {experience.company}
										</Typography>
										<Typography variant="body1" component="p" gutterBottom>
											{experience.startDate} - {experience.endDate || 'Present'}
										</Typography>
										<Typography variant="body1" component="p" gutterBottom>
											{experience.summary}
										</Typography>
										<TextField
											fullWidth
											multiline
											variant="outlined"
											label="Highlights"
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
		</Container>
	);
};
