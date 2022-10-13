import React, { useState } from "react";
import moment from "moment";
import './News.css';
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { Link } from "react-router-dom";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return "Loading...";
  console.log(cryptoNews);
  return (
    <>
       <div className="card-row">
        {cryptoNews.value.map((news, i) => (
         
            <div className="card">
              <div className="card-top">
              <div className="card-details">
                 <p className="card-title"> {news.name.length >100 ? `${news.name.substring(0, 100)}...` : news.name}</p>
                 <p className="card-news">{news.description.length > 180 ? `${news.description.substring(0, 180)}...` : news.description}</p>
              </div>
              <img className="card-img" src={news?.image?.thumbnail?.contentUrl || demoImage}/>
              </div>
              <div className="card-footer">
                <div className="news-origin">
                  <img className="news-origin-img" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <p className="news-origin-name">{news.provider[0]?.name}</p>
                </div>
                <p className="news-time">{moment(news.datePublished).startOf('ss').fromNow()}</p>
              </div>
          </div>
        ))}
         
      </div>
    </>
  );
};

export default News;
