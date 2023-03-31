import { Box, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  grid: {
    gridColumn: 'span 4',
  },
  mb: {
    marginBottom: '15px',
  },
});

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const classes = useStyles();
  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: '15px' }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          className={classes.mb}
          variant="outlined"
          inputProps={{
            style: {
              height: '28px',
            },
          }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          className={classes.grid}
          variant="outlined"
          inputProps={{
            style: {
              height: '28px',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
