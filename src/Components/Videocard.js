import React from 'react';
import './videoCard.css';

function Videocard() {
  return (
    <div className='videoCard'>
      <video
        className="video-player"
        src="https://www.instagram.com/reel/C8vv1PGJPp4/embed"
      ></video>
    </div>
  );
}

export default Videocard;
