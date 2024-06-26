import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx, DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        httpEquiv="Permissions-Policy"
                        content="interest-cohort=()"
                    />
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
                    <link
                        rel="dns-prefetch"
                        href="https://cdn.converteai.net"
                    />
                    <link
                        rel="dns-prefetch"
                        href="https://scripts.converteai.net"
                    />
                    <link
                        rel="dns-prefetch"
                        href="https://images.converteai.net"
                    />
                    <link rel="dns-prefetch" href="https://api.vturb.com.br" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
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
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
