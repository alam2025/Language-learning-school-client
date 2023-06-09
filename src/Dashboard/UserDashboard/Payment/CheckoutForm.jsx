import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
      const stripe = useStripe();
      const elements = useElements();
      const [cardError, setCardError] = useState('')

      const handleSubmit = async (event) => {
            event.preventDefault();
            setCardError('')

            if (!stripe || !elements) {
                  return
            }
            const card = elements.getElement(CardElement);
            if (card == null) {
                  return
            }
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card
            })

            if (error) {
                  console.log('error : ', error);
                  setCardError(error.message)
            }
            else {
                  setCardError('')
                  console.log('PaymentMethod : ', paymentMethod);
            }

      };
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <CardElement
                              options={{
                                    style: {
                                          base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                        />
                        <button type="submit" disabled={!stripe}>
                              Pay
                        </button>
                  </form>
                  {
                        cardError && <p className=' text-red-500 text-center'>{cardError}</p>
                  }
            </div>
      );
};

export default CheckoutForm;