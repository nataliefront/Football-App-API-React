import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Standings.css';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedYear, setSelectedYear] = useState("2021");

  useEffect(() => {
    setLoading(true);
    axios(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`).then((res) => {
      console.log(res.data.data.standings);
      setData(res.data.data.standings);
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }, [selectedLeague, selectedYear]);

  return <div className='standings'>
    <div className='select-container'>
      <select
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}>
            <option value="arg.1">Argentine Liga</option>
            <option value="aus.1">Australian A-League</option>
            <option value="bra.1">Brazilian Serie A</option>
            <option value="ned.1">Dutch Eredivisie</option>
            <option value="eng.1">English Premier League</option>
            <option value="fra.1">French Ligue 1</option>
            <option value="ger.1">German Bundesliga</option>
            <option value="ita.1">Italian Serie A</option>
            <option value="jpn.1">Japanese J League</option>
            <option value="mex.1">Mexican Liga BBVA MX</option>
            <option value="esp.1">Spanish Primera Division</option>
      </select>
      <select
          name="select-year"
          id="select-year"
          defaultValue={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
      </select>
    </div>
    <div className='standing-results'>
      {loading ? (<Loader type="Rings" className='loader' color="#00BFFF" height={120} width={120} />) :
      (data.map((data, index) => (
        <div className='standing-info' key={data.team.id}>
          <h1>
            <span>
              {`${index+1}`}
              <img src={data.team.logos[0].href} alt="#" />
            </span>
            {data.team.shortDisplayName}
          </h1>
        </div>
      )))}
    </div>
  </div>;
};

export default Standings;
