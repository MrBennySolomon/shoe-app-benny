import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Product = ({data}) => {
  const params = useParams();
  const item = data.filter((item) => item.id === params.id);
  return (
    <>
      <p>{item[0].description}</p>
      <p>{item[0].price + ' NIS'}</p>
      <p><Link to='/shoes'>back</Link></p>
      <img 
        key={item[0].id} 
        alt={item[0].description + ' ' + item[0].price}
        src={item[0].imgUrl}
        width='100%'
        
        />
      
    </>
  )
}

export default Product