"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import Modal from "react-modal";

const Sample: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [playedSeconds, setPlayedSeconds] = useState(0);

    useEffect(() => {
        const appElement = document.getElementById("__next");
        if (appElement) {
            Modal.setAppElement(appElement);
        } else {
            console.error("App element #__next not found");
        }
    }, []);

    useEffect(() => {
        if (playedSeconds >= 60) {
            setModalIsOpen(true);
        }
    }, [playedSeconds]);

    const handleTimeUpdate = (state: { playedSeconds: number }) => {
        setPlayedSeconds(state.playedSeconds);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="absolute top-0 left-0 w-full h-full"
                controls
                width="100%"
                height="100%"
                onProgress={handleTimeUpdate}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Popup"
                style={{
                    overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        maxWidth: "500px",
                        padding: "20px",
                        textAlign: "center",
                    },
                }}
            >
                <h2>Special Message</h2>
                <p>You've been watching the video for 3 minutes!</p>
                <button
                    onClick={closeModal}
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    Close
                </button>
            </Modal>
        </div>
    );
};

export default Sample;
