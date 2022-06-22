import React from 'react';
import styled from 'styled-components';

const nickname = 'wanted';

const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: red;

  @media screen and (min-width: 576px) {
    max-width: 575px;
  }
`;

const FeedProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem;

  .profile-nickname {
    font-weight: bold;
  }
`;

const FeedProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: gray;
  margin-right: 0.3rem;
`;

const FeedImg = styled.img`
  width: auto;
  height: 100%;
`;

function Feed() {
  return (
    <FeedContainer>
      <FeedProfile>
        <FeedProfileImg />
        <span className='profile-nickname'>{nickname}</span>
      </FeedProfile>
      <FeedImg />
      Feed 내용내용내용
    </FeedContainer>
  )
}

export default Feed;
