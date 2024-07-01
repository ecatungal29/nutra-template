import React from "react";

export default function Hero() {
    return (
        <>
            <div className="mx-auto flex justify-center p-5">
                <div className="p-10 md:p-0 items-center bg-gradient-to-t from-[#384364] to-[#29314A] border rounded-[40px] md:w-11/12 lg:w-9/12 max-w-screen-lg">
                    <div className="md:p-8 md:w-10/12 mx-auto">
                        <p className="text-center mb-2 font-semibold text-white text-2xl md:text-4xl">
                            Was 6 Bottles Too Much?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
