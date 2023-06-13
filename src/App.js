import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home';
import background1 from "./images/background1.jpg"
import nightbg from "./images/nightBG.jpg"
import Spinner from './component/Spinner';
import Alert from './component/Alert';

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [data, setData] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    let timeout
    const fetchData = async () => {
      if (lat !== null && lon !== null) {
        try {
          let res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=b4e0e197f6bb45d08ab31832231006&q=${lat},${lon}&dt=2023-07-10`
          );
          res = await res.json();
          if (!res.error) {
            timeout = setTimeout(() => { setData(res) }, 1000)
          } else {
            console.error(res.error.message);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          let x;
          switch (error.code) {
            case error.PERMISSION_DENIED:
              x = 'User denied the request for Geolocation.';
              break;
            case error.POSITION_UNAVAILABLE:
              x = 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              x = 'The request to get user location timed out.';
              break;
            case error.UNKNOWN_ERROR:
              x = 'An unknown error occurred.';
              break;
            default:
              x = 'Error occurred while getting location.';
          }
          setAlert({msg:x,mode:"warning"});
        }
      );
    } else {
      alert('Geolocation is not supported in your browser.');
    }

    fetchData();
    clearTimeout(timeout);
  }, [lat, lon]);
  let bgImage = () => {
    try {
      if (!data.current.is_day) {
        document.body.style.backgroundImage = `url(${nightbg})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = 100 + "%";
      } else {
        document.body.style.backgroundImage = `url(${background1})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = 100 + "%";
      }
    } catch (error) {
    }
  }
  bgImage();

  const alertFunc = (msg, mode) => {
    setAlert({
      msg: msg,
      mode: mode
    });
    setTimeout(() => setAlert(null),3000);
  }
return (
  <>
    <div style={{height:"60px"}}>
      <Alert alert={alert}/>
    </div>

      <div className="parentDiv">
        <div className="childDiv">
          {data ? <Home data={data} alertFunc={alertFunc}/> : <Spinner />}
        </div>
      </div>
  </>
);
}

export default App;
