import React, { useCallback, useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import { AiOutlineSmile } from 'react-icons/ai';


const CommentContainer = styled.div`
  padding: 0;
  margin: 0;
`;

const CommentListContainer = styled.div`
  display: flex;
  padding: 0.2rem 1rem;
`;

const CommentInputBar = styled.div`
  display: flex;
  border-top: 2px solid gray;
  margin-top: 0.3rem;
  padding: 0.5rem 1rem;
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

function Comment({ id }) {
  const commentRef = useRef();
  const [commentContent, setCommentContent] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [keyValue, setKeyValue] = useState(0);

  const onChangeComment = useCallback((e) => {
    setCommentContent(e.target.value);
  }, []);

  const onCheckEnter = (e) => {
    e.preventDefault();
    if(e.key === 'Enter') {
      commentPost();
    }
  };

  const commentPost = useCallback((e) => {
    e.preventDefault();
    if(commentContent === '') {
      window.alert('댓글을 입력해주세요.');
      return;
    }

    setKeyValue(keyValue + 1);

    const newComment = {
      id: keyValue,
      nickname: localStorage.getItem('loginId'),
      content: commentContent
    };

    setCommentList(commentList => [...commentList, newComment]);
  }, [commentContent]);

  useEffect(() => {
    commentRef.current.value = '';
  }, [commentList]);

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
          <CommentForm onClick={onCheckEnter}>
            <input
              type='text'
              placeholder='댓글달기...'
              ref={commentRef}
              onChange={onChangeComment}
            />
            <button type='submit' onClick={commentPost}>
              게시
            </button>
          </CommentForm>
        </CommentInputBar>
    </CommentContainer>
  )
}

export default Comment;
