import { useEffect, useState } from 'react';
import { contactsData } from '../data/contactsData';

function UseBlog() {
  const [blogs, setBlogs] = useState([]);
  const { devUsername } = contactsData;

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${devUsername}`)
      .then((response) => response.json())
      .then(data => {
        const filtered = data.sort(() => Math.random() - 0.5);
        setBlogs(filtered)
      })
  }, [devUsername]);

  return { blogs };
};

export default UseBlog;