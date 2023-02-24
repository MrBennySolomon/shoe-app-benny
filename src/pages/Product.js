import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MainNavigation.modules.css';
import API from '../utils/api';

const Product = ({data, setData}) => {
  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const inputDescRef = useRef();
  const inputPriceRef = useRef();

  // useEffect(() => {
  //   navigate('/shoes');
  // }, [data]);



  const clickHandler = () => {
    API.editShoe({id: params.id,description: inputDescRef.current.value,price: inputPriceRef.current.value});
    setIsEditable(false);
  }

  const fetchShoes = async() => {
    await setData().then((res) => {
      navigate('/shoes');
      navigate(0);
    });
  }

  console.log('params.id', params.id)
  return (
    <>
    <div className='shoes-data'>
      <p>{data[params.id].description}</p>
      <p>{data[params.id].price + ' NIS'}</p>
      <p><Link to='/shoes'>back</Link></p>
    </div>
    <div className='btn-container'>
      <button onClick={() => {API.removeShoes(params.id); fetchShoes()}}>DELETE</button>
      <button onClick={() => setIsEditable(true)}>EDIT</button>
    </div>
    {isEditable && 
      <>
        <input ref={inputDescRef} type='text' placeholder='description'/>
        <input ref={inputPriceRef} type='number' placeholder='price'/>
        <button onClick={clickHandler}>Done</button>
      </>}
    <img 
      key={data[params.id].id} 
      alt={data[params.id].description}
      src={data[params.id].imgUrl}
      width='100%' 
      />
    </>
  )
}

export default Product