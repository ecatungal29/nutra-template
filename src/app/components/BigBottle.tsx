import React from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

export default function BigBottle() {
    return (
        <>
            <div className="mx-auto max-w-screen-2xl 2xl:  flex flex-col-reverse md:flex-row  md:mt-10  md:p-[48px] lg:p-[58px] 2xl:p-[68px] items-center border rounded-3xl shadow w-10/12 md:w-10/12 bg-[#25283b]">
                <div className=" 2xl:pl-14 xl:w-3/4 text-center md:text-start flex flex-col justify-between gap-x-7 2xl:gap-x-[50px] md:w-7/12  w-[300px] lg:w-[600px] text-[24px] ">
                    <h3 className="    font-semibold  text-white md:text-[24px] xl:text-[36px] ">
                        Every 6 Bottles Order Gets FREE Shipping Too!
                    </h3>
                    <p className="  mt-5 mb-2 text-[16px] font-normal text-white">
                        *96% Of Customers Order 6 Bottles (Our Recommended
                        Option)
                    </p>
                    <p className="text-lg  mb-3 font-normal text-[16px] text-white">
                        60-Day Money Back Guarantee 100% Satisfaction Guaranteed
                    </p>

                    <div className="md:mx-0 mx-auto justify-start  mt-8 flex w-10/12">
                        <div className="md:w-96 w-60 text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6 md:mx-0">
                            <Link
                                to="order-section"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                ORDER NOW!
                            </Link>
                        </div>
                    </div>

                    <p className="text-sm mt-2 text-  text-gray-300">
                        60 Day Money-Back Guarantee
                    </p>
                    <div className="flex justify-center md:justify-start items-center max-w-[100%] mb-4 h-auto">
                        <Image
                            src="/cards.png"
                            className="image "
                            width={200}
                            height={300}
                            priority
                            alt="Payment Methods"
                        />
                    </div>
                </div>

                <div className="flex justify-center   ">
                    <Image
                        className=" object-cover rounded-t-lg  w-[350px]  2xl:ml-5  h-[300px] xl:h-[500px]"
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
