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

export default function UpsellTwo() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl text-black text-center mt-8">
                Wait...
            </h1>

            <h1 className="text-3xl md:text-4xl text-black font-bold text-center mt-5 mb-8 mx-3">
                A SPECIAL GIFT FOR NEW CLIENTS ONLY!
            </h1>

            <p className="text-xl md:text-2xl text-black font-bold text-center mt-5  px-5">
                Urgent Update On Your Order Of ProstaFlow
            </p>
            <p className="text-xl md:text-2xl text-black text-center mb-8 px-5">
                Do Not Hit The &quot;Back&quot; Button As It Can Cause Errors
                With Your Order.
            </p>

            {/* <div className='w-11/12 md:w-9/12 mx-auto p-10 bg-[#26144d] mt-20 rounded-3xl'>
        <h1 className='text-3xl md:text-4xl text-white font-bold text-center mt-5 mb-8'>
          Congratulations!
        </h1>
        <p className='text-center text-gray-100'>Every once in a while, we like to award first-time customers with an earth-shattering discount. By being on this page, you&lsquo;ve unlocked a massive discount, allowing you to get 3 more bottles of ProstaFlow for only $43.5 each!</p>
      </div> */}

            <ArrowSectionTwo />
            <UpsellBigBottleTwo />
            <CopyWriterTwo />
            <RecapGridTwo />

            <UpsellBigBottleTwo />
            <UpsellSeal />
            <UpsellTestimonialTwo />
            <UpsellBigBottleTwo />
            <UpsellBonusTwo />

            <div className="mx-auto w-11/12 md:w-8/12 mt-20 mb-32">
                <h1 className="text-3xl md:text-4xl text-black font-bold text-center mb-8">
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

            <div className="mx-auto w-11/12 md:w-8/12 mt-20 mb-10">
                <h1 className="text-3xl md:text-4xl text-black font-bold text-center mb-8">
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
