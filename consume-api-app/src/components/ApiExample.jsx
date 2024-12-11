import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiExample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts'); // Replace with your API endpoint
        console.log("response", response)
        setData(response.data.posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>API Data:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
            // Replace 'id' and 'name' with the actual keys in your API response
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiExample;