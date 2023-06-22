import React, { useRef } from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { About } from './About';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { ScrollIndicator } from '../components/footer/ScrollComponent';
import { FirstName } from "../utils/getName";
import Resume from "../settings/resume.json";
import { Helmet } from "react-helmet";

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

  const handleScrollIndicatorClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        <Helmet>
          <title>{`${Resume.basics.x_title} ${FirstName}`}</title>
          <meta
            name="description"
            content={`a ${Resume.basics.job}`}
          />
        </Helmet>
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
          <ScrollIndicator onClick={handleScrollIndicatorClick} />
        </div>
      </div>
      <About ref={aboutRef} />
    </>
  );
};