import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <meta httpEquiv="Permissions-Policy" content="interest-cohort=()"></meta>
      <script async src="https://app.socialproofy.io/pixel/hy6k4z93hpgfdzd4yb857tb9pcr6m27g"></script>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
