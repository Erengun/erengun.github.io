import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
	  minHeight: '100vh',
	  minWidth: '100vw',
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: theme.palette.background.default,
	},
	chip: {
	  margin: theme.spacing(0.5),
	},
	listItemSelected: {
	  backgroundColor: theme.palette.action.selected,
	  borderLeft: `4px solid ${theme.palette.primary.main}`,
	},
	card: {
	  height: '100%',
	},
  }));  