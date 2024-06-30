"use client";
import React from "react";
import UpsellSeal from "../components/UpsellSeal";
import UpsellProtected from "../components/UpsellProtected";
import Footer from "@/app/components/Footer";
import ArrowSectionTwo from "../components/ArrowSection2";
import UpsellBigBottleTwo from "../components/UpsellBigBottle2";
import CopyWriterTwo from "../components/CopyWriter2";
import RecapGridTwo from "../components/RecapGrid2";
import UpsellTestimonialTwo from "../components/UpsellTestimonial2";
import UpsellBonusTwo from "../components/UpsellBonus2";
import UpsellProtectedTwo from "../components/UpsellProtected2";
import ReactPlayer from "react-player/youtube";
import Modal from "react-modal";

export default function UpsellTwo() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl text-[#212529] text-center mt-8">
                Wait...
            </h1>

            <h1 className="text-3xl md:text-4xl text-[#212529] font-bold text-center mt-5 mb-8 mx-3">
                A SPECIAL GIFT FOR NEW CLIENTS ONLY!
            </h1>

            <p className="text-base md:text-2xl text-[#212529]  font-bold text-center mt-5  px-5">
                Urgent Update On Your Order Of ProstaFlow
            </p>
            <p className="text-base md:text-2xl text-[#212529]  text-center mb-8 px-2">
                Do Not Hit The &quot;Back&quot; Button As It Can Cause Errors
                With Your Order.
            </p>
            <div className="relative md:w-full pt-[56.25%] rounded-[40px]  overflow-hidden mx-3">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    width="100%"
                    height="100%"
                    // onProgress={handleTimeUpdate}
                />
            </div>

            <ArrowSectionTwo />
            <UpsellBigBottleTwo />
            <CopyWriterTwo />
            <RecapGridTwo />

            <UpsellBigBottleTwo />
            <UpsellSeal />
            <UpsellTestimonialTwo />
            <UpsellBigBottleTwo />
            <UpsellBonusTwo />

            <div className="mx-auto w-11/12 md:w-8/12 mt-5 mb-32">
                <h1 className="text-2xl md:text-3xl text-black font-bold text-center mb-8">
                    So Now You Understand Why On this Page Only...
                </h1>
                <p className="text-center mb-5">
                    And today only, I&apos;m offering you the very best deal
                    you&apos;ll ever see to stock up on ProstaFlow. This order
                    upgrade is the one and only way to secure yourself the
                    largest savings possible, along with the convenience and
                    peace of mind that comes with picking up an ample supply of
                    ProstaFlow.
                </p>
            </div>

            <UpsellProtectedTwo />

            <div className="mx-auto w-11/12 md:w-8/12 mt-10 mb-10">
                <h1 className="text-xl md:text-2xl text-black font-bold text-center mb-8">
                    However, this truly is a one time only offer.
                </h1>

                <p className="text-center">
                    It&apos;s GONE the moment you leave this page...So take
                    advantage of this unprecedented opportunity to upgrade your
                    order. Remember, your SHIPPING IS 100% FREE!
                </p>
            </div>

            <UpsellBigBottleTwo />
            <Footer />
        </>
    );
}
