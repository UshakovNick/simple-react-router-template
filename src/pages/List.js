import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function List() {

useEffect(() => {
  fetchItems();
}, []);

const [items, setItems] = useState([]);

const fetchItems = async () => {
  const data = await fetch (' http://jsonplaceholder.typicode.com/posts ');
 const items = await data.json();
  console.log(items);
  setItems(items);

};

  return (

    <div>
     {items.map(Object =>(
       <h1 key={Object.id}>
       <Link to={'/list/${Object.id}'}>{Object.title}</Link>
       </h1>
     ))}
    </div>
  )
}

export default List;
