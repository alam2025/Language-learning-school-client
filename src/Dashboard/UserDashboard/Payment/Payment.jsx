import React from 'react';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import useCart from '../../../hooks/useCart';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)
console.log(stripePromise);

const Payment = () => {
      const [selectCourse] = useCart();
      const price = selectCourse.reduce((sum, item) => (sum + item.price), 0).toFixed(2)
      // console.log(total);


      return (
            <div>
                  <SectionTitle heading={'Payment'} subHeading={'Please paid to countinue course'}></SectionTitle>

                  <div className=' my-container'>
                        <Elements stripe={stripePromise}>
                              <CheckoutForm price={price} courses={selectCourse}></CheckoutForm>
                        </Elements>

                  </div>

            </div>
      );
};

export default Payment;