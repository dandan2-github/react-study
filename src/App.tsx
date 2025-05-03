import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>다니의 블로그</h1>
        <Routes>
          <Route path="/" element={<NewList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/new" element={<PostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

