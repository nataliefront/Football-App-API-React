import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leagues.css';

const Leagues = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("https://api-football-standings.azharimm.site/leagues").then(
            (res) => {
                console.log(res.data.data);
                setData(res.data.data);
            }
        );
    }, []);

  return <div className='leagues'>
      {data.map((data) => (
          <div className='league' key={data.id}>
              <img src={data.logos.light} alt="#" />
              <h2>{data.name}</h2>
          </div>
      ))}
  </div>;
};

export default Leagues;
