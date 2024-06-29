import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

export default function PricingThree() {
    return (
        <div className="py-8">
            <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-gray-100 rounded-lg shadow-md zoom-on-hover">
                <div className="bg-[#25283b] p-8 rounded-t-lg">
                    <h3 className="text-3xl font-bold text-[#bac2d7]">
                        3 Bottles
                    </h3>
                    <p className="text-[#bac2d7] sm:text-lg">90 Day Supply</p>
                </div>

                <div className="bg-gradient-to-t from-[#b9c4d8] via-[#b9c4d8] to-[#c8d3e9] lg:w-72 lg:h-72 md:w-80 w-52 h-52 md:h-80 mx-auto rounded-full flex items-center justify-center my-8">
                    <Image
                        src="/prostaflowx3-500px.png"
                        className="md:w-[280px] w-[180px]"
                        width={180}
                        height={0}
                        priority
                        alt="..."
                    />
                </div>

                <div className="flex justify-center items-baseline">
                    <span className="mr-2 text-5xl font-extrabold">$59</span>
                    <span className="text-gray-500 dark:text-gray-400">
                        /Per Bottle
                    </span>
                </div>
                <br />

                <div className="  bg-green-600 text-white flex justify-start items-center xl:ml-24 lg:ml-16 md:ml-40 ml-[72px]  w-52 px-2">
                    <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="text-white mr-2"
                    />
                    <p className="m-0">FAST & FREE SHIPPING</p>
                </div>
                <div className="xl:ml-24 lg:ml-16 md:ml-40 ml-[72px]  bg-gray-900 text-white flex justify-start items-center  w-52 px-2">
                    <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="text-white mr-2"
                    />
                    <p className="m-0">4 BONUSES</p>
                </div>
                <br />
                <div className="text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6">
                    ADD TO CART
                </div>
                <p className="text-sm mt-2">60 Day Money-Back Guarantee</p>

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

                <p className="text-base mt-3 font-semibold mb-5">
                    <del className="text-red-500">$597</del> $177
                </p>
                {/* <p className="text-sm font-semibold mb-5">+ FREE US SHIPPING</p> */}
            </div>
        </div>
    );
}
