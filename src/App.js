import React from 'react';
import './App.css';
import VideoCard from './Components/Videocard'; 

function App() {
  return (
    <div className="app">
      <h1>Hey Tejmul!! Let's do this</h1>

      <div className='app-top'>
        <img 
          className='app-logo' 
          src="https://www.awn.com/sites/default/files/styles/original/public/image/featured/1050389-three-major-tech-trends-surrounding-vfx-adoption-and-growth.jpg?itok=SXmzAiUW" 
          alt="Techie"
        />
        <h1>Reels</h1>
      </div>

      <div className='app-videos'>
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
