import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Alma Vista</title>
                <meta name="description" content="Experience the comfort of our luxury vacation rental home in the heart of the Sierra Nevadas. Perfectly located near Yosemite and Pinecrest, our home offers the ideal base for your outdoor adventures or serene getaway." />
                <meta name="keywords" content="Vacation Rental, Sierra Nevadas, Yosemite, Pinecrest, Luxury Home, California Vacation Home, Outdoor Adventure, Hiking, Nature, Getaway" />
                <meta property="og:title" content="Luxury Vacation Home Rental in Sierra Nevadas | Near Yosemite & Pinecrest" />
                <meta property="og:description" content="Experience the comfort of our luxury vacation rental home in the heart of the Sierra Nevadas. Perfectly located near Yosemite and Pinecrest, our home offers the ideal base for your outdoor adventures or serene getaway." />
                <meta property="og:image" content="/images/AlmaVistaSunset.jpg" />
                <meta property="og:url" content="https://www.almavistacabin.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}