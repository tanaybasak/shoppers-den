import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("PaymentSuccessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="crwn clothing"
      billingAddress=""
      shippingAddress=""
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"

      token={onToken}
      stripeKey ={process.env.STRIPE_PUBLISHER_KEY}
    />
  );
};

export default StripeCheckoutButton;
