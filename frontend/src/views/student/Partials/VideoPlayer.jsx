import React, { forwardRef, useEffect, useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const VideoPlayer = forwardRef(({ source }, ref) => {
	const plyrRef = useRef(null);

	useEffect(() => {
		if (plyrRef.current && plyrRef.current.plyr) {
			plyrRef.current.plyr.source = {
				type: "video",
				sources: [
					{
						src: source,
						type: "video/mp4",
					},
				],
			};
		}
	}, [source]);

	return (
		<div ref={ref} className="w-full h-full">
			<Plyr
				ref={plyrRef}
				source={{
					type: "video",
					sources: [
						{
							src: source,
							type: "video/mp4",
						},
					],
				}}
				options={{
					controls: [
						"play-large",
						"play",
						"progress",
						"current-time",
						"mute",
						"volume",
						"captions",
						"settings",
						"pip",
						"airplay",
						"fullscreen",
					],
					ratio: "16:9",
				}}
			/>
		</div>
	);
});

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
