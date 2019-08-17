import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from './components/Layout';
import SelectedProduct from './components/SelectedProduct';
import Cart from './components/Cart';
import Description from './components/Description';
import styled from 'styled-components';
import Spinner from './components/Spinner';

import './App.css';
import Specifications from './components/Specifications';

const API = 'https://jsonplaceholder.typicode.com/albums';

export const DescriptionTitle = ({ title, customStyle }) => {
  const Title = styled.h2`
    font-size: 16px;
    ${customStyle}
  `;
  return (
    <Title>{title}</Title>
  )
}

function App() {
  const [data, setData] = useState({ sampleData: [] });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(API);
        
        if (cancel) {
          return;
        }
        const reducedResult = result.data.filter(a => a.userId === 1);
        setData(result.data);
      } catch (error) {
        setIsError(true);
        console.log('Something went wrong');
      }

      setIsLoading(false);
    };

    fetchData();
    return () => {
      cancel = true;
    }
  },[setData]);

  console.log(data)
  return (
    <Layout>{isLoading ? <Spinner/> : (
      <>
        <SelectedProduct />
        <Cart />
        <Description />
        <Specifications />
      </>
    )
    }
    </Layout>
  );
}

export default App;
