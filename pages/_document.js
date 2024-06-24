// import Head from "next/head";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preload"
                    href="https://scripts.converteai.net/b9f5c0e8-4b76-4e62-89bb-5c909e6db981/players/666fce97e70028000bdf405d/player.js"
                    as="script"
                />
                <link
                    rel="preload"
                    href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js"
                    as="script"
                />
                <link
                    rel="preload"
                    href="https://images.converteai.net/b9f5c0e8-4b76-4e62-89bb-5c909e6db981/players/666fce97e70028000bdf405d/thumbnail.jpg"
                    as="image"
                />
                <link
                    rel="preload"
                    href="https://cdn.converteai.net/b9f5c0e8-4b76-4e62-89bb-5c909e6db981/666fcb0a978207000b813b75/main.m3u8"
                    as="fetch"
                />
                <link rel="dns-prefetch" href="https://cdn.converteai.net" />
                <link
                    rel="dns-prefetch"
                    href="https://scripts.converteai.net"
                />
                <link rel="dns-prefetch" href="https://images.converteai.net" />
                <link rel="dns-prefetch" href="https://api.vturb.com.br" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
