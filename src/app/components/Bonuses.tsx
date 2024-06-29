import React from "react";
import Image from "next/image";
import { useRef } from "react";
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";

export default function Bonuses() {
    const orderRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <div className="flex justify-center  ">
                <div className=" md:w-9/12  w-11/12 mt-10 bg-gradient-to-b from-[#2a324b] via-[#33578e] to-[#37719c] rounded-[40px] mx-3">
                    <h1 className="headline lg:text-3xl text-white font-bold text-center p-5">
                        Order 6 Bottles Or 3 Bottles And Get 2 Free Bonuses!
                    </h1>
                    <div className="text-center xl:w-[700px] md:flex md:text-left md:w-[448px]   bg-[#2a324b] rounded-[40px]  m-4 py-6  md:mx-auto ">
                        <a
                            href="#"
                            className="flex justify-center md:pt-8 md:ml-12 md:mr-5"
                        >
                            <Image
                                className="w-[112px] xl:w-[176px] xl:h-[176px]  lg:w-[226px] lg:h-[116px] md:w-[80px] md:h-[80px] md:ml-6   rounded-[40px]  xl:mb-9"
                                src="/book1.jpg"
                                width={180}
                                height={0}
                                priority
                                alt=""
                            />
                        </a>
                        <div className="p-5  text-wrap  xl:my-9">
                            <a href="#">
                                <h5 className="mb-2 md:text-start xl:text-4xl text-2xl font-bold text-[#ffffff]">
                                    Free Bonus #1
                                </h5>
                            </a>
                            <p className="text-wrap mb-2 px-8 xl:text-xl md:px-0 font-normal md:text-start text-[#ffffff]">
                                Your Roadmap to Proactive Urological Care
                            </p>
                            <p className="text-sm md:text-start text-[#ffffff]">
                                (instant download)
                            </p>
                        </div>
                    </div>
                    <div className="text-center xl:w-[700px] md:flex md:text-left md:w-[448px]   bg-[#2a324b] rounded-[40px]  m-4 py-6  md:mx-auto ">
                        <a
                            href="#"
                            className="flex justify-center md:pt-8 md:ml-12 md:mr-5 lg:mb-6"
                        >
                            <Image
                                className="w-[112px] xl:w-[176px] xl:h-[176px]  lg:w-[116px] lg:h-[116px] md:w-[80px] md:h-[80px] md:ml-6    rounded-[40px]  xl:mb-9"
                                src="/book2.jpg"
                                width={180}
                                height={0}
                                priority
                                alt=""
                            />
                        </a>
                        <div className="p-5  text-wrap  xl:my-9 lg:my-5">
                            <a href="#">
                                <h5 className="mb-2 md:text-start xl:text-4xl text-2xl font-bold text-[#ffffff]">
                                    Free Bonus #2
                                </h5>
                            </a>
                            <p className="text-wrap mb-2 xl:text-xl px-8 md:px-0 font-normal md:text-start text-[#ffffff]">
                                Revitalize Your Libido
                            </p>
                            <p className="text-sm md:text-start text-[#ffffff]">
                                (instant download)
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto justify-center mt-4 flex">
                        <button className="w-96 text-black shadow-md hover:cursor-pointer bg-gradient-to-t from-[#d9ba40] via-[#facb16] to-[#facb16] font-bold rounded-full text-lg px-5 py-4 text-center mx-6">
                            <Link
                                to="order-section"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                ORDER NOW!
                            </Link>
                        </button>
                    </div>
                    <p className="text-sm mt-2 text-center">
                        60 Day Money-Back Guarantee
                    </p>
                    <div className="flex justify-center items-center mb-6">
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
            </div>
        </>
    );
}
