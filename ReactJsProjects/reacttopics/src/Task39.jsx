import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .then((res) => setComments(res.data));
  }, []);

  return (
    <ul>
      {comments.map(c => <li key={c.id}>{c.email}</li>)}
    </ul>
  );
}
