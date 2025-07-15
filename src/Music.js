import React from "react";
import "./Music.css";

export default function Music() {
  return (
    <div className="musiccontainer">
      <h4> Enjoy some tunes with that weather</h4>
      <iframe
        src="https://open.spotify.com/embed/track/4RL77hMWUq35NYnPLXBpih?utm_source=generator&theme=0"
        title="This is a unique title"
        width="100%"
        height="85"
        frameborder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
