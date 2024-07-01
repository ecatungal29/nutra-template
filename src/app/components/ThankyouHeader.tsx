import Link from "next/link";
import React from "react";
import Image from "next/image";
import digistoreLogo from "/public/images/digistore.svg";

export default function ThankYouHeader() {
    return (
        <>
            <header className="w-full md:w-6/12 md:mx-auto  bg-white flex flex-col md:flex-row items-center justify-center my-2">
                <div className="flex justify-center md:justify-start">
                    <Image
                        src={digistoreLogo}
                        alt="Digistore24 Logo "
                        width={100}
                        height={100}
                        className="h-12  md:h-[20px] md:w-[230px]"
                    />
                </div>
                <p className="m md:mt-0 md:ml-3 text-[10px] text-center md:ml-4">
                    Thank you for ordering from Global Scale Commerce with
                    <a
                        href="https://www.digistore24.com"
                        className="text-blue-500 underline ml-1"
                    >
                        Digistore24
                    </a>
                    . On your bank statement you will see a charge from
                    Digistore24.
                </p>
            </header>
        </>
    );
}
