import React from "react";
import YouTube from "react-youtube";

export default function TrailerFilmDetail({ id }) {
  // console.log(id);
  const opts = {
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };
  return <YouTube className="youtube_trailer" videoId={id} opts={opts} />;
}
