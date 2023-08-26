import React from 'react'
import { IconButton, Icon, Snackbar } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
// import Alert from "@mui/material/Alert"

import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert  elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MuiSnackbar ({
    setResponse,
    visible,
    status,
    message,
    setResponseStatus,
    setResponseMessage,
  }) {
    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit">
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
    return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right",zindex:999999999 }}
        open={visible}
        autoHideDuration={6000}
        onClose={() => setResponse(false)}
        action={action}
      >
        <Alert
          onClose={() => setResponse(false)}
          severity={status == 1 ? "success" : "error"}
          sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    );
  }
  

