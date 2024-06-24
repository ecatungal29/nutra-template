import Link from "next/link";
import React from "react";
import { HiStar } from "react-icons/hi";

export default function Ratings() {
    return (
        <>
            <div className="hidden md:flex items-center justify-center">
                <p className="text-xl mr-2">Our customers say 4.98/5</p>

                <HiStar className="h-6 w-6 text-yellow-400" />
                <HiStar className="h-6 w-6 text-yellow-400" />
                <HiStar className="h-6 w-6 text-yellow-400" />
                <HiStar className="h-6 w-6 text-yellow-400" />
                <HiStar className="h-6 w-6 text-yellow-400" />

                <p className="text-xl ml-2">Stars based on 2000+ reviews</p>
            </div>

            <div className="flex md:hidden flex-col items-center justify-center">
                <p className="text-lg mb-2">Our customers say 4.98/5</p>

                <div className="flex items-center">
                    <HiStar className="h-6 w-6 text-yellow-400" />
                    <HiStar className="h-6 w-6 text-yellow-400" />
                    <HiStar className="h-6 w-6 text-yellow-400" />
                    <HiStar className="h-6 w-6 text-yellow-400" />
                    <HiStar className="h-6 w-6 text-yellow-400" />
                </div>

                <p className="text-lg mt-2">Stars based on 2000+ reviews</p>
            </div>

            <div className="flex items-center justify-center mt-3">
                <p>
                    <Link href="/" className="underline">
                        View Reviews
                    </Link>{" "}
                    |{" "}
                    <Link href="/" className="underline">
                        View FAQ&lsquo;s
                    </Link>
                </p>
            </div>
        </>
    );
}
