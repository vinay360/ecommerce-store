import React from 'react';
import { Box, makeStyles, TextField, useMediaQuery } from '@material-ui/core';
import { getIn } from 'formik';

let isNonMobile = false;
const useStyles = makeStyles({
  span2: {
    gridColumn: 'span 2',
  },
  span4: {
    gridColumn: 'span 4',
  },
  onefr: {
    gridColumn: '1fr',
  },
  box: {
    '& div': { gridColumn: isNonMobile ? undefined : 'span 3' },
  },
});

const AddressForm = ({
  type,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  const classes = useStyles();
  isNonMobile = useMediaQuery('(min-width:600px)');
  // these functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gridGap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
    >
      <TextField
        fullWidth
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName('firstName')}
        error={formattedError('firstName')}
        helperText={formattedHelper('firstName')}
        variant="outlined"
        className={classes.span2}
        inputProps={{
          style: {
            height: '28px',
          },
        }}
      />
      <TextField
        fullWidth
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName('lastName')}
        error={formattedError('lastName')}
        helperText={formattedHelper('lastName')}
        className={classes.span2}
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
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName('country')}
        error={formattedError('country')}
        helperText={formattedHelper('country')}
        className={classes.span4}
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
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName('street1')}
        error={formattedError('street1')}
        helperText={formattedHelper('street1')}
        className={classes.span2}
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
        label="Street Address 2 (optional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName('street2')}
        error={formattedError('street2')}
        helperText={formattedHelper('street2')}
        className={classes.span2}
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
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName('city')}
        error={formattedError('city')}
        helperText={formattedHelper('city')}
        className={classes.span2}
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
        label="State"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName('state')}
        error={formattedError('state')}
        helperText={formattedHelper('state')}
        className={classes.onefr}
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
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName('zipCode')}
        error={formattedError('zipCode')}
        helperText={formattedHelper('zipCode')}
        className={classes.onefr}
        variant="outlined"
        inputProps={{
          style: {
            height: '28px',
          },
        }}
      />
    </Box>
  );
};

export default AddressForm;
