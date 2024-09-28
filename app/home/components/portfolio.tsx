import React, { FC, MutableRefObject } from "react";
import classes from "../style/portfolio.module.scss";
import Image from "next/image";
interface Props {
    propsRef: MutableRefObject<HTMLDivElement | null>;
}

let projects = [
    {
        text: "Գազաֆիկացման համակարգեր",
        img: "/img/portfolio_img_1.jpg",
    },
    {
        text: "Աշտարակներ",
        img: "/img/portfolio_img_2.jpeg",
    },
    {
        text: "Քաղաքային այգի",
        img: "/img/portfolio_img_3.jpg",
    },
    {
        text: "Արդյունաբերական համալիր",
        img: "/img/portfolio_img_4.png",
    },
    {
        text: "Շքեղ վիլլաներ",
        img: "/img/portfolio_img_5.png",
    },
    {
        text: "Ոռոգման համակարգեր",
        img: "/img/portfolio_img_6.jpg",
    },
];
const Portfolio: FC<Props> = ({ propsRef }) => {
    return (
        <div ref={propsRef} className={classes["portfolio_container"]} id={"portfolio"}>
            <h2 className={classes["block_title"]}>Պորտֆոլիո</h2>
            <div className={classes["portfolio_images"]}>
                {projects.map((el, i) => {
                    return (
                        <div className={classes["portfolio_card"]} key={i}>
                            <div className={classes["card_text"]}>
                                <h2>{el.text}</h2>
                            </div>
                            <div className={classes["image_div"]}>
                                <Image src={el.img} alt="img" width={200} height={150} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Portfolio;
