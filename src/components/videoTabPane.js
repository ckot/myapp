import React from 'react';

const VideoTabPane = ({ content }) => {
  return (
    <iframe 
      width="640"
      height="480"
      src={content}
      frameBorder="0"
      webkitallowfullscreen="webkitAllowFullScreen"
      mozallowfullscreen="mozallowfullscreen"
      allowFullScreen="allowfullscreen">
    </iframe>
  );
}

export default VideoTabPane;