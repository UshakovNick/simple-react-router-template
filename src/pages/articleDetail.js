import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Article(match) {

  useEffect(() => {},
console.log(match),
  []);




  return (
  <div>
   <h2>Article</h2>
  <h1>{Object.title}</h1>
  <p>{Object.body}</p>
  </div>
);
}
export default Article;
