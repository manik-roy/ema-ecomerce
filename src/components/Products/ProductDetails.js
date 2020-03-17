import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData';

const ProductDetails = () => {
  const [product, setProduct
  
  ] = useState({})
  const {id} = useParams()
  useEffect(()=>{
    const item = fakeData.find(id)
    setProduct(item)
  },[])

  console.log(product);
  

  return (
    <div>
      {id}
    </div>
  );
};

export default ProductDetails;
