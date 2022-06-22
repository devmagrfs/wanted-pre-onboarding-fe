import React, { useCallback, useRef } from 'react'
import styled from 'styled-components';
import { AiOutlineSmile } from 'react-icons/ai';

const commentList = [{
  id: '1',
  nickname: 'test1',
  content: 'test중1'
},
  {
    id: '2',
    nickname: 'test2',
    content: 'test중'
  }
]

const CommentContainer = styled.div`
  padding: 0.5rem 1rem;
`;

const CommentListContainer = styled.div`
  display: flex;
`;

const CommentInputBar = styled.div`
  display: flex;
  margin-top: 0.8rem;
  padding: 0.5rem 0rem;
  border-top: 0.2px solid gray;
  border-bottom: 0.2px solid gray;
`;

const CommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 0.5rem;

  > input {
    width: 80%;
  }

  > button {
    background: none;
    font-weight: bold;
    color: skyblue;
    cursor: pointer;
  }
`;

function Comment() {
  const commentRef = useRef();

  const commentPost = useCallback((e) => {
    e.preventDefault();
    commentRef.current.value = '';
  }, [])

  return (
    <CommentContainer>
      {commentList &&
      commentList.map((i) => {
        return (
          <CommentListContainer key={i.id}>
            <span style={{fontWeight: 'bold', marginRight: '1rem'}}>{i.nickname}</span>
            <span>{i.content}</span>
          </CommentListContainer>
        )
      })}

      <CommentInputBar>
        <AiOutlineSmile size={30} />
        <CommentForm onClick={commentPost}>
          <input
            type='text'
            placeholder='댓글달기...'
            ref={commentRef}
          />
          <button type='submit'>
            게시
          </button>
        </CommentForm>
      </CommentInputBar>
    </CommentContainer>
  )
}

export default Comment;
