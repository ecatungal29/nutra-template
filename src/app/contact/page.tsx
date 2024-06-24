"use client";
import React from "react";
import Image from "next/image";
import Questions from "../components/Questions";

export default function page() {
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
            active: false,
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
            <div className="w-10/12 md:w-9/12 mx-auto">
                <h1 className="text-center font-bold text-4xl mt-10 mb-5">
                    How To Contact Us
                </h1>

                <div className="w-full md:w-8/12 mx-auto">
                    <p className="text-center">
                        Do you have any questions? Please do not hesitate to
                        contact us directly. Our team will come back to you
                        within a matter of hours to help you.
                    </p>
                </div>

                <div className="mt-10 w-full md:w-9/12 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right ">
                        <tbody>
                            <tr className="odd:bg-white even:bg-gray-50  border-b ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 whitespace-nowrap"
                                >
                                    <Image
                                        src="/support-email.png"
                                        className="w-[50px]"
                                        width={1500}
                                        height={1500}
                                        priority
                                        alt="..."
                                    />
                                </th>
                                <td className="font-bold">
                                    Product Email Support
                                </td>
                                <td className="">support@getprostaflow.com</td>
                            </tr>

                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 text-gray-900 whitespace-nowrap"
                                >
                                    <Image
                                        src="/support_phone.png"
                                        className="w-[50px]"
                                        width={1500}
                                        height={1500}
                                        priority
                                        alt="..."
                                    />
                                </th>
                                <td className="font-bold">
                                    Order Email Support
                                </td>
                                <td className="">support@getprostaflow.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="w-9/12 mx-auto">
                    <p className="text-sm mt-4">
                        * Every email call is managed by our friendly customer
                        support agents, and they will reply as soon as possible.
                    </p>
                </div>

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

                <div className="w-full md:w-10/12 mx-auto">
                    <p className="mt-10 text-center text-sm text-gray-600">
                        The information on this website has not been evaluated
                        by the Food and Drug Administration. These products are
                        not intended to diagnose, treat, cure or prevent any
                        disease.
                    </p>
                    <p className="mt-5 text-center text-sm text-gray-600 mb-4">
                        &copy; ProstaFlow Research 2024 All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
}
