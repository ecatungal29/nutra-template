import React from "react";
import Image from "next/image";

export default function Customer() {
    return (
        <>
            <div className="md:w-9/12 mx-auto mt-24">
                <h1 className="headline font-bold text-center px-12 md:px-0 mb-2 md:mb-8">
                    Real Customers Real Life Changing Results
                </h1>
            </div>

            <div className="flex justify-center p-8 md:p-0 md:w-10/12 mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/guy1.png"
                            className="image w-full h-auto rounded-3xl"
                            width={500}
                            height={500}
                            priority
                            alt="..."
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/guy2.png"
                            className="image w-full h-auto rounded-3xl"
                            width={500}
                            height={500}
                            priority
                            alt="..."
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/guy3.png"
                            className="image w-full h-auto rounded-3xl "
                            width={500}
                            height={500}
                            priority
                            alt="..."
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/guy4.png"
                            className="image w-full h-auto rounded-3xl"
                            width={500}
                            height={500}
                            priority
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
