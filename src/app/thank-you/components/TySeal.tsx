import React from "react";
import Image from "next/image";

export default function TySeal() {
    return (
        <>
            <div className="mx-auto flex justify-center p-5">
                <a
                    href="#"
                    className="p-10 items-center bg-gradient-to-t from-[#384364] to-[#29314A] border rounded-3xl md:w-9/12"
                >
                    <div className="flex justify-center -mt-32">
                        <Image
                            src="/seal.png"
                            className="w-[200px] h-[200px] rounded-full"
                            width={1500}
                            height={1500}
                            priority
                            alt="..."
                        />
                    </div>

                    <div className="md:p-5 md:w-10/12 mx-auto">
                        <p className="text-center mb-2 font-semibold text-white text-2xl md:text-4xl">
                            100% Satisfaction Guaranteed 60-Day Money Back
                            Guarantee
                        </p>
                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            Here at ProstaFlow, we treat our customers like
                            family, and your satisfaction is our top priority.
                            We&apos;re confident that our product will help you
                            on your journey towards better health, and we
                            encourage you to take ProstaFlow consistently as
                            directed.
                        </p>

                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            Keep in mind that it may take a few weeks for the
                            results to become noticeable, but rest assured that
                            with each day, you&apos;re making progress towards
                            your goals. We&apos;re here to support you every
                            step of the way.
                        </p>

                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            In the rare event that you&apos;re not completely
                            satisfied with ProstaFlow, we want you to know that
                            we&apos;ve got your back. We offer a satisfaction
                            guarantee on every order. Simply reach out to us
                            within 60 days of receiving the product, and
                            we&apos;ll help you with the return of the remaining
                            ProstaFlow supply. Please note that shipping and
                            handling fees are not included.
                        </p>

                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            If you have any questions or concerns at any time,
                            don&apos;t hesitate to contact us using the phone
                            number or e-mail address provided on our website.
                            We&apos;re always here for you, just like family.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/certifications.png"
                            className="w-[300px]"
                            width={1500}
                            height={1500}
                            priority
                            alt="..."
                        />
                    </div>
                </a>
            </div>
        </>
    );
}
