import React from 'react';

import Booking from './Components/Booking';
import Categories from './Components/Categories';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Prices from './Components/Prices';
import Video from './Components/Video';

import './Components/styles/styles.css';




function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Prices />
      <Video/>
      <Categories/>
      <Experience/>
      <Booking/>
      <Footer/>

    </div>
  );
}

export default App;
