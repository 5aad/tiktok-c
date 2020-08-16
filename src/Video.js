import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = ({
  url,
  channel,
  description,
  song,
  fav,
  message,
  share
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        loop
        onClick={onVideoPress}
        ref={videoRef}
        className="video__player"
        src={url}
      ></video>
      <VideoFooter song={song} channel={channel} description={description} />
      <VideoSidebar fav={fav} message={message} share={share} />
    </div>
  );
};

export default Video;
