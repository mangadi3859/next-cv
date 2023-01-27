import Head from "next/head";
import { Poppins } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
import * as utils from "../lib/utils";
import getCodewarUser from "../lib/getCodewarUser";
import getSolvedKatas from "@/lib/getSolvedKatas";
import getKataInfo from "@/lib/getKata";

//Components
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import animateSlide from "../lib/animateSlide";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { GetServerSidePropsContext } from "next";
import Resume from "@/components/Resume";

export async function getServerSideProps(props: GetServerSidePropsContext) {
    let codewarUser = await getCodewarUser();
    let codewarsKata = await getSolvedKatas();
    let codewarsSolvedKatasInfo = await Promise.all(codewarsKata.data.map((e) => getKataInfo(e.id)));

    return { props: { codewars: { user: codewarUser, katas: codewarsKata, katasInfo: codewarsSolvedKatasInfo } } };
}

export default function Home({ codewars }: utils.IServerProps) {
    animateSlide();

    // let codewars: IServerProps["codewars"] = props.codewars;

    return (
        <React.Fragment>
            <Head>
                <Meta />
                <title>CV - Komang Adi Wirawan</title>
            </Head>

            <Body className={`${poppins.className} bg-neutral-50`}>
                <Navbar />
                <Hero />
                <main className={`${styles.main} my-10`}>
                    <Section name="Resume" className="py-20">
                        <Resume user={codewars.user} katas={codewars.katas} katasInfo={codewars.katasInfo} />
                    </Section>
                </main>
                <Footer />
            </Body>
        </React.Fragment>
    );
}
