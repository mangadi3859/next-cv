import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React from "react";
import * as utils from "../lib/utils";
import getCodewarUser from "../lib/getCodewarUser";
import getSolvedKatas from "@/lib/getSolvedKatas";
import getKataInfo from "@/lib/getKata";

//Components
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import useAnimateSlide from "../lib/useAnimateSlide";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { GetServerSidePropsContext } from "next";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import ToTop from "../components/toTop";

export async function getServerSideProps(props: GetServerSidePropsContext) {
    let codewarUser = await getCodewarUser();
    let codewarsKata = await getSolvedKatas();
    let codewarsSolvedKatasInfo = await Promise.all(codewarsKata.data.map((e) => getKataInfo(e.id)));

    return { props: { codewars: { user: codewarUser, katas: codewarsKata, katasInfo: codewarsSolvedKatasInfo } } };
}

export default function Home({ codewars }: utils.IServerProps) {
    useAnimateSlide();

    // let codewars: IServerProps["codewars"] = props.codewars;

    return (
        <React.Fragment>
            <Head>
                <Meta />
                <title>CV - Komang Adi Wirawan</title>
            </Head>

            <Body className={`overflow-x-hidden bg-neutral-50`}>
                <ToTop />
                <Navbar />
                <Hero />
                <main className={`${styles.main} my-10`}>
                    <Section name="Resume" id="resume" className="py-20">
                        <Resume user={codewars.user} katas={codewars.katas} katasInfo={codewars.katasInfo} />
                    </Section>
                    <Section name="Contact" id="contact" className="py-10 mt-10">
                        <Contact />
                    </Section>
                </main>
                <Footer />
            </Body>
        </React.Fragment>
    );
}
