import React from "react";
import Image from "next/image";

export default function ArrowSection() {
    return (
        <>
            <div className="mx-auto flex justify-center mt-5 md:mx-4 lg:mx-6 ">
                <a
                    href="#"
                    className="w-11/12  mx-auto p-10 items-center border rounded-[40px] bg-gradient-to-t from-[#544080] to-[#26144d] max-w-screen-lg md:w-11/12 md:p-0  lg:w-9/12"
                >
                    <div className="md:p-5 md:w-8/12 mx-auto md:mt-3">
                        <p className="text-center mb-2 font-semibold text-white text-xl md:text-2xl ">
                            Take Advantage & Get 3 Additional Bottles At Just
                        </p>

                        <p className="text-center font-semibold text-white text-2xl md:text-2xl lg:text-3xl mt-4 mb-4">
                            $33 per bottle!
                        </p>
                        <p className="text-center font-normal md:text-3xl text-lg text-gray-200 mb-10">
                            Plus Extra Exciting Bonuses!
                        </p>
                    </div>

                    <div className="flex justify-center -mb-16">
                        <div className=" border-white border-[8px] rounded-full m-0">
                            <Image
                                src="/down-arrow-blue.png"
                                className="md:w-[100px] w-[50px] h-[50px] md:h-[100px] rounded-full m-0 "
                                width={1500}
                                height={1500}
                                priority
                                alt="..."
                            />
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
