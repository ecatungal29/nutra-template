import React from "react";
import Image from "next/image";

export default function BigBottle() {
    return (
        <>
            {/* <div className="mx-auto flex p-5 md:mt-10 md:p-20 items-center border rounded-3xl shadow flex-col md:flex-row w-10/12 md:w-10/12 bg-[#25283b]">
                <div className="flex flex-col justify-between p-4 md:w-7/12">
                    <h5 className="headline text-center font-bold text-white">
                        Every 6 Bottles Order Gets FREE Shipping Too!
                    </h5>
                    <p className="text-lg text-center mt-5 mb-2 font-normal text-white">
                        *96% Of Customers Order 6 Bottles (Our Recommended
                        Option)
                    </p>
                    <p className="text-lg text-center mb-3 font-normal text-white">
                        60-Day Money Back Guarantee 100% Satisfaction Guaranteed
                    </p>

                    <div className="mx-auto justify-center mt-8 flex w-10/12">
                        <div className="md:w-96 w-60 text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6">
                            ORDER NOW!
                        </div>
                    </div>

                    <p className="text-sm mt-2 text-center text-gray-300">
                        60 Day Money-Back Guarantee
                    </p>
                    <div className="flex justify-center items-center max-w-[100%] h-auto">
                        <Image
                            src="/cards.png"
                            className="image"
                            width={200}
                            height={300}
                            priority
                            alt="..."
                        />
                    </div>
                </div>

                <Image
                    className="image object-cover md:w-5/12 rounded-t-lg"
                    src="/images/prostaflow 1 bottle.png"
                    width={900}
                    height={900}
                    priority
                    alt="..."
                />
            </div> */}
            <div className="mx-auto flex flex-col-reverse md:flex-row p-5 md:mt-10 md:p-20 items-center border rounded-3xl shadow w-10/12 md:w-10/12 bg-[#25283b]">
                <div className="flex flex-col justify-between p-4 md:w-7/12 ">
                    <h5 className="headline text-center font-bold text-white">
                        Every 6 Bottles Order Gets FREE Shipping Too!
                    </h5>
                    <p className="text-lg text-center mt-5 mb-2 font-normal text-white">
                        *96% Of Customers Order 6 Bottles (Our Recommended
                        Option)
                    </p>
                    <p className="text-lg text-center mb-3 font-normal text-white">
                        60-Day Money Back Guarantee 100% Satisfaction Guaranteed
                    </p>

                    <div className="mx-auto justify-center mt-8 flex w-10/12">
                        <div className="md:w-96 w-60 text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6">
                            ORDER NOW!
                        </div>
                    </div>

                    <p className="text-sm mt-2 text-center text-gray-300">
                        60 Day Money-Back Guarantee
                    </p>
                    <div className="flex justify-center items-center max-w-[100%] h-auto">
                        <Image
                            src="/cards.png"
                            className="image"
                            width={200}
                            height={300}
                            priority
                            alt="Payment Methods"
                        />
                    </div>
                </div>

                <div className="flex justify-center md:w-5/12 ">
                    <Image
                        className="image object-cover rounded-t-lg w-full h-auto"
                        src="/images/prostaflow 1 bottle.png"
                        width={900}
                        height={900}
                        priority
                        alt="Product Image"
                    />
                </div>
            </div>
        </>
    );
}
