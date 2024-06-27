import Link from "next/link";
import React from "react";

export default function TopBanner() {
    return (
        <div className="md:mb-5 text-center md:text-base py-3 px-3 w-full  text-sm text mx-auto md:rounded-md">
            <span className="text-white font-bold">
                IMPORTANT HEALTH UPDATE May take up to 10 seconds to load. Make
                sure your sound is on.
            </span>
        </div>
    );
}
