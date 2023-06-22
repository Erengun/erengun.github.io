import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp'; // Import GetApp icon

const useStyles = makeStyles((theme) => ({
  svgHover: {
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:focus': {
      transform: 'scale(1.1)',
    },
    transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.13, 2)',
    transform: 'scale(1)',
    overflow: 'visible !important',
  },
}));

export const DownloadResumeIcon = () => {
  const classes = useStyles();

  return (
    // Use GetAppIcon instead of the SVG element
    <GetAppIcon className={classes.svgHover} />
  );
};
