"use client";
import { useState, useEffect, useRef } from "react";

import TopBanner from "../../components/TopBanner";

export default function VSL3() {
    const [load, setLoad] = useState(false);
    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        //Video
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setLoad(true);
                observer.disconnect();
            }
        });

        const currentVideoRef = videoRef.current; // Create a variable inside the effect

        if (currentVideoRef) {
            observer.observe(currentVideoRef); // Use the variable
        }

        return () => {
            if (currentVideoRef) {
                observer.unobserve(currentVideoRef); // Use the variable
            }
        };
    }, []);

    return (
        <>
            <div className="bg-gradient-to-r from-[#25283b] via-[#3e3f67] to-[#2a2b46] md:overflow-hidden pt-8 pb-51">
                {/* <h1 className="text-xl md:text-2xl  lg:text-4xl text-[#ffffff] font-semibold text-center mx-1 ">
                    Harvard:
                </h1> */}

                <div className="w-10/12 md:w-6/12 mx-auto">
                    <h1 className=" text-xl md:text-xl lg:text-4xl text-[#ffffff] font-bold text-center mb-3">
                        Divers “Pee in Deep Ocean” Protocol is Saving Thousands
                        from an Enlarged Prostate
                    </h1>
                </div>
                <div className="container mx-auto justify-center grid grid-cols-12 gap-4 mt-3 mb-3 px-2 md:px-0">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"></div>
                    <div className="col-span-10 md:col-span-8 lg:col-span-8 xl:col-span-8">
                        <div ref={videoRef}>
                            {load ? (
                                <iframe
                                    className="w-full aspect-video rounded-3xl shadow-2xl"
                                    src="https://www.youtube.com/embed/ZAvylHvwTmg"
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="flex justify-center">
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"></div>
                </div>

                <TopBanner />
            </div>
        </>
    );
}
