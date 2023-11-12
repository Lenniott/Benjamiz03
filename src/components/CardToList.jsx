import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Sample data for the list
const items = [
  { id: 1, thumbnail: "https://picsum.photos/id/237/200/300", title: 'Item 1', author: 'Benjamiz',link:"https://medium.com/@benjamin.mizrany",pubDate:"01/05/2023"  },
  { id: 2, thumbnail: "https://picsum.photos/id/237/200/300", title: 'Item 2', author: 'Benjamiz',link:"https://medium.com/@benjamin.mizrany",pubDate:"01/05/2023"   },
  { id: 3, thumbnail: "https://picsum.photos/id/237/200/300", title: 'Item 3', author: 'Benjamiz',link:"https://medium.com/@benjamin.mizrany",pubDate:"01/05/2023"  },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

const extractPublisher = (url) => {
  const publisher = new URL(url).hostname;
  return publisher.replace('www.', '');
};


export function CardToListComponent({ title, items }) {
  return (
    <div className="container mx-auto p-4">
      <h4 className='text-2xl pb-4'>{title}</h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white lg:h-full lg:w-full rounded-lg shadow-md grayscale cursor-pointer bg-secondary-light duration-500 hover:grayscale-0 hover:shadow-xl hover:translate-y-0.5 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              delay: 0.15
            }}
          >
            <Link to={item.link} className='flex-grow flex flex-row lg:flex-col items-center justify-between'>

              {/* Responsive image container */}
              <div className="w-auto h-64 lg:w-full lg:h-auto overflow-hidden p-4">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover rounded-md" style={{ aspectRatio: '1 / 1' }} />
              </div>

              <div className="flex-grow flex flex-col  justify-between p-4 w-full">
                <h2 className="text-md lg:text-lg font-semibold flex-grow">{item.title}</h2>
                <div className="flex-grow flex flex-col items-start mt-2 gap-1 font-general-medium text-sx lg:text-md text-ternary-dark">
                  <div className='flex gap-2 items-center'>
                    <p>{item.author}</p> • <p>{formatDate(item.pubDate)}</p>
                  </div>
                  <p>Published on <a className="hover:underline underline-offset-2 text-indigo-600 font-semibold" href={`https://${extractPublisher(item.link)}`} target="_blank" rel="noopener noreferrer">{extractPublisher(item.link)}</a></p>
                </div>
              </div>

            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
