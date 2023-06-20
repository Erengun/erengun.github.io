import React, { useRef } from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { AboutSection } from '../components/content/About';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { ScrollIndicator } from '../components/footer/ScrollComponent';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  homeContainer: {
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
}));


export const Home = () => {
  const classes = useStyles();
  const aboutRef = useRef();

  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.root}>
          <DisplacementSphere />
          <LogoLink />
          <Content />
          <ThemeToggle />
          <Hidden smDown>
            <SocialIcons />
          </Hidden>
          <Hidden mdUp>
            <SpeedDials />
          </Hidden>
          <FooterText />
          <ScrollIndicator onClick={() => aboutRef.current.scrollIntoView()} />
        </div>
      </div>
      <AboutSection ref={aboutRef} />
    </>
  );
};
