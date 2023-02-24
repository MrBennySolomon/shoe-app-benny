/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import Root from './pages/Root'
import Product from './pages/Product'
import './App.css';
import API from './utils/api';
// import axios from 'axios'

  function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => await API.getShoes().then((res) => {
        setData(res);
        setIsLoading(false);
      });
      fetchData();
    },[]);

    const router = createBrowserRouter([
    {
      path: '/', 
      element: <Root/>,
  
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/shoes', element: <ProductsPage data={data}/>},
      {path: '/shoes/:id', element: <Product data={data}/>},
    ],
    },
  ]);

  return(
    <>
      <RouterProvider router={router} />
      {isLoading && <span className="loader">Load&nbsp;ng</span>}
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