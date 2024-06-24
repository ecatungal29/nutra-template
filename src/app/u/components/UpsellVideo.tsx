"use client";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function UpsellVideo() {
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef(null);

    const toggleClient = () => {
        setPlaying(!playing);
    };

    return (
        <>
            <div className="video-wrapper mx-auto w-11/12 h-auto md:w-9/12 relative rounded-3xl">
                {!playing && (
                    <div className="video-overlay absolute top-0 z-10 left-0 w-full h-full bg-[#26144d] opacity-80"></div>
                )}

                <div style={{ paddingTop: "56.25%" }}>
                    {" "}
                    {/* Aspect ratio container */}
                    <ReactPlayer
                        ref={playerRef}
                        url="https://www.youtube.com/watch?v=SjFsuwtqEno"
                        width="100%"
                        height="100%"
                        playing={playing}
                        controls={false} // Hide player controls
                        showinfo={false} // Hide YouTube info bar
                        onPlay={() => setPlaying(true)}
                        onPause={() => setPlaying(false)}
                        style={{ position: "absolute", top: 0, left: 0 }}
                    />
                </div>

                {!playing && (
                    <img
                        src="/continue.svg"
                        alt="Continue Icon"
                        className="hover:cursor-pointer client-button"
                        onClick={toggleClient}
                    />
                )}
                {playing && (
                    <img
                        src="/continue.svg"
                        alt="Continue Icon"
                        className="hover:cursor-pointer client-button"
                        onClick={toggleClient}
                        style={{ opacity: 0 }}
                    />
                )}
            </div>
        </>
    );
}
