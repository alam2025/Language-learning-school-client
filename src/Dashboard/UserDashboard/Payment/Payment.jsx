import React from 'react';
import SectionTitle from '../../../pages/Shared/SectionTitle';
import useCart from '../../../hooks/useCart';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCourses from '../../../hooks/useCourses';
import { useParams } from 'react-router-dom';

const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)
// console.log(stripePromise);

const Payment = () => {
      const [courses] = useCourses()
      const [selectCourse]= useCart()

      const {id}= useParams();
      const paymentCourse= selectCourse.find(course=>course._id === id);
    
      const price = parseFloat(paymentCourse?.price);
      // console.log(paymentCourse);
      


      return (
            <div>
                  <SectionTitle heading={'Payment'} subHeading={'Please paid to countinue course'}></SectionTitle>

                  <div className=' my-container'>
                        <Elements stripe={stripePromise}>
                              <CheckoutForm price={price} selectCourse={paymentCourse} courses={courses}></CheckoutForm>
                        </Elements>

                  </div>

            </div>
      );
};

export default Payment;