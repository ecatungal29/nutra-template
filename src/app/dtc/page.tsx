"use client";
import React from "react";
import Image from "next/image";
import TopBanner from "../components/TopBanner";
import Hero from "../components/Hero";
import Timer from "../components/Timer";
import PricingOne from "../components/PricingOne";
import PricingTwo from "../components/PricingTwo";
import PricingThree from "../components/PricingThree";
import Ratings from "../components/Ratings";
import Creator from "../components/Creator";
import Bonuses from "../components/Bonuses";
import GridImage from "../components/GridImage";
import BigBottle from "../components/BigBottle";
import Customer from "../components/Customer";
import Testimonials from "../components/Testimonials";
import Questions from "../components/Questions";
import BigBottleTwo from "../components/BigBottleTwo";
import Seal from "../components/Seal";
import ScientificReference from "../components/ScientificReference";
import Footer from "../components/Footer";
import DtcTimer from "../components/DtcTimer";

export default function DirectToCustomer() {
    const faqs = [
        {
            title: "Is ProstaFlow right for Me?",
            text: "ProstaFlow has provided amazing blood sugar support for men and women in their 30s, 40, 50s and even 70s. Because it was engineered based on teachings of modern science, ProstaFlow formula is very gentle yet very powerful at the same time using pure plant ingredients and natural minerals. And you can rest assured knowing it's manufactured in the United States in a state-of-the-art FDA registered and GMP certified facility.",
            active: false,
        },
        {
            title: "What kind of results can I expect from ProstaFlow?",
            text: "ProstaFlow is a powerful and effective blood sugar support and all-day energy helper. Thousands of people enjoy taking ProstaFlow every day with great results and we have not received a single complaint yet. Once your body adapts to the ingredients you will notice less hunger, more energy and better blood sugar readings.",
            active: false,
        },
        {
            title: "How long will it take to see results?",
            text: "We&apos;re all different and that's why the time it takes to see results varies. Most people start feeling a difference after the first week. In our tests, the best results come when you take ProstaFlow consistently for 3 months (or longer) to allow time to cleanse, restore and renew. Therefore, we strongly recommend you take advantage of our 3 or 6 bottle discount package.",
            active: false,
        },
        {
            title: "What is the best way to take ProstaFlow?",
            text: "Just take a full dropper under your tongue in the morning before breakfast... Or dissolve a dropper in a glass of water and you will love the results and how you&apos;ll feel.",
            active: true,
        },
        {
            title: "What if ProstaFlow doesn&apos;t work for me?",
            text: 'I demand you are enthusiastic with your purchase, not just satisfied. And you won&apos;t know until you try it! So you can use ProstaFlow for 60 days, with my "No Questions Asked 100% Money Back Guarantee". The only way to be totally convinced is to try this amazing formula and experience the results for yourself.',
            active: false,
        },
        {
            title: "Where can I buy ProstaFlow and how quickly can I get it?",
            text: "To make sure you are buying the original product and to ensure the purity of ingredients please buy from the official website only. We&apos;ll ship your order directly to your home or office using a premium carrier such as FedEx or UPS. We strive to ship every order within 24 working hours and to make things easy you will receive an email with your tracking number so that you can follow your package. On average, the package will arrive at your doorstep somewhere between 5 to 10 days for domestic orders.",
            active: false,
        },
        {
            title: "Is my purchase secure? How many times will you charge my card?",
            text: "To purchase ProstaFlow you are only asked for a one time payment right on this page. There are no other future payments needed to benefit from this product. This website is highly secure. We use industry-leading technology (such as SSLs) to keep your information safe and private.",
            active: false,
        },
    ];

    return (
        <>
            <DtcTimer />
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <PricingOne />
                        <PricingTwo />
                        <PricingThree />
                    </div>
                </div>
            </section>

            <Ratings />

            <Creator />

            <Bonuses />
            <GridImage />
            <BigBottle />
            <Customer />
            <Testimonials />

            <div className="lg:w-9/12 mx-auto mt-10 md:mt-28 mb-5">
                <h1 className="headline  text-center px-5">
                    Take advantage of this limited offer to stock up on{" "}
                    <span className="font-bold">ProstaFlow</span> while supplies
                    last!
                </h1>
            </div>

            <section className="bg-white mt-4 md:mt-0">
                <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <PricingOne />
                        <PricingTwo />
                        <PricingThree />
                    </div>
                </div>
            </section>

            <Ratings />

            <div className="w-10/12 mx-auto px-4 md:px-6 py-10 bg-[#2a324b] rounded-[40px] mt-8">
                <h1 className=" text-2xl md:text-4xl font-bold text-white mb-4 text-center">
                    Frequently Asked Questions
                </h1>
                <div className=" divide-slate-200  text-[#2a324b] ">
                    {faqs.map((faq, index) => (
                        <Questions
                            key={index}
                            title={faq.title}
                            id={`faqs-${index}`}
                            active={faq.active}
                        >
                            {faq.text}
                        </Questions>
                    ))}
                </div>
            </div>

            <BigBottleTwo />
            <Seal />

            <div className="lg:w-6/12 mx-auto mt-12 md:text-[28px] lg:text-[31px] xl:text-[43px] text-xl ">
                <h1 className="  text-center font-medium  ">
                    Try <span className="font-bold">ProstaFlow</span> Today
                </h1>
                <h1 className="   text-center font-medium ">
                    At Special Introductory Pricing!
                </h1>
            </div>

            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <PricingOne />
                        <PricingTwo />
                        <PricingThree />
                    </div>
                </div>
            </section>

            <Ratings />
            <ScientificReference />

            {/* <div className="w-full md:w-8/12 lg:w-auto flex justify-center mt-24">
                <Image
                    src="/bottle-label.png"
                    className="image"
                    width={500}
                    height={800}
                    priority
                    alt="..."
                />
            </div> */}

            <Footer />
        </>
    );
}
