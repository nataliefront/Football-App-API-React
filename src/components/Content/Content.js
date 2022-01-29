import React, {useState} from 'react';
import Leagues from '../Leagues/Leagues';
import Standings from '../Standings/Standings';
import './Content.css';

const Content = () => {
    const [active, setActive] = useState(true);

  return <div className='content-container'>
      <div className='tabs'>
          <div className='tab-leagues' onClick={() => setActive(true)}>
              <h2 style={{ color: active ? "#70e2ff" : null }}>Leagues</h2>
          </div>
          <div className='tab-standings' onClick={() => setActive(false)}> 
              <h2 style={{ color: !active ? "#70e2ff" : null }}>Standings</h2>
          </div>
      </div>

      {active ? <Leagues /> : <Standings />}
  </div>;
};

export default Content;
