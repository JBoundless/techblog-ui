import React from 'react';
import './style.css';
import PostList from './posts/PostList';
import SliderPosts from './posts/SliderPosts';

export default function App() {
  return (
    <div className="App">
      <h1>TechBlog 2021</h1>
      <SliderPosts />
      <PostList />
    </div>
  );
}
