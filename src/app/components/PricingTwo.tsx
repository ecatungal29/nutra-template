import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export default function PricingTwo() {
    return (
        <>
            <div className="flex flex-col mx-auto max-w-lg text-center bg-white shadow-md rounded-lg zoom-on-hover relative">
                <div className="ribbon">
                    <span>BEST VALUE</span>
                </div>

                <div className="bg-gradient-to-r from-[#294773] via-[#33578e] to-[#294773] p-8 rounded-t-lg">
                    <h3 className="mb-1 text-4xl font-bold text-[#9fc5ff]">
                        6 Bottles
                    </h3>
                    <p className="sm:text-lg text-[#9fc5ff]">180 Day Supply</p>
                </div>

                <div className="p-8">
                    <div className="bg-gradient-to-t from-[#b9c4d8] via-[#b9c4d8] to-[#c8d3e9] md:w-80 w-52 h-52 md:h-80 mx-auto rounded-full flex items-center justify-center my-8">
                        <Image
                            src="/prostaflowRx6-500px.png"
                            className="md:w-[280px] w-[180px] "
                            width={180}
                            height={0}
                            priority
                            alt="..."
                        />
                    </div>

                    <div className="flex justify-center items-baseline">
                        <span className="mr-2 text-5xl font-extrabold">
                            $49
                        </span>
                        <span className="text-gray-700">/Per Bottle</span>
                    </div>
                    <br />
                    <div className=" bg-red-600 flex justify-start items-center lg:ml-16 md:ml-32 ml-10  w-52 px-2">
                        <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="text-white mr-2"
                        />
                        <p className="m-0 text-white">BIGGEST DISCOUNT</p>
                    </div>
                    <div className=" bg-green-600 text-white flex justify-start items-center lg:ml-16 md:ml-32 ml-10 w-52 px-2 ">
                        <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="text-white mr-2"
                        />
                        <p className="m-0">FAST & FREE SHIPPING</p>
                    </div>
                    <div className=" bg-gray-900 text-white flex justify-start items-center lg:ml-16 md:ml-32 ml-10 w-52 px-2">
                        <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="text-white mr-2"
                        />
                        <p className="m-0">4 BONUSES</p>
                    </div>
                    <br />

                    {/* <p className="mt-5 font-semibold">YOU SAVE $780</p>
                    <p className="mb-5">+ 2 FREE E-BOOKS</p> */}

                    <a
                        href="https://www.digistore24.com/product/536868"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center">
                            ORDER NOW
                        </div>
                    </a>

                    <p className="text-sm mt-2">90 Day Money-Back Guarantee</p>
                    <div className="flex justify-center items-center">
                        <Image
                            src="/cards.png"
                            className="image"
                            width={200}
                            height={300}
                            priority
                            alt="..."
                        />
                    </div>

                    <p className="text-base mt-3 font-semibold">
                        <del className="text-red-500 ">$1194</del> $294
                    </p>
                </div>
            </div>
        </>
    );
}
