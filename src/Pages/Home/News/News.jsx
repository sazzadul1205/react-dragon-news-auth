import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div>
            <h2 className='text-xl font-semibold mb-5'>Dragon News Home</h2>
            <div>
                {news.map(newsItem => (
                    <NewsCard key={newsItem._id} news={newsItem} />
                ))}
            </div>
        </div>
    );
};

export default News;
