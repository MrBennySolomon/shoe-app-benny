
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/MainNavigation.modules.css';

const Products = ({data}) => {
  
  return (
    <>
      <h1>Shoes Page</h1>

      {data.map((item) => <Link key={item.id} to={`/shoes/${item.id}`}><img 
        key={item.id} 
        alt={item.description + ' ' + item.price}
        src={item.imgUrl}
        width='300px'
        height='200px'
        /></Link>)}
    </>
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