import React from "react";
import CustomButton from "./CustomButton";

const Payment = () => {
  const openPaymentSheet = async () => {};

  /* 4:07:07 */
  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-10"
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
