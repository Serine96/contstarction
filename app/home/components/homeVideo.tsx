"use client";
import { FC, useEffect, useRef } from "react";
import classes from "../style/homeVideo.module.scss";
import Image from "next/image";

const HomeVideo: FC = () => {
    const useVideoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        if (useVideoRef.current) {
            useVideoRef.current.play();
        }
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden" && useVideoRef.current) {
                useVideoRef.current.play();
            }
        };

        const handleScroll = () => {
            if (useVideoRef.current && useVideoRef.current.paused) {
                useVideoRef.current.play();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={classes["home_main"]} id="home">
            <div className={classes["home_section"]}>
                <div className={classes["blur_div"]}></div>
                <div className={classes["home_text_container"]}>
                    <h1 className={classes["home_title"]}>ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ</h1>
                    <h3>Կառուցում ենք ճշգրտությամբ և փորձով</h3>
                </div>
                <Image
                    className={classes["home_video"]}
                    src={"/img/bgHome.png"}
                    alt="img"
                    width={1000}
                    height={500}
                    priority
                />
            </div>
        </div>
    );
};

export default HomeVideo;
