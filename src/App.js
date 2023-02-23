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

  function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        await API.getShoes().then((res) => setData(res));
      }
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

  return (
    <>
      <RouterProvider router={router} />;
    </>
  )
}

export default App;
