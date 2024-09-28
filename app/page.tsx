"use client";
import styles from "./page.module.css";
import Menu from "./navigation/menu";
import HomeVideo from "./home/components/homeVideo";
import AboutUs from "./home/components/aboutUs";
import Portfolio from "./home/components/portfolio";
import Footer from "./home/components/footer";
import { useRef } from "react";
import OurServices from "./home/components/ourServices";

export default function Home() {
    const usePortfolio = useRef<HTMLDivElement | null>(null);
    const useAbout = useRef<HTMLDivElement | null>(null);
    const useContact = useRef<HTMLDivElement | null>(null);
    const useHome = useRef<HTMLDivElement | null>(null);

    const handlePortfolioClick = () => {
        if (usePortfolio.current) {
            usePortfolio.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleAboutClick = () => {
        if (useAbout.current) {
            useAbout.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleContactClick = () => {
        if (useContact.current) {
            useContact.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className={styles.main}>
            <Menu
                handlePortfolioClick={handlePortfolioClick}
                handleAboutClick={handleAboutClick}
                handleContactClick={handleContactClick}
            />
            <HomeVideo />
            <AboutUs propsRef={useAbout} />
            <OurServices />
            <Portfolio propsRef={usePortfolio} />
            <Footer propsRef={useContact} />
        </main>
    );
}
