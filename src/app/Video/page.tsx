"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import Video from "next-video";
import "video.js/dist/video-js.css";
export default function Sample() {
    const videoRef = useRef(null);
    useEffect(() => {
        // Make sure the videoRef.current is not null
        if (videoRef.current) {
            const player = videojs(videoRef.current, {
                controls: true,
                autoplay: false,
                preload: "auto",
                fluid: true,
                responsive: true,
            });

            // Cleanup function
            return () => {
                if (player) {
                    player.dispose();
                }
            };
        }
    }, []);

    return (
        <div className=" relative w-full px-20">
            <Video
                ref={videoRef}
                src="/videos/vidz.mp4"
                className="video-js vjs-default-skin absolute top-0 left-0  w-1/2  h-auto"
                controls
                preload="auto"

                // responsive
            />
        </div>
    );
}
