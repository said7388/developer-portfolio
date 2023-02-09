import { useEffect, useState } from 'react';
import { contactsData } from '../data/contactsData';

function UseRepo() {
  const [repos, setRepos] = useState([]);
  const { devUsername } = contactsData;

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=user:said7388&sort=stars&type=Repositories`)
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setRepos(data)
      })
  }, [devUsername]);

  return { blogs: repos };
};

export default UseRepo;