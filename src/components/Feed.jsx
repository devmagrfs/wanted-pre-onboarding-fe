import React from 'react';
import styled from 'styled-components';

import { BiDotsHorizontalRounded, BiPaperPlane } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots, FaRegBookmark } from 'react-icons/fa';
import Comment from './Comment';


const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 576px) {
    max-width: 575px;
  }
`;

const FeedProfile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem;

  .profile-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      font-weight: bold;
    }
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
  width: 100%;
`;

const InstaUtil = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;

  > .util-container {
    display: flex;
    justify-content: space-between;
    width: 8rem;
  }
`;

const Likes = styled.p`
  padding: 0.5rem 1rem;
`;

function Feed({id, nickname, img, likes}) {
  return (
    <FeedContainer>
      <FeedProfile>
        <div className="profile-content">
          <FeedProfileImg />
          <span className='profile-nickname'>{nickname}</span>
        </div>
        <BiDotsHorizontalRounded size={30} />
      </FeedProfile>
      <FeedImg src={img} />
      <InstaUtil>
        <div className="util-container">
          <AiOutlineHeart size={30} />
          <FaRegCommentDots size={30} />
          <BiPaperPlane size={30} />
        </div>
        <FaRegBookmark size={30} />
      </InstaUtil>
      <Likes>좋아요 {likes} 개</Likes>
      <Comment id={id} img={img} />
    </FeedContainer>
  )
}

export default Feed;
