import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from "next/head";

// import { Head } from "next/document";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // specify the weights you need
});

export const metadata: Metadata = {
    title: "ProstaFlow",
    description: "ProstaFlow -",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <meta
                    httpEquiv="Permissions-Policy"
                    content="interest-cohort=()"
                />
                <script
                    async
                    src="https://app.socialproofy.io/pixel/hy6k4z93hpgfdz4dyb857tb9pcr6m27g"
                ></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body className={poppins.className}>{children}</body>
        </html>
    );
}
