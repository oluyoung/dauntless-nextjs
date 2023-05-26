import React from "react";
import Head from "next/head";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <body>
        <main>
          <div className="bg-white pt-8 pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
              <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                Market Pairs (USD)
              </h1>
              <p className="text-xl text-center text-gray-600">
                The following is a list of crypto currencies with information
                related to the USD trading pair.
              </p>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
