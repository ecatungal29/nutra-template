import React from "react";
import Image from "next/image";

export default function ArrowSection() {
    return (
        <>
            <div className="mx-auto flex justify-center mt-5">
                <a
                    href="#"
                    className="w-11/12 md:w-9/12 xl:w-8/12 mx-auto p-10 md:p-5 items-center border rounded-3xl bg-gradient-to-t from-[#544080] to-[#26144d]"
                >
                    <div className="md:mx-2 md:w-12/12 mx-auto ">
                        <p className=" mb-2 leading-normal font-semibold text-white text-center text-2xl md:text-[28px] ">
                            Upgrade Your Order For Insane Savings and Get More
                            ProstaFlow For Just $33 Per Bottle!
                        </p>

                        <p className=" text-center mb-2 mt-10 font-semibold text-white text-2xl md:text-[28px]">
                            Yes, you read that correctly
                        </p>

                        <p className="text-center mb-3 font-normal text-white mt-5">
                            On this page we&apos;re offering our{" "}
                            <span className=" font-bold mr-1">
                                VIP customers
                            </span>
                            such as yourself a one-time only opportunity to add
                            an additional{" "}
                            <span className=" font-bold mr-1">
                                THREE BOTTLES
                            </span>{" "}
                            to your order at the most outrageous discount we
                            will EVER offer...
                        </p>

                        <p className="text-center mb-2 mt-10 font-semibold text-white text-2xl md:text-3xl">
                            $29 per bottle!
                        </p>
                    </div>

                    <div className="flex justify-center -mb-20">
                        <Image
                            src="/down-arrow-blue.png"
                            className="w-[100px] h-[100px] rounded-full border-white border-4"
                            width={1500}
                            height={1500}
                            priority
                            alt="..."
                        />
                    </div>
                </a>
            </div>
        </>
    );
}
