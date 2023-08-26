import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme, locale) => ({
    card: {
        [theme.breakpoints.up('xl')]: {
            width: '100%', // Add 'px' after the numeric value
            height: '490px', // Add 'px' after the numeric value
            perspective: '1000px',
        },
        [theme.breakpoints.down('xl')]: {
            width: '100%', // Add 'px' after the numeric value
            height: '400px', // Add 'px' after the numeric value
            perspective: '1000px',
        },
        [theme.breakpoints.down('lg')]: {
            width: '100%', // Add 'px' after the numeric value
            height: '300px', // Add 'px' after the numeric value
            perspective: '1000px',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%', // Add 'px' after the numeric value
            height: '300px', // Add 'px' after the numeric value
            perspective: '1000px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%', // Add 'px' after the numeric value
             height: '300px', // Add 'px' after the numeric value
            perspective: '1000px',
        },
    },
    cardInner: {
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.8s',
    },
    cardInnerFlipped: {
        transform: 'rotateY(180deg)',
    },
    cardFront: {
        position: 'absolute',
        width: '100%',
        color:'#fff',
        height: '100%',
        fontSize:'30px',
        backfaceVisibility: 'hidden',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',  // Add box shadow
    },
    cardBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        color:'#fff',
        fontSize:'23px',
        backgroundColor:'#1E396C',
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center', 
        textAlign:'center', // Add box shadow
    },
    flipContainer: {
        width: '100%',
        height: '100%',
        perspective: '1000px',
        '&:hover $cardInner': {
            transform: 'rotateY(180deg)',
        },
    },
    frontContent:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center', 
    },
    backContent:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center', 
    }
}));
const FlipBox = ({ frontContent, backContent, backgroundImage }) => {
    const classes = useStyles();
    const [isFlipped, setIsFlipped] = useState(false);

    // const handleClick = () => {
    //     setIsFlipped(!isFlipped);
    // };

    return (
        <div className={classes.card}>
            <div className={classes.flipContainer} >
                <div className={`${classes.cardInner} ${isFlipped ? classes.cardInnerFlipped : ''}`}>
                    <Card
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                        }}
                        className={classes.cardFront}
                    >
                        <CardContent className={classes.frontContent}>{frontContent}</CardContent>
                    </Card>
                    <Card className={classes.cardBack}>
                        <CardContent className={classes.backContent}>{backContent}</CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FlipBox;
