import React from "react";
import Image from "next/image";

export default function RecapGrid() {
    return (
        <div className="w-11/12 md:w-9/12 mx-auto mt-10 bg-[#1e103e] border rounded-3xl p-5 shadow md:px-20 md:py-10  max-w-screen-xl">
            <div className="w-full md:w-10/12 mx-auto mb-5">
                <h1 className="  md:p-0 md:mb-10 text-center text-3xl text-[28px] text-white font-bold">
                    These benefits include:
                </h1>
            </div>

            <div className="flex justify-center p-8 md:p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="mt-5 p-3 border border-white flex flex-col items-center bg-gradient-to-t from-[#26144d] to-[#26144d] rounded-xl">
                        <div
                            className="-mt-9 bg-[#26144d] border border-white text-white font-bold rounded-full"
                            style={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            1
                        </div>
                        <p className="text-center text-base mt-2 mb-4 text-white">
                            Maintaining Healthy Prostate Health Levels *
                        </p>
                    </div>

                    <div className="mt-5 p-3 border border-white flex flex-col items-center bg-gradient-to-t from-[#26144d] to-[#26144d] rounded-xl">
                        <div
                            className="-mt-9 bg-[#26144d] border border-white text-white font-bold rounded-full"
                            style={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            2
                        </div>
                        <p className="text-center text-base mt-2 mb-4 text-white">
                            Supporting Perfect Bladder Function Naturally *
                        </p>
                    </div>

                    <div className="mt-5 p-3 border border-white flex flex-col items-center bg-gradient-to-t from-[#26144d] to-[#26144d] rounded-xl">
                        <div
                            className="-mt-9 bg-[#26144d] border border-white text-white font-bold rounded-full"
                            style={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            3
                        </div>
                        <p className="text-center text-base mt-2 mb-4 text-white">
                            Aiding Energy Production *
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
