import React from "react";
import Image from "next/image";

export default function UpsellBonus() {
    return (
        <>
            <div className="mx-auto w-11/12 md:w-6/12 mt-20">
                <h1 className="text-xl md:text-4xl text-black font-bold text-center mb-8">
                    Here on our website, you can get instant access to the
                    following digital bonuses
                </h1>
                <p className="text-center mb-5">
                    You can read them online or download them to your computer,
                    phone, or tablet. These two award-winning books will help
                    you heal your body the natural way.
                </p>
            </div>

            <div className="mx-auto flex justify-center max-w-screen-2xl">
                <a
                    href="#"
                    className="flex flex-col items-center bg-[#26144d] border  shadow md:flex-row md:w-9/12 p-5 hover:bg-[#1f0f42] rounded-[40px]"
                >
                    <Image
                        className=" object-cover   w-[218px] md:h-auto md:w-48 rounded-[40px] mr-5"
                        src="/bonus3.jpg"
                        width={500}
                        height={500}
                        priority
                        alt="..."
                    />

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="text-center md:text-left text-xl font-bold tracking-tight text-white">
                            &quot;Your Roadmap to Proactive Urological
                            Care&quot; PDF Guide
                        </h5>
                        <p className="text-center md:text-left mb-2 font-normal text-gray-300">
                            In this bonus, you&apos;ll dive into this
                            comprehensive guide, your roadmap to proactive
                            urological care. You&apos;ll discover essential
                            strategies and insights to navigate your journey
                            towards better health and well-being in the realm of
                            urology.
                        </p>
                        <p className="text-center md:text-left mb-3 font-normal text-gray-400">
                            * This image represents a digital download
                        </p>
                    </div>
                </a>
            </div>

            <div className="mx-auto flex justify-center mt-4 max-w-screen-2xl">
                <a
                    href="#"
                    className="flex flex-col items-center  bg-[#26144d] border rounded-[40px] shadow md:flex-row md:w-9/12 p-5 hover:bg-[#1f0f42]"
                >
                    <Image
                        className="object-cover w-[218px]   md:h-auto md:w-48 rounded-[40px] mr-5"
                        src="/bonus4.jpg"
                        width={500}
                        height={500}
                        priority
                        alt="..."
                    />

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="text-center md:text-left text-xl font-bold tracking-tight text-white">
                            &ldquo;Unlocking Longevity&ldquo; PDF Guide
                        </h5>
                        <p className="text-center md:text-left mb-2 font-normal text-gray-300">
                            In this bonus, you&apos;ll discover the keys to
                            living a longer, healthier life with &apos;Unlocking
                            Longevity.&apos; This insightful book delves into
                            the science and strategies behind extending lifespan
                            and enhancing overall well-being, offering practical
                            tips and wisdom for unlocking your full potential.
                        </p>
                        <p className="text-center md:text-left mb-3 font-normal text-gray-400">
                            * This image represents a digital download
                        </p>
                    </div>
                </a>
            </div>

            <p className="p-5 text-center">
                Just try a few of these things, and you&apos;ll notice a big
                difference in your life. You&apos;ll feel younger, have more
                energy, and think faster.
            </p>
        </>
    );
}
