import { useState, useEffect } from 'react';

// Custom hook to fetch data
export const useMediumData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@benjamin.mizrany');
      const data = await response.json();
      setPosts(data.items.map(item => ({
        ...item,
        pubDate: item.pubDate.split(' ')[0]
      })));
    };

    fetchData();
  }, []);

  return posts;
};
