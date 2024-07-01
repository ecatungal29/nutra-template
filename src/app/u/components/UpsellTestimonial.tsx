import React from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";

export default function UpsellTestimonial() {
    return (
        <>
            <div className="mx-auto w-11/12 md:w-6/12 mt-10">
                <h1 className="text-xl md:text-3xl md:w-12/12 text-black font-bold text-center mt-5 mb-8">
                    Here&lsquo;s what clients no. 324 and no. 1978 in our trial
                    had to say about ProstaFlow:
                </h1>
            </div>

            <>
                <div className="mx-auto flex justify-center p-6 md:p-0">
                    <a
                        href="#"
                        className="flex flex-col items-center bg-[#25283b] text-white border rounded-3xl md:flex-row md:w-9/12 mt-6  p-11"
                    >
                        <Image
                            src="/images/guy1.png"
                            className="  w-[106px] lg:w-[115px] xl:w-[340px]  rounded-full m-7 "
                            width={150}
                            height={150}
                            priority
                            alt="..."
                        />

                        <div className="flex flex-col justify-between p-3 leading-normal md:ml-5">
                            <p className="text-center md:text-left mb-2 font-normal italic ">
                                &quot;Incredible results! I&lsquo;m giving this
                                supplement a resounding 5 stars. It delivers
                                exactly as promised! My urinary discomfort has
                                significantly improved, and I&lsquo;ve noticed a
                                remarkable drop in my prostate-related symptoms.
                                With continued use, I&lsquo;m optimistic about
                                the possibility of reducing my reliance on
                                prescription medications. After trying numerous
                                supplements without success, I&lsquo;m thrilled
                                to have finally found one that truly works.
                                ProstaFlow has exceeded all my
                                expectations!&quot;
                            </p>
                            <p className="text-center md:text-left mb-3 font-normal">
                                <span className="font-semibold">
                                    Christopher M.{" "}
                                </span>{" "}
                                - New York, USA
                            </p>

                            <div className="flex md:justify-start justify-center">
                                <HiStar className="h-5 w-5 text-yellow-400" />
                                <HiStar className="h-5 w-5 text-yellow-400" />
                                <HiStar className="h-5 w-5 text-yellow-400" />
                                <HiStar className="h-5 w-5 text-yellow-400" />
                                <HiStar className="h-5 w-5 text-yellow-400" />

                                <p className="text-base ml-2">
                                    Verified Purchase
                                </p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="mx-auto flex justify-center p-6 md:p-0">
                    <a
                        href="#"
                        className="flex flex-col items-center bg-[#25283b] text-white border rounded-3xl md:flex-row md:w-9/12 mt-6 p-11"
                    >
                        <Image
                            src="/images/guy3.png"
                            className="  w-[106px] lg:w-[115px] xl:w-[340px]  rounded-full m-7 "
                            width={150}
                            height={150}
                            priority
                            alt="..."
                        />

                        <div className="flex flex-col justify-between pt-3 leading-normal md:ml-5">
                            <p className="text-center md:text-left mb-2 font-normal italic">
                                &quot;I have tried this for almost 3 months
                                already. It worked!!! Not only has it
                                effectively addressed my prostate health
                                concerns, but it has also notably improved my
                                overall well-being. I&lsquo;ve experienced a
                                noticeable reduction in discomfort and urinary
                                frequency, providing much-needed relief. I
                                wholeheartedly recommend this!&quot;
                            </p>
                            <p className="text-center md:text-left mb-3 font-normal">
                                <span className="font-semibold">Brian K. </span>{" "}
                                - Pennsylvania, USA
                            </p>

                            <div className="flex md:justify-start justify-center">
                                <HiStar className="h-5 w-5 text-yellow-400" />
                                <HiStar className="h-5 w-5 text-yellow-400" />
                                <HiStar className="h-5 w-5 text-yellow-400" />
                                <HiStar className="h-5 w-5 text-yellow-400" />
                                <HiStar className="h-5 w-5 text-yellow-400" />

                                <p className="text-base ml-2">
                                    Verified Purchase
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </>
        </>
    );
}
