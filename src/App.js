import React from "react";
import { Route,Routes,Navigate} from "react-router-dom";
import './App.css'
import Header from "./components/navbar/Header";
import Homepage from "./components/homePage/Homepage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Exchanges from './components/exchanges/Exchanges.jsx';
import Cryptocurrencies from './components/cryptoCurrencies/Cryptocurrencies.jsx';
import CryptoDetails from './components/cryptoDetails/Cryptodetails.jsx'
import News from './components/news/News.jsx';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Header />
      </div>
      <div className="main">

      <Routes>

     <Route path="/"  exact element={ <Homepage />} />
     <Route  path="/exchanges"  element={<Exchanges />} />
     <Route   path="/cryptocurrencies"  element={<Cryptocurrencies />}/>
     <Route  path="/crypto/:coinId"   element={  <CryptoDetails />} />
     <Route  path="/news"  element={<News />} />
    
     </Routes>

      </div>
      <div className="footer">
      </div>
    </div>
  );
};

export default App;
