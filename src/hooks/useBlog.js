import { useEffect, useState } from 'react';
import { aboutData } from '../data/aboutData';

function UseBlog() {
  const [blogs, setBlogs] = useState([]);
  const { devUsername } = aboutData;

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${devUsername}`)
      .then((response) => response.json())
      .then(data => setBlogs(data))
  }, [devUsername]);

  return { blogs };
};

export default UseBlog;