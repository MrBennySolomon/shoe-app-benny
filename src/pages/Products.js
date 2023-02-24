/* eslint-disable react-hooks/exhaustive-deps */

import React , { useRef, useEffect, useState }from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MainNavigation.modules.css';
import API from '../utils/api';

const Products = ({data, setData}) => {
  const [arrayIds, setArrayIds] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const navigate = useNavigate();

  const inputDescRef = useRef();
  const inputPriceRef = useRef();
  const inputImgRef = useRef();

  let fetchData;

  if (data) fetchData = async () => setArrayIds(Object.keys(await data));
 
  useEffect(() => {
    fetchData();
  }, []);

  const addHandler = () => {
    setIsAddMode(true);
  };

  const clickHandler = () => {
    API.addShoe({imgUrl: inputImgRef.current.value, description: inputDescRef.current.value,price: inputPriceRef.current.value});
    navigate('/');
    navigate(0);
    setIsAddMode(false);
  }
  
  return (
    <div className='flex'>
      <h1>Shoes Page <span><button onClick={addHandler} className='btn-add'> + </button></span></h1>
      {isAddMode && 
        <>
          <input ref={inputImgRef} type='text' placeholder='imgUrl'/>
          <input ref={inputDescRef} type='text' placeholder='description'/>
          <input ref={inputPriceRef} type='number' placeholder='price'/>
          <button onClick={clickHandler}>Done</button>
        </>
      }
      <div className='scroll'>
        {data && arrayIds.map((id) => <Link key={id} to={`/shoes/${id}`}><img 
          key={id} 
          alt={data[id]?.description}
          src={data[id]?.imgUrl}
          width='100%'
          /></Link>)}
      </div>
    </div>
  )}

export default Products;

// const fetchData = async () => {
    //   const response = await API.getShoes().then(setData(response));
    // }
    
    //API.editShoes('Nike for men', 'imgUrl*https://lh3.googleusercontent.com/0XSqTkNbLKY8sUw3zcejvjQKO5oH_ob4jBrDUl2f8nHHCy-3OKllX0cD8bbTN6YOMwD53uJQT3td9-fHwXcMdluR9egSZEKvkwspLSc4KxuB0QJ6pbNk2H3FFknP_e3DeGZQEnk90l22gCxEymF7x5_yDMC0QS1NJUnND3fV_w_n4RSw5dhfzYqRRPXBhtoB6iXgoxgXi20jorZwBcyoi2WJvhOG3O4v4nxqPf28FgVCCXcFzGEqAk26S_Tz2A69MmNwURNXBzSNkf03cIdaFNC7qy1cWrsZCPrdLkMX92gSt9DLYb_tit76gYS-3Q_EPECMm_Wy_kEJc2otEK1HcfpKjehQwu_0-LQuEgvGjHU9NprYu_c7Quc0Pb0AoIKlVUwEI_SOekROV7KT11o2bkjvmkz6n69nMacepHbtREeiB7nGmVM5IniN5lWANB5qQipcs85NGLZSVYyzsz7dSgMuqorR2IYHSAg6Hi22wh2uMYkEkFhtXYmcvirJpyG0jIxT_UvbKJkAtUoHibjAMbExO5zsQrpv-G3G_5mF3FI0BH035T9nGxa8d3gHC3xk1jPJYESGmiibHqObEHyiJbC4VBl3YcbHN-dTtABbysyfwloblenvvqTr0tLLUCgxTTSl7rgVJ4uMeA5DVfMhK3C6bLP1FWenPsxc9APwNnMNS5auSwmmjM0Qs0pg-bpDj9SCzxYExuLDqsY9PQPf9ze66piSXhObvTBHHXvzGjnBsKjm97q998c4dcVgazz6tgQy8leTWoOvLJzW244cHARQFkv1pl2BxQjAc3RCZJFtGykxLV8XqJ3ASgAEY_7_PC2TcLe8ymD1BOphCd2et6t5lxYZzD6hjXSzR3UMMVbarD6BmyRIgyC0Gpfq5CA84q2TqX4jAGL0l56tAMInfqXcRQFA_cLAm0QC_h__mKmX=w513-h340-no?authuser=0');
    //API.deleteShoes('Nike for women');
    // API.addShoes({
    //   imgUrl: '123.com',
    //   description: '123_desc',
    //   price: 100
    //   });