import React from 'react';
import {
  Dialog,
  Container,
  List,
  ListItem,
  FormGroup,
  Typography,
  Button,
  IconButton,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ApplyForFinanceModal = ({
  open,
  onClose,
  checkBoxOne,
  checkBoxTwo,
  checkBoxThree,
  checkBoxFour,
  t,
  onsubmit,
  classes,
  handleCheckBoxOne,
  handleCheckBoxTwo,
  handleCheckBoxThree,
  handleCheckBoxFour,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={classes.modal}
      TransitionComponent={Transition}
    >
      <Container sx={{ position: "relative" }}>
        <List className={classes.modalcontainer}>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.ModalIconButton}
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <ListItem>
            <FormGroup>
              <Typography className={classes.modaltittle}>
                {t("home_modal_tittle")}
              </Typography>
              <FormControlLabel
                className={classes.modalcheckbox}
                control={
                  <Checkbox
                    checked={checkBoxOne}
                    onChange={handleCheckBoxOne} // Use handleCheckBoxOne here
                    color="primary"
                  />
                }
                label={
                  <span className={classes.modalcheckbox}>
                    {t("home_modal_checkbox1")}
                  </span>
                }
              />
              {/* ... rest of the code ... */}
            </FormGroup>
          </ListItem>
        </List>
      </Container>
    </Dialog>
  );
};

export default ApplyForFinanceModal;
