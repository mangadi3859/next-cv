import React from "react";
import * as utils from "../lib/utils";
import styles from "../styles/Home.module.css";
import animateSlide from "@/lib/animateSlide";

//Components
import Head from "next/head";
import Meta from "@/components/Meta";
import Body from "@/components/Body";
import ToTop from "@/components/toTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//     return {
//         props: {},
//     };
// }

export default function ProjectPage() {
    animateSlide();

    return (
        <React.Fragment>
            <Head>
                <Meta />
                <title>CV - Komang Adi Wirawan</title>
            </Head>

            <Body className={`overflow-x-hidden bg-neutral-50`}>
                <ToTop />
                <Navbar
                    items={[
                        { href: "/", name: "About" },
                        { href: "#project", name: "Project" },
                        { href: "#experience", name: "Experience" },
                        { href: "https://github.com/mangadi3859?tab=repositories", name: "Repository" },
                    ]}
                />
                <main className={`${styles.main} my-10`}>
                    <Section name="Projects" id="project" className="py-20">
                        <Projects />
                    </Section>
                    <Section name="Experience" id="experience" className="py-20">
                        <Education />
                    </Section>
                </main>
                <Footer />
            </Body>
        </React.Fragment>
    );
}
