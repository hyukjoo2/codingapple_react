/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [postTitle, postUpdate] = useState(['남자 코트 추천', '강남 고기 맛집', '파이썬 독학']);
  let [likeCount, likeUpdate] = useState(0);

  function updatePostTitle() {
    let newTitle = [...postTitle];
    newTitle[0] = '여자 코트 추천';
    postUpdate(newTitle);
  }

  function changeSort() {
    let newTitle = [...postTitle];
    postUpdate(newTitle.sort());
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Aerial Footages by Flying J</div>
      </div>
      <p><button onClick={ updatePostTitle }>제목바꾸기</button>&nbsp;&nbsp;<button onClick={ changeSort }>정렬</button></p>
      <div className="list">
        <h4> { postTitle[0] } <span onClick={ ()=>{ likeUpdate(likeCount + 1) } }>👍</span> { likeCount } </h4>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { postTitle[1] } </h4>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4> { postTitle[2] } </h4>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
