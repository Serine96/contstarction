import { FC, MutableRefObject } from "react";
import classes from "../style/footer.module.scss";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
interface Props {
    propsRef: MutableRefObject<HTMLDivElement | null>;
}

const Footer: FC<Props> = ({ propsRef }) => {
    return (
        <footer ref={propsRef} className={classes["footer"]}>
            <div className={classes["footer_container"]}>
                <div className={classes["image_div"]}>
                    <Image src={"/img/logo.png"} alt="img" width={150} height={150} />
                </div>

                <div className={classes["container_info"]}>
                    <div className={classes["contacts"]}>
                        <div className={classes["footer_info"]}>
                            <SlLocationPin className={classes["footer_icon"]} />
                            <p> ՀՀ ք. Արտաշատ Օգոստոսի 23փ., 24 շ</p>
                        </div>
                        <div className={classes["footer_info"]}>
                            <FiPhone className={classes["footer_icon"]} />
                            <p> +374 99 09 81 81</p>
                        </div>
                    </div>
                    <div className={classes["footer_links"]}>
                        <nav className={classes["links"]}>
                            <a className={`${classes["links"]} `} href={"#home"}>
                                Մեր մասին
                            </a>
                            {/* <Link href={"#home"}></Link> */}
                            <a className={classes["links"]} href="#portfolio">
                                Պորտֆոլիո
                            </a>
                            <a className={classes["links"]} href={"#services"}>
                                Ծառայութուններ
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={classes["it_link"]}>
                <h4>{`© 2024 | Construction Group |`}</h4>{" "}
                <a
                    className={classes["footer_link"]}
                    href="https://www.itartashat.am/"
                    target={"_blank"}
                >
                    {" "}
                    Powered by ITartashat
                </a>{" "}
            </div>
        </footer>
    );
};

export default Footer;
