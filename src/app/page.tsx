"use client";
import Hero from "./components/Hero";
import Questions from "./components/Questions";
import Ratings from "./components/Ratings";
import PricingOne from "./components/PricingOne";
import PricingTwo from "./components/PricingTwo";
import PricingThree from "./components/PricingThree";
import TopBanner from "./components/TopBanner";
import Timer from "./components/Timer";
import Creator from "./components/Creator";
import Bonuses from "./components/Bonuses";
import GridImage from "./components/GridImage";
import BigBottle from "./components/BigBottle";
import Customer from "./components/Customer";
import Testimonials from "./components/Testimonials";
import BigBottleTwo from "./components/BigBottleTwo";
import Seal from "./components/Seal";
import ScientificReference from "./components/ScientificReference";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 0 * 60 * 1000); // 25 minutes in milliseconds

        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once on component mount

    const faqs = [
        {
            title: "Is ProstaFlow right for Me?",
            text: "ProstaFlow has been a remarkable ally for men seeking to support their prostate health across a wide spectrum of ages—from individuals in their 30s to their 70s. Crafted with precision, drawing from the latest advancements in scientific research, the ProstaFlow formula strikes a harmonious balance between gentleness and potency. Harnessing the therapeutic properties of pure plant ingredients and natural minerals, it offers robust support for prostate wellness. Moreover, ProstaFlow is manufactured in the United States within a state-of-the-art facility registered with the FDA and certified by GMP, ensuring unparalleled quality and safety standards.",
            active: false,
        },
        {
            title: "What kind of results can I expect from ProstaFlow?",
            text: "ProstaFlow is a potent and effective prostate health supplement designed to support your well-being throughout the day. Countless individuals have embraced ProstaFlow as part of their daily routine, experiencing exceptional outcomes without a single complaint. As your body acclimates to its nourishing ingredients, you can anticipate reduced discomfort, heightened vitality, and improved prostate health.",
            active: false,
        },
        {
            title: "How long will it take to see results?",
            text: "As individuals, our bodies respond uniquely, hence the time it takes to observe results may vary. However, many individuals report noticing a positive difference within the first week of incorporating ProstaFlow into their routine. Based on our studies, optimal results are typically achieved with consistent use over a period of three months or longer, allowing for comprehensive cleansing, restoration, and renewal of prostate health. To maximize your journey to well-being, we highly recommend taking advantage of our discounted 3 or 6 bottle packages.",
            active: false,
        },
        {
            title: "What is the best way to take ProstaFlow?",
            text: "For optimal results, we recommend taking two capsules of ProstaFlow in the morning before breakfast. It's essential to swallow the capsules with water or your preferred beverage. Consistency is key to experiencing the full benefits of ProstaFlow. With each capsule, you're one step closer to enhanced prostate health and overall well-being.",
            active: true,
        },
        {
            title: "What if ProstaFlow doesn't work for me?",
            text: 'Your satisfaction is paramount to us—we want you to be genuinely thrilled with your purchase, not merely satisfied.  We believe in the efficacy of ProstaFlow, but we understand that individual responses may vary.  That\'s why we offer a 60-day "No Questions Asked 100% Money Back Guarantee."  We encourage you to try ProstaFlow risk-free and experience its remarkable benefits firsthand.  Your journey to optimal prostate health begins with ProstaFlow.',
            active: false,
        },
        {
            title: "Where can I buy ProstaFlow and how quickly can I get it?",
            text: "For your assurance of authenticity and ingredient purity, we strongly recommend purchasing ProstaFlow exclusively from our official website.  Your order will be shipped directly to your home or office using trusted premium carriers such as FedEx or UPS.  We endeavor to dispatch every order within 24 working hours for prompt delivery.  To streamline your experience, you'll receive an email containing your tracking number, allowing you to monitor your package's journey.  Typically, domestic orders are delivered to your doorstep within an average of 5 to 10 days.",
            active: false,
        },
        {
            title: "Is my purchase secure? How many times will you charge my card?",
            text: "Rest assured, when you purchase ProstaFlow, you're only required to make a one-time payment directly on this page.  There are no additional charges or future payments necessary to enjoy the benefits of this product.  Our website prioritizes your security and privacy.  We utilize cutting-edge technology, including SSL encryption, to safeguard your information and ensure a highly secure transaction process.",
            active: false,
        },
    ];

    return (
        <>
            <Hero />
            <div>
                {showDiv ? (
                    <>
                        <section className="bg-gray-200 pb-10">
                            <div className="md:w-8/12 w-9/12 mx-auto pt-5">
                                {/* Show on desktop */}
                                <h3 className="hidden md:block headline md:text-3xl  text-center p-5 border-2">
                                    Claim your Discounted{" "}
                                    <span className="font-bold mr-2">
                                        ProstaFlow
                                    </span>
                                    Below While Stock Lasts
                                </h3>

                                {/* Show on mobile */}
                                <h1 className="md:hidden block headline   text-center p-5">
                                    Claim your Discounted
                                    <br />
                                    <span className="font-bold">
                                        ProstaFlow
                                    </span>{" "}
                                    Below
                                    <br /> While Stock Lasts
                                </h1>
                            </div>

                            <Timer />
                            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                                {/* Show on desktop */}
                                <div className="hidden lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                                    <PricingOne />
                                    <PricingTwo />
                                    <PricingThree />
                                </div>

                                {/* Show on mobile */}
                                <div className="lg:hidden space-y-8">
                                    <PricingTwo />
                                    <PricingThree />
                                    <PricingOne />
                                </div>
                            </div>

                            <Ratings />
                        </section>

                        <Creator />

                        <Bonuses />
                        <GridImage />
                        <BigBottle />
                        <Customer />
                        <Testimonials />

                        <div className="lg:w-9/12 mx-auto mt-10 md:mt-28 mb-5">
                            <h1 className="headline  text-center px-5">
                                Take advantage of this limited offer to stock up
                                on <span className="font-bold">ProstaFlow</span>{" "}
                                while supplies last!
                            </h1>
                        </div>

                        <Timer />
                        <div
                            className="bg-white mt-10 md:mt-0"
                            id="order-section"
                        >
                            <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                                {/* Show on desktop */}
                                <div className="hidden lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                                    <PricingOne />
                                    <PricingTwo />
                                    <PricingThree />
                                </div>

                                {/* Show on mobile */}
                                <div className="lg:hidden space-y-8">
                                    <PricingTwo />
                                    <PricingThree />
                                    <PricingOne />
                                </div>
                            </div>
                        </div>

                        <Ratings />

                        <div className="w-10/12 mx-auto px-4 md:px-6 py-24">
                            <h1 className=" text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                                Frequently Asked Questions
                            </h1>
                            <div className="divide-y divide-slate-200">
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

                        <div className="lg:w-6/12 mx-auto mt-12">
                            <h1 className="headline  text-center p-5">
                                Try{" "}
                                <span className="font-bold">ProstaFlow</span>{" "}
                                Today At Special Introductory Pricing!
                            </h1>
                        </div>

                        <section className="bg-white">
                            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                                {/* Show on desktop */}
                                <div className="hidden lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                                    <PricingOne />
                                    <PricingTwo />
                                    <PricingThree />
                                </div>

                                {/* Show on mobile */}
                                <div className="lg:hidden space-y-8">
                                    <PricingTwo />
                                    <PricingThree />
                                    <PricingOne />
                                </div>
                            </div>
                        </section>

                        <Ratings />
                    </>
                ) : (
                    <div></div>
                )}
            </div>

            <ScientificReference />

            {/* <div className="w-full md:w-8/12 lg:w-auto flex justify-center mt-24">
        <Image
          src="/bottle-label.png"
          className='image'
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
