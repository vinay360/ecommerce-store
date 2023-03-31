import React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from '@material-ui/core';
import AddressForm from './AddressForm';

const useStyles = makeStyles({
  billngInfo: {
    marginBottom: '15px',
  },
  shippingInfo: {
    marginBottom: '15px',
  },
});

const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const classes = useStyles();
  return (
    <Box m="30px auto">
      {/* BILLING FORM */}
      <Box>
        <Typography className={classes.billngInfo} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb="20px">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  'shippingAddress.isSameAddress',
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
          label="Same for Shipping Address"
        />
      </Box>

      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography className={classes.shippingInfo} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            values={values.shippingAddress}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
