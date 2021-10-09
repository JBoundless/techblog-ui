import React, { Component } from 'react';
import SliderPostData from '../data/SliderPosts.json';

export default class SliderPosts extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          margin: 'auto',
          cursor: 'pointer',
        }}
      >
        {SliderPostData.map((sliderPostDetail, index) => {
          return (
            <div
              style={{
                display: 'grid',
                backgroundColor: 'grey',
                color: 'white',
              }}
            >
              <img src={sliderPostDetail.img} height="500px" width="500px" />
              <h2>{sliderPostDetail.title}</h2>
              <h3>{sliderPostDetail.date}</h3>
              <p>{sliderPostDetail.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
