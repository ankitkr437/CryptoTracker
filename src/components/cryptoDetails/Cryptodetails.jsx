import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
 
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";
import "./Cryptodetails.css";
import LineChart from "../lineChart/LineChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

const Cryptodetails = () => {
  Chart.register(CategoryScale);
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const cryptoDetails = data?.data?.coin;
  if (isFetching) return "Loading...";
  
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  // const paragraphs = cryptoDetails?.description?.split("</p>")
  // const firstParagraph = paragraphs[0];
  // var paragraphContent=firstParagraph.replace("<p>","") 
  // console.log(paragraphContent)
  return (
    <>
    <div className="crypto-details-container">
      <div className="crypto-details-left">
        <img src={cryptoDetails?.iconUrl} className="crypto-img" />
        <p className="crypto-name">{cryptoDetails?.name}</p>
        {/* <p className="crypto-about">{paragraphContent}</p> */}
        <div className="crypto-stats">
          <div className="crypto-title">
            <img src="/images/rank.png" />
            <p className="crypto-stats-title">Rank </p>
          </div>
          <p className="crypto-stats-value">{cryptoDetails?.rank}</p>
        </div>
        <div className="crypto-stats">
          <div className="crypto-title">
            <img src="/images/dollar.png" />
            <p className="crypto-stats-title">Current price </p>
          </div>
          <p className="crypto-stats-value">
            {" "}
            ${cryptoDetails?.price && millify(cryptoDetails?.price)}
          </p>
        </div>

        <div className="crypto-stats">
          <div className="crypto-title">
            <img src="/images/24hvolume.png" />
            <p className="crypto-stats-title">24h Volume</p>
          </div>
          <p className="crypto-stats-value">
            {" "}
            ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}
          </p>
        </div>

        <div className="crypto-stats">
          <div className="crypto-title">
            <img src="/images/dollar.png" />
            <p className="crypto-stats-title">Market Cap </p>
          </div>
          <p className="crypto-stats-value">
            ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}
          </p>
        </div>

        <div className="crypto-stats">
          <div className="crypto-title">
            <img src="/images/dailyavg.png" />
            <p className="crypto-stats-title">All time high</p>
          </div>
          <p className="crypto-stats-value">
            $
            {cryptoDetails?.allTimeHigh?.price &&
              millify(cryptoDetails?.allTimeHigh?.price)}
          </p>
        </div>
      </div>
      <div className="crypto-details-right">
        <p className="coin-title">
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </p>
        <p className="chart-overview">
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
         
        <LineChart
          coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}
        />
      </div>
    </div>
    <div className="coin-footer-container">
        <div className="coin-footer-desc">
          <p className="coin-details-heading">What is {cryptoDetails?.name}?</p>
          {HTMLReactParser(cryptoDetails?.description)}
        </div>
        <div className="coin-footer-links">
          <p className="coin-details-heading-links">{cryptoDetails?.name} Links</p>
          {cryptoDetails.links?.map((link) => (
            <div className="coin-link" key={link.name}>
              <p className="link-name">{link.type}</p>
              <a href={link.url}>{link.name}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cryptodetails;
