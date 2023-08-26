import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Grid, Box, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TeamModal = ({ modalimage, modalTitle, memberPosition, memberDescriptions, open, onClose }) => {
    const classes = useStyles();
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            keepMounted
            fullWidth={true}
            maxWidth={'lg'}
            TransitionComponent={Transition}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
        >
            <DialogTitle disableTypography>
                <IconButton style={{position:'absolute'}} aria-label="Close" color="inherit" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                            <Image  width={100} height={100} className={classes.TeamImage} src={modalimage} alt="modalimage" />
                            <Typography className={classes.Teamname}>{modalTitle}</Typography>
                            <Typography className={classes.Memberpostistion}>{memberPosition}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ul>
                            {memberDescriptions.map((description, index) => (
                                <li key={index}>
                                    <Typography className={classes.Discription}>{description}</Typography>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>{/* Actions or buttons related to the dialog */}</DialogActions>
        </Dialog>
    );
};

export default TeamModal;
const useStyles = makeStyles((theme) => ({
    Teamname:{
        fontSize: '20px',
        color: '#1E396C',
        textAlign: 'center',
    },
    Memberpostistion:{
        fontSize: '16px',
        color: '#1E396C',
        textAlign: 'center',
    },
    Discription: {
        color: '#1E396C',
        fontSize: '16px',
        lineHeight:'30px'
    },
    TeamImage:{
        width:'auto',
        height:"auto"
    }
}));
