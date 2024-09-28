"use client";

import classes from "./menu.module.scss";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface Props {
    handlePortfolioClick: () => void;
    handleAboutClick: () => void;
    handleContactClick: () => void;
}
const Menu: FC<Props> = ({ handlePortfolioClick, handleAboutClick, handleContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const path = usePathname();

    const handleMenuclick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (document.body.offsetWidth < 767) {
            handleMenuclick();
        }
    }, [path]);

    useEffect(() => {
        const handleBodyClick = (e: MouseEvent) => {
            if (!e.target) return;
            const target = e.target as HTMLElement;

            if (!target.closest(`.${classes["liks_container"]}`)) {
                setIsOpen(false);
            }
        };

        document.body.addEventListener("click", handleBodyClick);

        return () => {
            document.body.removeEventListener("click", handleBodyClick);
        };
    }, []);

    return (
        <div
            className={classes["navigation"]}
            onClick={(e) => {
                e.preventDefault();
            }}
        >
            <div
                className={classes["burger_menu"]}
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? (
                    <IoMdClose
                        className={`${classes["menu_icon"]} ${
                            path !== "/" ? classes["black"] : ""
                        }`}
                    />
                ) : (
                    <GiHamburgerMenu
                        className={`${classes["menu_icon"]} ${
                            path !== "/" ? classes["black"] : ""
                        }`}
                    />
                )}
            </div>
            <a className={`${classes["nav_a_logo_f"]} `} href={"/"}>
                <Image src={"/img/logo.png"} alt="img" width={60} height={60} />
            </a>
            <div className={`${classes["container"]} ${isOpen ? classes["open"] : ""}`}>
                <div className={classes["liks_container"]}>
                    <div className={classes["links_nav"]}>
                        <a className={`${classes["nav_a_logo"]} `} href={"/"}>
                            <Image src={"/img/logo.png"} alt="img" width={60} height={60} />
                            <h2 className={classes["nav_link_logo"]}>Construction Group</h2>
                        </a>

                        <nav className={classes["nav_links"]}>
                            <a
                                className={`${classes["nav_link"]} `}
                                href={"#portfolio"}
                                onClick={() => {
                                    handleAboutClick();
                                    if (document.body.offsetWidth < 950) {
                                        handleMenuclick();
                                    }
                                }}
                            >
                                Մեր մասին
                            </a>
                            <a
                                className={classes["nav_link"]}
                                href="#portfolio"
                                onClick={() => {
                                    handlePortfolioClick();
                                    if (document.body.offsetWidth < 950) {
                                        handleMenuclick();
                                    }
                                }}
                            >
                                Պորտֆոլիո
                            </a>
                            <Link className={classes["nav_link"]} href={"#services"}>
                                Ծառայութուններ
                            </Link>
                        </nav>
                    </div>
                    <a
                        className={` ${classes["contact"]}`}
                        href={"/"}
                        onClick={() => {
                            handleContactClick();
                            if (document.body.offsetWidth < 950) {
                                handleMenuclick();
                            }
                        }}
                    >
                        Կապ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;
