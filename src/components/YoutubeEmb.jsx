'use client';
import React from "react";

// const YoutubeEmb = ({ embedId }) => {
//   return (
//     <div className="video-responsive">
//       <iframe
//         width="853"
//         height="480"
//         src={`https://www.youtube.com/embed/${embedId}`}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         title="Embedded youtube"
//         style={{ width: '100%', height: '100%' }}

//       />
//     </div>
//   );
// };

// export default YoutubeEmb;

const YoutubeEmb = ({ embedId }) => {
  return (
    // <div className="video-responsive w-full lg:w-2/3 mx-auto">
    <div className="relative h-0 overflow-hidden video-responsive w-full lg:w-2/3 mx-auto" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        title="Embedded youtube"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmb;

