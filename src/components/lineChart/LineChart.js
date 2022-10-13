import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css'


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  // console.log(coinHistory?.data)
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };
  

  return (
    <>
    <div className="chart-header">
      <p className="chart-title">{coinName} Price Chart </p>
      <div className='coin-desc'>
      <p>Change: {coinHistory?.data?.change}%</p>
      <p>Current {coinName} Price: ${currentPrice}</p>
      </div>
    </div>
    <div className='linechart-container'>
      <Line data={data} options={options} />    
      </div> 
    </>
  );
};

export default LineChart;