import React from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";

export default function UpsellTestimonialTwo() {
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
                            src="/images/guy4.png"
                            className="  w-[106px] lg:w-[115px] xl:w-[340px]  rounded-full m-7 "
                            width={150}
                            height={150}
                            priority
                            alt="..."
                        />

                        <div className="flex flex-col justify-between pt-3 leading-normal md:ml-5">
                            <p className="text-center md:text-left mb-2 font-normal italic">
                                &quot;Very happy with the results. My urinary
                                flow feels steady and consistent, like a
                                well-maintained stream. And I have more energy.
                                Product is great. Looked up helpful plants,
                                vitamins and minerals and started buying them
                                separately, but found this product and all were
                                included!&quot;
                            </p>
                            <p className="text-center md:text-left mb-3 font-normal">
                                <span className="font-semibold">
                                    Michael T.
                                </span>{" "}
                                - Texas, USA
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
                        className="flex flex-col items-center bg-[#25283b] text-white border rounded-3xl md:flex-row md:w-9/12 mt-6  p-11"
                    >
                        <Image
                            src="/images/guy2.png"
                            className="w-[106px] lg:w-[115px] xl:w-[340px]  rounded-full m-7 "
                            width={150}
                            height={150}
                            priority
                            alt="..."
                        />

                        <div className="flex flex-col justify-between pt-3 leading-normal md:ml-5">
                            <p className="text-center md:text-left mb-2 font-normal italic ">
                                &quot;I really like this product! I&lsquo;ve
                                been taking another prostate health support
                                product for several years that is much more
                                expensive and I thought I&apos;d give this a
                                try. Works just as well as the more expensive
                                but yes, for less cost!! Thank you!&quot;
                            </p>
                            <p className="text-center md:text-left mb-3 font-normal">
                                <span className="font-semibold">David S. </span>{" "}
                                - California, USA
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
