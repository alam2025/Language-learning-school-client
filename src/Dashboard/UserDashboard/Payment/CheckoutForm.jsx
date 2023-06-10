import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxioseSequre';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';

const CheckoutForm = ({ price, courses }) => {
      const stripe = useStripe();
      const elements = useElements();
      const [axiosSecure] = useAxiosSecure()
      const [cardError, setCardError] = useState('')
      const [clientSecret, setClientSecret] = useState('')
      const { user } = useAuth()
      const [processing, setProcessing] = useState(false)
      const [transactionId, setTransactionId] = useState('')
      const [selectedCourse]= useCart()
      console.log(selectedCourse);


      useEffect(() => {
            // console.log(price);
            if (price > 0) {
                  axiosSecure.post('/create-payment-intent', { price })
                        .then(res => {
                              // console.log(res.data.clientSecret);
                              // console.log(res.data.clientSecret);
                              setClientSecret(res.data.clientSecret)
                        })
            }
      }, [price, axiosSecure]);

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

            setProcessing(true)

            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                  clientSecret,
                  {
                        payment_method: {
                              card: card,
                              billing_details: {
                                    name: user?.displayName || 'Anonymous',
                                    email: user?.email || 'unknown'
                              }
                        }
                  }
            )

            if (confirmError) {
                  console.log(confirmError);
            }
            console.log('payment :',paymentIntent);
           
            setProcessing(false)



            if (paymentIntent.status === 'succeeded') {
                  setTransactionId(paymentIntent.id)
                  const transactionId = paymentIntent.id;
                  
                  const payment = {
                        email: user?.email,
                        price,
                        name: user?.displayName,
                        transactionId,
                        date: new Date(),
                        // courseItems: selectedCourse.map(menu => menu.menuItemId),
                        quantity: courses?.length,
                        status: 'pending',
                        courseItems: courses?.map(item => item._id),
                        coursesName: courses?.map(item => item.name)
                  }
                  axiosSecure.post('/payments', payment)
                        .then(res => {
                              // console.log(res);
                            
                              console.log(res.data);
                        })
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
                        <button className=' btn btn-info mt-6' type="submit" disabled={!stripe}>
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