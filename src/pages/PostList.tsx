import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { Post } from '../types';
import { useNavigate } from 'react-router-dom';

const NewList: React.FC = () => {
  const [posts] = useState<Post[]>([
    { id: 1, title: '첫 번째 글', content: '야호호.' },
    { id: 2, title: '두 번째 글', content: '무야호.' },
  ]);

  const navigate = useNavigate();

  return (
    <div>
      <h2>블로그 글 목록</h2>
      <button onClick={() => navigate('/new')}>새 글 작성</button>
      <div className="post-list">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onClick={() => navigate(`/posts/${post.id}`, { state: post })}
          />
        ))}
      </div>
    </div>
  );
};

export default NewList;
