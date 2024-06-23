import React from "react";
import Image from "next/image";

export default function GridImage() {
    return (
        <div className="lg:w-9/12 mx-auto mt-24 ">
            <h1 className="headline p-2 md:p-1 text-center font-bold">
                Inside Every{" "}
                <span className="font-bold text-red-600">ProstaFlow</span>{" "}
                Capsule You&lsquo;ll Find:
            </h1>
            <h3 className="text-xl p-5 md:p-1 md:text-2xl md:mb-10 text-center">
                100% natural and unique ingredients that are clinically proven
                to support the health of your prostate and urinary system
            </h3>

            <div className="flex justify-center p-8 md:p-0">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/Nori_Yaki_Extract_Powder.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-[6px] md:text-xl text-xs md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2   px-4 md:text-xl md:px-8 pt-2  rounded-md  md:mb-4 mb-1 md:text-white md:bg-gray-900 md:py-2">
                            Nori Yaki Extract Powder
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base mt-1 md:mt-0 list-inside">
                            <li className="flex md:items-center  items-start mb-4 mt-2 md:mt-0 md:mb-0 ">
                                <svg
                                    className="w-3.5 h-3.5 me-2 mt-1 text-green-500 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Supports prostate repair
                            </li>
                            <li className="flex md:items-center  items-start  ">
                                <svg
                                    className="w-3.5 h-3.5 me-2  text-green-500 mt-5 md:mt-0 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <p className=" mt-4 md:mt-0">
                                    Maintains healthy urinary system
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <Image
                            src="/Wakame_Extract.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center text-xs font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2   px-4 md:text-xl md:px-8 pt-2 rounded-md mb-4 md:text-white md:bg-gray-900 md:py-2">
                            Wakame Extract
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base   list-inside">
                            <li className="flex md:items-center  items-start  ">
                                <svg
                                    className="w-3.5 h-3.5 me-2 mt-1 text-green-500 flex-shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Supports normal function of the bladder
                            </li>
                            <li className="flex md:items-center  items-start">
                                <svg
                                    className="w-3.5 h-3.5 me-2  text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <p className=" mt-1 md:mt-0">
                                    Strong antibacterial properties
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/kelppowder.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center text-xs font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2   px-4 md:text-xl md:px-8 pt-2 rounded-md mb-9 md:mb-4 md:text-white md:bg-gray-900 md:py-2">
                            Kelp Powder
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base  list-inside">
                            <li className="flex md:items-center  items-start">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Keeps the system toxin-free
                            </li>
                            <li className="flex md:items-center  items-start">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-3 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <p className=" pt-1 md:pt-0">
                                    Supports a strong urine flow
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <Image
                            src="/bladderwrack.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2 md:mt-4   px-4 md:text-xl md:px-8 pt-2  rounded-md  md:mb-4 mb-0 md:text-white md:bg-gray-900 md:py-2">
                            Bladderwrack Powder
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base  list-inside">
                            <li className="flex md:items-center  items-start  mt-3 md:mt-0 mb-2 md:mb-0">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Strengthens prostate cell
                            </li>
                            <li className="flex md:items-center  items-start  ">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Supports healthy libido levels
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/SawPalmetto.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8 md:mb-2"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2   px-4 md:text-xl md:px-8 pt-2 rounded-md mb-7 md:mb-4 md:text-white md:bg-gray-900 md:py-2">
                            Saw Palmetto
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
                            <li className="flex md:items-center  items-start">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Kidney supporting properties
                            </li>
                            <li className="flex md:items-center  items-start">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <p className=" mt-2"></p>
                                Strong antimicrobial
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <Image
                            src="/pomegranate.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8 md:mb-2"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2   px-4 md:text-xl md:px-8 pt-2  rounded-md  md:mb-4 mb-1 md:text-white md:bg-gray-900 md:py-2">
                            Pomegranate Extract
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
                            <li className="flex md:items-center  items-start">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Maintains healthy blood flow
                            </li>
                            <li className="flex md:items-center  items-start  ">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-8 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <p className=" pt-6 md:pt-0">
                                    Supports testosterone levels
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/Iodine.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2   px-4 md:text-xl md:px-8 pt-2  rounded-md  md:mb-4 mb-1 md:text-white md:bg-gray-900 md:py-2">
                            Iodine
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
                            <li className="flex md:items-center  items-start  mt-3 md:mt-0 mb-2 md:mb-0">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Supports the urinary tract
                            </li>
                            <li className="flex md:items-center  items-start  mt-3 md:mt-0 mb-2 md:mb-0">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-8 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <p className=" pt-6 md:pt-0">
                                    Maintains healthy prostate function
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <Image
                            src="/Shilajit.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2   px-4 md:text-xl md:px-8 pt-2  rounded-md  md:mb-4 mb-1 md:text-white md:bg-gray-900 md:py-2">
                            Shilajit
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
                            <li className="flex md:items-center  items-start  mt-3 md:mt-0 mb-2 md:mb-0">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Strong antioxidant benefits
                            </li>
                            <li className="flex md:items-center  items-start  mt-3 md:mt-0 mb-2 md:mb-0">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Sleep supporting properties
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/neem.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-base text-gray-900  font-bold mt-2   px-4 md:text-xl md:px-8 pt-2  rounded-md  md:mb-4 mb-1 md:text-white md:bg-gray-900 md:py-2">
                            Neem
                        </p>
                        <ul className="max-w-md space-y-1 md:text-base mt-2 list-inside">
                            <li className="flex md:items-center  items-start  mt-3 md:mt-0 mb-2 md:mb-0">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Strong antioxidant benefits
                            </li>
                            <li className="flex md:items-center  items-start  mt-3 md:mt-0 mb-2 md:mb-0">
                                <svg
                                    className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0 mt-2 md:mt-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Sleep supporting properties
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
