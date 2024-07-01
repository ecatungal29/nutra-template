import React from "react";

export default function Hero() {
    return (
        <>
            <div className="mx-auto flex justify-center p-5">
                <div className="p-10 md:p-0 items-center bg-gradient-to-t from-[#384364] to-[#29314A] border rounded-[40px] md:w-11/12 lg:w-9/12 max-w-screen-lg">
                    <div className="md:p-8 md:w-10/12 mx-auto">
                        <p className="text-center mb-2 font-semibold text-white text-2xl md:text-4xl">
                            Hold On A Moment!
                        </p>
                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            I couldn&apos;t forgive myself if I let you leave
                            without upgrading and making sure you are 100% on
                            your way towards reclaiming your blood sugar health
                            for good.
                        </p>

                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            That is why I&apos;m going to offer you an even
                            BETTER deal right now (do not share this page with
                            anyone!)
                        </p>

                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            Time and time again, our studies have shown that
                            taking ProstaFlow for a minimum of 90 days results
                            in 99.5% reduction in symptoms for all our clients.
                        </p>

                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            So why settle for one bottle when you could have two
                            extra ones for almost nothing?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
