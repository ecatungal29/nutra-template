import React from "react";
import Image from "next/image";

export default function UpsellSeal() {
    return (
        <>
            <div className="mx-auto flex justify-center p-5 md:p-0 max-w-screen-2xl">
                <div className=" mt-20 p-10 items-center bg-gradient-to-t from-[#384364] to-[#29314A] border rounded-3xl md:w-9/12">
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

                    <div className="md:p-5 md:w-12/12 mx-auto">
                        <p className="text-center mb-2  text-white text-2xl md:text-[28px]">
                            &ldquo;No Questions Asked&ldquo; Satisfaction
                            Guarantee
                        </p>
                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            Don&lsquo;t forget that you can take advantage of
                            this chance with full confidence because you are
                            always covered by our 60-day, 100% money-back
                            guarantee. This means that you have nothing to lose
                            and a lot of money to save.
                        </p>

                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            This offer is only good once. Once you leave this
                            page, you won&lsquo;t be able to get it anymore, so
                            take advantage of this rare chance to upgrade your
                            ProstaFlow order.
                        </p>

                        <p className="text-center mb-3 font-normal text-gray-200 mt-5">
                            Today, shipping is completely free and you&lsquo;ll
                            be able to access your digital bonuses in just a
                            moment.
                        </p>

                        <div className="flex justify-center">
                            <Image
                                src="/certifications.png"
                                className="w-[320] mt-5"
                                width={320}
                                height={0}
                                priority
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
