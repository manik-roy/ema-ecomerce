import React from 'react';

const Cart = ({cart}) => {
  const totalPrice = cart.reduce((total, product) => total + product.price,0)
  return (
    <div className="col-3">
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Order Summary</h5>
        <h6 className="card-subtitle mb-2 text-muted">Items ordered: {cart.length} </h6>
        <h6 className="card-subtitle mb-2 text-muted">Total Price: {totalPrice.toFixed(2)} </h6>
        <p className="card-text">Shipping-Cost: $15</p>
        <button className="btn px-5">Review your order</button>
      </div>
    </div>
  </div>
  );
};

export default Cart;