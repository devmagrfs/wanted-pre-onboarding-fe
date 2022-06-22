import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Feed from '../components/Feed';
import Header from '../components/Header';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

function Main() {
  const [feeds, setFeeds] = useState([]);

  const getFeed = async () => {
    const apiFeed = await axios.get('http://localhost:3000/data/feedSample.json');
    setFeeds(apiFeed.data.feeds);
  }

  useEffect(() => {
    getFeed();
  }, [])

  return(
    <>
      <Header />
      <MainContainer>
        {feeds.map((item) => {
          return (
            <Feed
              id={item.id}
              nickname={item.nickname}
              img={item.img}
              likes={item.likes}
              key={item.id}
            />
          )
        })}
      </MainContainer>
    </>
  )
}

export default Main;