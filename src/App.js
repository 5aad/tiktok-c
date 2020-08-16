import React, { useState , useEffect} from "react";

import "./App.css";
import Video from "./Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
   db.collection("videoa").onSnapshot(snapshot => (
     setVideos(snapshot.docs.map(doc => doc.data()))
   ))
  }, [])

  return (
    <div className="App">
      <div className="app__video">
        {videos.map(
          ({ url, channel, description, song, fav, message, share }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              fav={fav}
              message={message}
              share={share}
            />
          )
        )}

      </div>
    </div>
  );
}

export default App;
