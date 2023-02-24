import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Product = ({data}) => {
  const params = useParams();
  const item = data.find((item) => item.id === params.id);
  return (
    <>
      <p>{item.description}</p>
      <p>{item.price + ' NIS'}</p>
      <p><Link to='/shoes'>back</Link></p>
      <img 
        key={item.id} 
        alt={item.description + ' ' + item.price}
        src={item.imgUrl}
        width='100%'
        
        />
      
    </>
  )
}

export default Product