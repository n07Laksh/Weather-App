import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home';

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    const fetchData = async () => {
      if (lat !== null && lon !== null) {
        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=b4e0e197f6bb45d08ab31832231006&q=${lat},${lon}&dt=2023-07-10`
          );
          const data = await res.json();
          setData(data); // Set data directly without wrapping in an array
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      alert('Geolocation is not supported in your browser.');
    }

    fetchData();
  }, [lat, lon]);

  return (
    <>
      {/* {data ? <Home data={data} /> : <p>Loading...</p>} */}
      {<Home data={data} />}
    </>
  );
}

export default App;
