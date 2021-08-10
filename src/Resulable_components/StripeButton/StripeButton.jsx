import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const totalPrice=price*100;
    const publishedKey="pk_test_51JMwygSFDPp2JC0HnZz8i9nYTKly88L9hFlFDCTuOaahIRAQDLtfqz0aD3McebKDvATByNjvZnOFH7XhBCPtiTvC00AQKci8bg";

    const onToken=token=>{
        alert('Payment Successful')
    }

    return ( 
        <StripeCheckout
        label="Pay Now"
        name="PROTO-SHOP Ltd."
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={totalPrice}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishedKey}
        />

     );
}
 
export default StripeCheckoutButton;