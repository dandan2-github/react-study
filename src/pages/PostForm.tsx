import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('입력해주세요.');
      return;
    }

    console.log('새 글:', { title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>새 글 작성</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="내용"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={10}
      />
      <br />
      <button type="submit">저장</button>
    </form>
  );
};

export default PostForm;

