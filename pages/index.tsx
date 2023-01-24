import Head from "next/head";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

//Components
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <Meta />
                <title>CV - Komang Adi Wirawan</title>
            </Head>

            <Body className={`${poppins.className} bg-neutral-50`}>
                <Navbar />
                <Hero />
                <main className={`${styles.main}`}>
                    <p className="text-center text-green-400 text-[1rem]">Hello World</p>
                </main>
            </Body>
        </React.Fragment>
    );
}
