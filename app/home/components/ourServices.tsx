import { FC } from "react";
import classes from "../style/ourServices.module.scss";
import SimpleSlider from "./slider";

const OurServices: FC = () => {
    return (
        <div className={classes["container"]} id="services">
            <h2 className={classes["block_title"]}> Մեր ծառայությունները </h2>
            <h3 className={classes["block_text"]}>
                Այստեղ ներկայացված են մեր ծառայությունների տեսակները
            </h3>
            <SimpleSlider />
        </div>
    );
};

export default OurServices;
