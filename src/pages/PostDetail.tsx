import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Post } from '../types';

const PostDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state as Post;

  if (!post) return <p>글을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default PostDetail;


