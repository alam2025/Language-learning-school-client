import React from 'react';

const PopularClassCard = ({ item }) => {
      const {image}=item
    
      return (
            <div className="card w-96 bg-base-100 shadow-xl relative">
                  <figure><img src={image} alt="Shoes" /></figure>
                  <div className="card-body absolute z-10 bg-black bg-opacity-60">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                              <button className="btn btn-primary">Buy Now</button>
                        </div>
                  </div>
            </div>
      );
};

export default PopularClassCard;