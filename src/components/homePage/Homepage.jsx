import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { useGetCryptosQuery } from "../../services/cryptoApi.js";
import Cryptocurrencies from '../cryptoCurrencies/Cryptocurrencies.jsx';
import News from '../news/News.jsx'


const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";
  return (
    <div className="homepage">

      <p className="crypto-status-title">Crypto Status</p>

      <div className="cryptoStatus">
        <div className="statushalf">
          <div className="status">
            <p className="status-no">{globalStats.total}</p>
            <p className="status-title">Total Cryptocurrencies</p>
          </div>
          <div className="status">
            <p className="status-no">{millify(globalStats.totalExchanges)}</p>
            <p className="status-title">Total Exchanges</p>
          </div>
        </div>
        <div className="statushalf">
          <div className="status">
            <p className="status-no">{`$${millify(
              globalStats.totalMarketCap
            )}`}</p>
            <p className="status-title">Total Market Cap</p>
          </div>
          <div className="status">
            <p className="status-no">{`$${millify(
              globalStats.total24hVolume
            )}`}</p>
            <p className="status-title">Total 24h Volume</p>
          </div>
        </div>
      </div>

      <div className="home-heading-crypto">
      {/* <div className="latest-title">
        <p className="popular-title">Popular Cryptocurrency</p>
         <p className="show-more"><Link to="/cryptocurrencies">Show more</Link></p>
        </div> */}
      <Cryptocurrencies simplified/>
      </div>
      <div className="home-heading-crypto">
        <div className="latest-title">
        <p className="popular-title">Latest crypto news</p>
        <div className="show">
        <Link to="/news">
        <p className="show-more">Show more</p>
        <img src='/images/forward.png' className="forward-img"></img>
        </Link>
        </div>
        
        </div>
      <News  simplified/>
      </div>
    </div>
  );
};

export default Homepage;
