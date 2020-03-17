import React from 'react';
import {Link} from 'react-router-dom';
const ProductsItem = ({addItemToCart, product}) => {
  const {key, img, price} = product;

  return (
    <div className="single-product ml-5 pl-5">
    <div className="card mb-3 shadow" >
      <div className="row no-gutters">
        <div className="col-md-4 p-2">
          <img src={img} className="card-img" alt="..."/>
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title"><Link to={`product/${key}`}>asdfsd</Link></h5>
            <h5><small>By:Manik</small></h5>
            <div className="d-flex py-2">
              <div className="price pr-5">${price}</div>
              <div className="review pl-5">****</div>
            </div>
            <p className="card-text py-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button className="btn px-5" onClick={()=> addItemToCart(product)} >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductsItem;