/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import Root from './pages/Root';
import Product from './pages/Product'
import './App.css';
import API from './utils/api';

  function App() {
    const [data, setData] = useState({});

    async function fetchShoes() {
        try {
          await API.getShoes().then((res) => {
            console.log('res', res)
            setData(res);
            
          });
        } catch (error) {
          console.error("Error retrieving shoes:", error);
        }
      }

      useEffect(() => {
        fetchShoes();
      }, []);

    const router = createBrowserRouter([
    {
      path: '/', 
      element: <Root/>,
  
    children: [
      {path: '/', element: <HomePage data={data}/>},
      {path: '/shoes', element: <ProductsPage data={data} setData={fetchShoes}/>},
      {path: '/shoes/:id', element: <Product data={data} setData={fetchShoes}/>}
    ]
    }
  ]);

  return(
    <>
      <RouterProvider router={router} />
    </>
    )
}

export default App;

//API.deleteShoes('nike women');
    //https://shoes-app-benny-default-rtdb.europe-west1.firebasedatabase.app/shoes.json
  //   const db = axios.create({
  //     //baseURL: 'https://63f76e57e40e087c958eadaa.mockapi.io/shoes'
  //     baseURL: ''
  // })
  // db.delete(`https://shoes-app-benny-default-rtdb.europe-west1.firebasedatabase.app/shoes/0.json}`);