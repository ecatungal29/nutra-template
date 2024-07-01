"use client";
import React from "react";
import UpsellVideo from "../components/UpsellVideo";
import ArrowSection from "../components/ArrowSection";
import UpsellBigBottle from "../components/UpsellBigBottle";
import CopyWriter from "../components/CopyWriter";
import RecapGrid from "../components/RecapGrid";
import UpsellSeal from "../components/UpsellSeal";
import UpsellTestimonial from "../components/UpsellTestimonial";
import UpsellBonus from "../components/UpsellBonus";
import UpsellProtected from "../components/UpsellProtected";
import Footer from "@/app/components/Footer";

export default function UpsellOne() {
    return (
        <>
            <h1 className="text-3xl md:text-5xl text-[#212529] text-center mt-8">
                Wait...
            </h1>
            <h1 className="text-3xl md:text-4xl  text-[#212529] font-bold text-center mt-5 mb-8 mx-3">
                A SPECIAL GIFT FOR NEW CLIENTS ONLY!
            </h1>

            <p className="text-xl md:text-2xl text-black font-bold text-center mt-5  px-5">
                Get 3 Bottles For Only $29 per bottle - Save $120!
            </p>
            <p className="text-base md:text-2xl text-[#212529]  text-center mb-8 px-2">
                Plus: Claim Your Exclusive Free Digital Bonuses
            </p>

            {/* <UpsellVideo /> */}

            <ArrowSection />
            <UpsellBigBottle />
            <CopyWriter />
            <RecapGrid />

            <div className="w-full md:w-9/12 mt-10 mx-auto ">
                <div className="w-full mx-auto md:w-11/12">
                    <h1 className="text-2xl text-center md:text-[28px] font-bold mb-5 mx-6">
                        You&apos;ll shrink your swollen prostate for good
                    </h1>

                    <p className="px-5 text-base mb-3">
                        You&apos;ll enjoy a steady and powerful urine flow, have
                        more energy and finally enjoy a restful sleep without
                        having to wake up dozens of times to go to the bathroom.
                        That&apos;s because this powerful, natural ingredients
                        in ProstaFlow work hard to maintain a healthy prostate
                        well into old age.
                    </p>

                    <p className="px-5 text-base mb-3">
                        Also, I know from my own experience that you won&apos;t
                        want to stop using ProstaFlow once you start
                        experiencing its amazing benefits.
                    </p>

                    <p className="px-5 text-base mb-3">
                        You&apos;ll order more when you run out, so it makes
                        sense to add three more discounted bottles right now at
                        a huge discount.
                    </p>

                    <p className="px-5 text-base mb-3">
                        Number four: I don&apos;t want you to be disappointed
                        when you come back to reorder and find out that
                        we&apos;re out of stock. This does happen, and I&apos;d
                        hate for you to start using ProstaFlow and then run out
                        and have to wait weeks or even months to get more.
                    </p>

                    <p className="px-5 text-base mb-3">
                        And the fifth reason is that I want you to save as much
                        money as you can. Our suppliers have already told us
                        that the price of some of ProstaFlow&apos;s ingredients,
                        especially the more exotic ones that are always in short
                        supply, will go up soon.
                    </p>

                    <p className="px-5 text-base mb-3">
                        This means that our next batch will probably be more
                        expensive, so stock up now! Since you&apos;re ordering
                        more than one bottle,{" "}
                        <span className=" font-semibold">SHIPPING IS FREE</span>
                        , and to make this the best deal you&apos;ve seen in a
                        long time, you&apos;ll also get several free digital
                        bonuses while we send you your ProstaFlow.
                    </p>
                </div>
            </div>

            <UpsellBigBottle />
            <UpsellSeal />
            <UpsellTestimonial />
            <UpsellBigBottle />
            <UpsellBonus />

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

            <UpsellProtected />

            <div className="mx-auto w-11/12 md:w-8/12 mt-10 mb-10">
                <h1 className="text-xl md:text-2xl text-black font-bold text-center mb-8">
                    This truly is a one time only offer for new customers only!
                </h1>

                <p className="text-center">
                    It&apos;s GONE the moment you leave this page...So take
                    advantage of this unprecedented opportunity to upgrade your
                    order.Remember, your SHIPPING IS 100% FREE!
                </p>
            </div>

            <UpsellBigBottle />
            <Footer />
        </>
    );
}
