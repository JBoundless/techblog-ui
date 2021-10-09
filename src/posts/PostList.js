import React, { Component } from 'react';
import PostData from '../data/posts.json';
import './PostList.css';

export default class PostList extends Component {
  render() {
    return (
      <div>
        <h1>Post List</h1>
        {PostData.map((postDetail, index) => {
          return (
            <div className="posts">
              <h2>{postDetail.title}</h2>
              <h3>{postDetail.date}</h3>
              <p>{postDetail.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
