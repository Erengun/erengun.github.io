import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Link, Tooltip, useMediaQuery, Zoom } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import { DownloadResumeIcon } from '../content/ResumeButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'absolute',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export const FooterText = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const content = (
    <>
      {!isMobile && (
        <Typography variant='body1'>
          <TextDecrypt text={' Download Resume'} />
        </Typography>
      )}
    </>
  );

  return (
    <Link
      color='inherit'
      underline='none'
      href='/path/to/your/resume' // Update this with the actual path to your resume file
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
      download
    >
      {isMobile ? (
        <Tooltip
          title={"Download Resume"}
          placement="right"
          TransitionComponent={Zoom}
        >
          <DownloadResumeIcon />
        </Tooltip>
      ) : (
        content
      )}
    </Link>
  );
};
