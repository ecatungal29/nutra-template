"use client";
import React, { useEffect, useState } from "react";

type AccordionpProps = {
    children: React.ReactNode;
    title: string;
    id: string;
    active?: boolean;
};

export default function Questions({
    children,
    title,
    id,
    active = false,
}: AccordionpProps) {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

    useEffect(() => {
        setAccordionOpen(active);
    }, []);

    return (
        <div className="py-2">
            <h2>
                <button
                    className="flex items-center justify-between bg-white px-4 rounded-[40px] w-full text-left font-semibold py-2"
                    onClick={(e) => {
                        e.preventDefault();
                        setAccordionOpen(!accordionOpen);
                    }}
                    aria-expanded={accordionOpen}
                    aria-controls={`accordion-text-${id}`}
                >
                    <span>{title}</span>
                    <svg
                        className="  fill-[#2a324b]  shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`ttransform origin-center transition duration-200 ease-out ${
                                accordionOpen && "!rotate-180"
                            }`}
                        />
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                accordionOpen && "!rotate-180"
                            }`}
                        />
                    </svg>
                </button>
            </h2>
            <div
                id={`accordion-text-${id}`}
                role="region"
                aria-labelledby={`accordion-title-${id}`}
                className={`grid text-sm text-white overflow-hidden transition-all duration-300 ease-in-out ${
                    accordionOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <p className="pb-3">{children}</p>
                </div>
            </div>
        </div>
    );
}
