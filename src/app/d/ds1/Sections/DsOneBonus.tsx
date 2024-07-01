import React from "react";
import Image from "next/image";

export default function DsOneBonus() {
    return (
        <>
            <div className="mx-auto w-11/12 md:w-8/12 mt-10">
                <h1 className="text-xl md:text-2xl text-black font-bold text-center mb-8">
                    I&lsquo;ll recap the 2 bonuses you get when you order
                    through this page…
                </h1>
            </div>

            <div className="mx-auto flex justify-center max-w-screen-2xl">
                <a
                    href="#"
                    className="flex flex-col items-center bg-[#26144d] border  shadow md:flex-row md:w-9/12 p-5 hover:bg-[#1f0f42] rounded-[40px]"
                >
                    <Image
                        className="object-cover   w-[218px] md:h-auto md:w-48 rounded-[40px] mr-5"
                        src="/bonus3.jpg"
                        width={500}
                        height={500}
                        priority
                        alt="..."
                    />

                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="text-center md:text-left text-xl font-bold tracking-tight text-white">
                            &quot;Natural Herbal Remedies&quot; PDF Guide
                        </h5>
                        <p className="text-center md:text-left mb-2 font-normal text-gray-300">
                            Also called &quot;Natural remedies your doctor never
                            told you about&quot;, is your simple, step-by-step
                            guide to keeping all health problems at bay without
                            ever having to go to the doctor or hospital. This is
                            important for the health and performance of your
                            whole body.
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
                            &ldquo;How to Live to be a Hundred&ldquo; PDF Guide
                        </h5>
                        <p className="text-center md:text-left mb-2 font-normal text-gray-300">
                            In this bonus, you&lsquo;ll learn about rituals used
                            by some of the world&lsquo;s most successful people.
                        </p>
                        <p className="text-center md:text-left mb-2 font-normal text-gray-300">
                            And how new medical discoveries can add 10-20 years
                            to your life.
                        </p>
                        <p className="text-center md:text-left mb-3 font-normal text-gray-400">
                            * This image represents a digital download
                        </p>
                    </div>
                </a>
            </div>

            <p className="p-5 text-center">
                Just try a few of these things, and you&lsquo;ll notice a big
                difference in your life. You&lsquo;ll feel younger an have more
                energy.
            </p>
        </>
    );
}
