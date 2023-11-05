import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const fetchData = async () => {
  const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@benjamin.mizrany');
  const data = await response.json();
  return data.items.map(item => ({
    ...item,
    pubDate: item.pubDate.split(' ')[0]
  }));
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };
  
  const extractPublisher = (url) => {
    const publisher = new URL(url).hostname;
    return publisher.replace('www.', '');
  };
export function MediumGrid(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData().then(data => setPosts(data));
  }, []);
  const articles = posts.length ? [posts[0], posts[1], posts[2]] : [];
  return (
    <div className='flex flex-col items-center justify-center gap-8 mt-10'>
        <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark">Articles</h2>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {articles.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-72 h-auto grayscale hover:grayscale-0 hover:shadow-xl  hover:translate-y-0.5 hover:scale-105 cursor-pointer mb-10 sm:mb-0 bg-secondary-light duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              delay: 0.15,
            }}
          >

          <img src={post.thumbnail} alt={post.title} className="w-64 h-64 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
          <div className="flex flex-col justify-bottom items-left mt-2 gap-1  font-general-medium text-sm md:text-md text-ternary-dark">
          <a className='flex gap-2 items-center justify-left'><p >{post.author}</p> • <p>{formatDate(post.pubDate)}</p></a>
          <p>Published on <a className="hover:underline underline-offset-2 text-indigo-600 font-semibold" href={`https://${extractPublisher(post.link)}`} target="_blank" rel="noopener noreferrer">{extractPublisher(post.link)}</a> </p>
          </div>
                    
          </motion.div>
        ))}
      </div>
    </div>
  );
};


