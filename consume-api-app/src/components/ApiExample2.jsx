import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiExample2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/users/2'); // Replace with your API endpoint
          console.log("response", response)
          setData(response.data);
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
            data: <li key={data.firstName}>{data.firstName} {data.lastName}</li>
          </ul>
        )}
      </div>
    );
  };
  
  export default ApiExample2;