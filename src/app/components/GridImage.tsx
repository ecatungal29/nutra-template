import React from "react";
import Image from "next/image";

export default function GridImage() {
    return (
        <div className="lg:w-9/12  mx-auto mt-24 ">
            <h1 className="headline p-2 md:p-1 text-center text-base md:text-3xl ">
                Inside Every{" "}
                <span className="font-bold text-[#212529]">ProstaFlow</span>{" "}
                Capsule You&lsquo;ll Find:
            </h1>
            <h3 className=" text-base p-5 md:p-1 md:text-base md:mb-10 text-center">
                100% natural and unique ingredients that are clinically proven
                to support the health of your prostate and urinary system
            </h3>

            <div className="flex justify-center p-8 md:p-0 md:w-4/5 md:mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-x-16 gap-y-6 lg:gap-x-[240px] xl:gap-x-[100px] 2xl:gap-x-[0px]  md:gap-24">
                    <div className="flex flex-col items-center">
                        <div className="w-[161px] bg-[#e1e5ee] p-[20px]  rounded-[40px] md:mr-0  md:p-[40px] md:w-[216px]">
                            {" "}
                            <Image
                                src="/Nori_Yaki_Extract_Powder.jpg"
                                className="bg-[#e1e5ee] rounded-[40px] w-[120px] md:w-[136px] md:h-[136px] border-slate-200 "
                                width={900}
                                height={900}
                                priority
                                alt="..."
                            />
                        </div>

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-[6px] md:text-xl text-xs md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-sm md:text-base w-[216px] md:w-[216px]   text-gray-900  font-bold mt-2   px-4 lg:px-0 lg:ml-3    pt-2  rounded-md  md:mb-4 mb-4  md:py-2 ">
                            Nori Yaki Extract Powder
                        </p>

                        <p className=" text-sm ml-1 md:w-[210px] w-[170px]">
                            Supports prostate repair & Maintains healthy urinary
                            system
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <div className="w-[161px] bg-[#e1e5ee] p-[20px] rounded-[40px]  md:ml-0 md:p-[40px] md:w-[216px]">
                            {" "}
                            <Image
                                src="/Wakame_Extract.jpg"
                                className="bg-[#e1e5ee] rounded-[40px] w-[120px] border-slate-200 md:w-[136px] md:h-[136px]"
                                width={900}
                                height={900}
                                priority
                                alt="..."
                            />
                        </div>

                        {/* <p className="text-center text-xs font-bold mt-2 bg-gray-900 text-white px-4 md:text-xl md:px-8 py-2 rounded-md"> */}
                        <p className="text-center  text-sm text-gray-900 w-[216px]  font-bold mt-2   px-4 md:px-0 md:text-base  pt-2 rounded-md mb-4 md:ml- md:py-2 lg:">
                            Wakame Extract
                        </p>

                        <p className=" text-sm mx-3  md:mt-6 md:w-[210px] w-[170px] mt-0 lg:mt-0">
                            Supports normal function of the bladder & Strong
                            antibacterial properties
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[161px] bg-[#e1e5ee] p-[20px] rounded-[40px]  md:mr-0 md:p-[40px] md:w-[216px]">
                            {" "}
                            <Image
                                src="/kelppowder.jpg"
                                className="bg-[#e1e5ee] rounded-[40px] w-[120px] border-slate-200 md:w-[136px] md:h-[136px]"
                                width={900}
                                height={900}
                                priority
                                alt="..."
                            />
                        </div>

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-[6px] md:text-xl text-xs md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-sm w-[200px]  text-gray-900  font-bold mt-2   px-4 md:text-base md:px-8 pt-2  rounded-md  md:mb-4 mb-4  md:py-2 ">
                            Kelp Powder
                        </p>

                        <p className=" text-sm ml-1  md:w-[210px] w-[170px] md:mt-6 lg:mt-0">
                            Keeps the system toxin-free & Supports a strong
                            urine flow
                        </p>
                    </div>
                    {/* Next section/////////// */}
                    <div className="flex flex-col items-center">
                        <div className="w-[161px] bg-[#e1e5ee] p-[20px]  rounded-[40px] md:mr-0  md:p-[40px] md:w-[216px]">
                            {" "}
                            <Image
                                src="/bladderwrack.jpg"
                                className="bg-[#e1e5ee] rounded-[40px] w-[120px] md:w-[136px] md:h-[136px] border-slate-200 "
                                width={900}
                                height={900}
                                priority
                                alt="..."
                            />
                        </div>

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-[6px] md:text-xl text-xs md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-sm md:text-base w-[200px] md:w-[200px] mr-4  text-gray-900  font-bold mt-2 md:px-0   px-4   md:p pt-2  rounded-md  md:mb-4 mb-4  md:py-2 ml-2">
                            Bladderwrack Powder
                        </p>

                        <p className=" text-sm ml-1 md:w-[210px] w-[170px] lg:mt-0">
                            Strengthens prostate cell & Supports healthy libido
                            levels
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <div className="w-[161px] bg-[#e1e5ee] p-[20px] rounded-[40px]  md:ml-0 md:p-[40px] md:w-[216px]">
                            {" "}
                            <Image
                                src="/SawPalmetto.jpg"
                                className="bg-[#e1e5ee] rounded-[40px] w-[120px] border-slate-200 md:w-[136px] md:h-[136px]"
                                width={900}
                                height={900}
                                priority
                                alt="..."
                            />
                        </div>

                        <p className="text-center md:text-center text-sm text-gray-900 w-[200px]   font-bold mt-2   px-4 md:px-0 md:text-base  pt-2 rounded-md  mb-4  md:py-2">
                            Saw Palmetto
                        </p>

                        <p className=" text-sm mx-3  md:mt-0 md:w-[210px] w-[150px]">
                            Kidney supporting properties & Strong antimicrobial
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[161px] bg-[#e1e5ee] p-[20px] rounded-[40px]  md:mr-0 md:p-[40px] md:w-[216px]">
                            {" "}
                            <Image
                                src="/pomegranate.jpg"
                                className="bg-[#e1e5ee] rounded-[40px] w-[120px] border-slate-200 md:w-[136px] md:h-[136px]"
                                width={900}
                                height={900}
                                priority
                                alt="..."
                            />
                        </div>

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-[6px] md:text-xl text-xs md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-sm w-[200px] mr-4 text-gray-900  font-bold mt-2   px-4 md:mx-0  md:text-base md:px-0 pt-2  rounded-md  md:mb-4 mb-4  md:py-2 ">
                            Pomegranate Extract
                        </p>

                        <p className=" text-sm ml-1  md:mt-0 md:w-[210px] w-[170px]">
                            Maintains healthy blood flow & Supports testosterone
                            levels
                        </p>
                    </div>

                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <div className="w-[161px] bg-[#e1e5ee] p-[20px] rounded-[40px] ml-5 md:ml-0 md:p-[40px] md:w-[216px]">
                            {" "}
                            <Image
                                src="/Iodine.jpg"
                                className="bg-[#e1e5ee] rounded-[40px] w-[120px] border-slate-200 md:w-[136px] md:h-[136px]"
                                width={900}
                                height={900}
                                priority
                                alt="..."
                            />
                        </div>

                        <p className="text-center md:text-start text-sm text-gray-900  font-bold mt-2   px-4 md:px-0 md:text-base  pt-2 rounded-md mb-4 md:ml- md:py-2">
                            Iodine
                        </p>

                        <p className=" text-sm mx-3  md:mt-0 md:w-[210px]">
                            Supports the urinary tract & Maintains healthy
                            prostate function
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[161px] bg-[#e1e5ee] p-[20px] rounded-[40px] mr-7 md:mr-0 md:p-[40px] md:w-[216px]">
                            {" "}
                            <Image
                                src="/Shilajit.jpg"
                                className="bg-[#e1e5ee] rounded-[40px] w-[120px] border-slate-200 md:w-[136px] md:h-[136px]"
                                width={900}
                                height={900}
                                priority
                                alt="..."
                            />
                        </div>

                        {/* <p className="text-center font-bold mt-2 bg-gray-900 text-white px-[6px] md:text-xl text-xs md:px-8 py-2 rounded-md"> */}
                        <p className="text-center text-sm w-[200px] mr-4 text-gray-900  font-bold mt-2   px-4 md:mx-0  md:text-base md:px-0 pt-2  rounded-md  md:mb-4 mb-4  md:py-2 ">
                            Shilajit
                        </p>

                        <p className=" text-sm ml-1  md:mt-0 md:w-[210px]">
                            Strong antioxidant benefits & Sleep supporting
                            properties
                        </p>
                    </div>

                    {/* <div className="flex flex-col items-center">
                        <Image
                            src="/neem.jpg"
                            className="w-[200px] rounded-full border-slate-200 border-8"
                            width={900}
                            height={900}
                            priority
                            alt="..."
                        />

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
                    </div> */}
                </div>
            </div>
        </div>
    );
}
