import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = ({fav, share, message}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}

        <p>{liked ? fav + 1 : fav}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon />
        <p>300</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>300</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
