import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubKey = "pk_test_omSDPuqNfRFOT2xlnCfLFIvd";
  const onToken = (token) => {
    alert("Suc!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWW clth."
      billingAddress
      shippingAddress
      image=""
      description={`Your time is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      onToken={onToken}
      stripeKey={pubKey}
    />
  );
};

export default StripeCheckoutButton
