import React from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div className="post-card" onClick={onClick}>
      <h3>{post.title}</h3>
      <p>{post.content.slice(0, 100)}...</p>
    </div>
  );
};

export default PostCard;
