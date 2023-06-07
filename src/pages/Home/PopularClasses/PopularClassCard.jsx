import React from 'react';

const PopularClassCard = ({ item }) => {
      const { image ,name,instructor,price} = item

      return (
            // <div className="card w-96 bg-base-100 shadow-xl ">
            //       <figure><img src={image} alt="Shoes" /></figure>
            //       <div className="card-body ">
            //             
            //             <p>If a dog chews shoes whose shoes does he choose?</p>
            //             <div className="card-actions justify-end">
            //                   <button className="btn btn-primary">Buy Now</button>
            //             </div>
            //       </div>
            // </div>
            <div className= ' border shadow-md rounded-md'>
                  <figure> <img src={image} alt="" className=' rounded-t-md' /></figure>
                  <div className=' p-6'>
                        <h2 className="card-title">{name}</h2>
                        <p><span>Instructor : </span> {instructor}</p>
                        <p><span>Price : </span> ${price}</p>
                  </div>
            </div>
      );
};

export default PopularClassCard;