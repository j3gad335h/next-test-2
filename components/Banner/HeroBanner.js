import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Box, Button, Container, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    background: {
    
        [theme.breakpoints.up('xs')]: {
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          minHeight: '30vh',
          zIndex: -2,
        },
        [theme.breakpoints.up('sm')]: {
          minHeight: '40vh',
        },
        [theme.breakpoints.up('md')]: {
          minHeight: '79vh',
        },
        [theme.breakpoints.up('lg')]: {
          minHeight: '83vh',
        },
        [theme.breakpoints.up('xl')]: {
            minHeight: '86vh',
          },
    },
 
}));

function HeroBanner(props) {
    const { className, backgroundImage, children } = props;
    const classes = useStyles();

    const backgroundStyles = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <Box className={`${classes.background} ${className}`} style={backgroundStyles}>
             
               {children}
              
        </Box>
    );
}

HeroBanner.propTypes = {
    className: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default HeroBanner;
