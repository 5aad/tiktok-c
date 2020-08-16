import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
const VideoFooter = ({channel, description, song}) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon"/>
        <Ticker className="ticker" mode="smooth">
          {({ index }) => (
            <>
              <p>{song}</p>
            </>
          )}
        </Ticker>
        </div>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Disque_Vinyl.svg/120px-Disque_Vinyl.svg.png"
        className="videofooter__record"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
