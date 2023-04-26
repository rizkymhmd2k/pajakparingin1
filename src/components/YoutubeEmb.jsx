'use client';
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmb = ({ embedId }) => {
  YoutubeEmb.propTypes = {
    embedId: PropTypes.string.isRequired
  };

  return (
    <div className="video-responsive ">
      <iframe
        width="853"
        height="1853"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="h-[200px] ss:h-[350px] md:h-[400px] lg:h-[700px] w-full relative"
      />
    </div>
  )
}


export default YoutubeEmb;