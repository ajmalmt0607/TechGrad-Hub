// import React, { useState } from "react";
// import Plyr from "plyr-react"; // Import Plyr component from plyr-react
// import "plyr/dist/plyr.css"; // Import Plyr's CSS for styling

// const VideoPlayer = ({ videoUrl }) => {
// 	const [duration, setDuration] = useState(0); // State to store video duration
// 	const [currentTime, setCurrentTime] = useState(0); // State to store current video time

// 	// Plyr player options
// 	const plyrOptions = {
// 		controls: [
// 			"play",
// 			"progress",
// 			"current-time",
// 			"mute",
// 			"volume",
// 			"fullscreen",
// 		],
// 		settings: ["quality", "speed", "loop"],
// 	};

// 	return (
// 		<div className="relative">
// 			<Plyr
// 				source={{
// 					type: "video",
// 					sources: [{ src: videoUrl, type: "video/mp4" }], // Specify video source
// 				}}
// 				options={plyrOptions} // Apply options like controls
// 				onReady={(event) => {
// 					const plyrInstance = event.detail.plyr; // Get the Plyr instance
// 					setDuration(plyrInstance.duration); // Set the video duration when it's ready
// 				}}
// 				onTimeUpdate={(event) => {
// 					const plyrInstance = event.detail.plyr; // Get the Plyr instance on time update
// 					setCurrentTime(plyrInstance.currentTime); // Set the current playback time
// 				}}
// 			/>
// 		</div>
// 	);
// };

// export default VideoPlayer;
import React, { useRef, useEffect } from 'react';
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const VideoPlayer = ({ videoUrl }) => {
  const plyrRef = useRef(null);

  useEffect(() => {
    if (plyrRef.current) {
      plyrRef.current.source = {
        type: 'video',
        sources: [
          {
            src: videoUrl,
            type: 'video/mp4',
          },
        ],
      };
    }
  }, [videoUrl]);

  const plyrProps = {
    source: {
      type: 'video',
      sources: [
        {
          src: videoUrl,
          type: 'video/mp4',
        },
      ],
    },
    options: {
      autoplay: true,
    },
  };

  return (
    <div className="w-full h-0 pb-[56.25%] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Plyr ref={plyrRef} {...plyrProps} />
      </div>
    </div>
  );
};

export default React.memo(VideoPlayer);
