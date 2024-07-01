import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        url: string | URL | undefined
    ) => {
        event.preventDefault();
        window.open(
            url,
            "_blank",
            "width=800,height=600,scrollbars=yes,status=yes,resizable=yes,screenx=0,screeny=0"
        );
    };
    return (
        <>
            <footer className="bg-gradient-to-r from-[#25283b] via-[#3e3f67] to-[#2a2b46] mt-10">
                <div className="w-full mx-auto max-w-screen-xl p-4 items-center">
                    <p className="text-center text-sm text-gray-200">
                        Digistore24 is the retailer of products on this site.
                        Digistore24&apos;s role as retailer does not constitute
                        an endorsement, approval or review of these products or
                        any claim, statement or opinion used in promotion of
                        these products.
                    </p>
                </div>

                <div className="w-full mx-auto max-w-screen-xl items-center">
                    <p className="text-center text-gray-200 text-sm">
                        For Product Support, please contact the vendor{" "}
                        <Link
                            href="\"
                            className="text-white font-bold cursor-pointer"
                        >
                            HERE
                        </Link>
                        .
                    </p>
                </div>

                <div className="w-full mx-auto max-w-screen-xl items-center">
                    <p className="text-center text-gray-200 text-sm">
                        For Order Support, please contact Digistore24{" "}
                        <Link
                            href="\"
                            className="text-white font-bold cursor-pointer"
                        >
                            HERE
                        </Link>
                        .
                    </p>
                </div>

                <div className="mt-10 w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center">
                        &copy; 2024{" "}
                        <a href="/" className="hover:underline">
                            ProstaFlow
                        </a>
                        . All Rights Reserved.
                    </span>

                    <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
                        <li>
                            <Link
                                href="/contact"
                                target="_blank"
                                className="hover:underline me-4 md:me-6"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                target="_blank"
                                className="hover:underline me-4 md:me-6"
                            >
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/privacy"
                                target="_blank"
                                className="hover:underline me-4 md:me-6"
                            >
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/return-policy"
                                target="_blank"
                                className="hover:underline me-4 md:me-6"
                            >
                                Return Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/shipping-policy"
                                target="_blank"
                                className="hover:underline me-4 md:me-6"
                            >
                                Shipping
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/disclaimer"
                                target="_blank"
                                className="hover:underline me-4 md:me-6"
                            >
                                Disclaimer
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/unsubscribe"
                                target="_blank"
                                className="hover:underline"
                            >
                                Report Spam
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className=" bg-white flex items-center justify-center h-10">
                    <Image
                        className=""
                        src="/images/digistore.svg"
                        width={100}
                        height={100}
                        priority
                        alt="..."
                        style={{ height: "50px" }}
                    />
                    <Image
                        className=""
                        src="/images/secure.svg"
                        width={100}
                        height={100}
                        priority
                        alt="..."
                        style={{ height: "20px" }}
                    />
                    <p className=" -ml-9 underline text-blue-500">SECURE</p>
                </div>
                <div className="bg-white flex items-center justify-center h-10 text-sm">
                    <p className="text-center md:text-left text-[10px]">
                        2024 © Digistore24 Inc. (United States) Inc. and/or its
                        licensors. Review legal terms of use{" "}
                        <a
                            href="https://www.digistore24.com/info/terms/2?lang=en"
                            onClick={(event) =>
                                handleClick(
                                    event,
                                    "https://www.digistore24.com/info/terms/2?lang=en"
                                )
                            }
                            className="cursor-pointer ml-1 mr-1 text-blue-500 underline"
                        >
                            here
                        </a>{" "}
                        and privacy policy{" "}
                        <a
                            href="https://www.digistore24.com/info/privacy?lang=en"
                            onClick={(event) =>
                                handleClick(
                                    event,
                                    "https://www.digistore24.com/info/privacy?lang=en"
                                )
                            }
                            className="cursor-pointer ml-1 text-blue-500 underline"
                        >
                            here
                        </a>
                        . Contact us{" "}
                        <a
                            href="https://www.digistore24.com/info/contact/2?lang=en"
                            onClick={(event) =>
                                handleClick(
                                    event,
                                    "https://www.digistore24.com/info/contact/2?lang=en"
                                )
                            }
                            className="cursor-pointer ml-1 text-blue-500 underline"
                        >
                            here
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </>
    );
}
