import { FC, MutableRefObject } from "react";
import classes from "../style/aboutUs.module.scss";
interface Props {
    propsRef: MutableRefObject<HTMLDivElement | null>;
}
const AboutUs: FC<Props> = ({ propsRef }) => {
    return (
        <div ref={propsRef} className={classes["about_us"]} id={classes["about_us"]}>
            <div className={classes["about_us_up"]}>
                <div className={classes["about_us_text_container"]}>
                    <h2 className={classes["about_us_title"]}>Մեր մասին</h2>
                    <h3 className={classes["about_us_text"]}>
                        {` ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ-ն իրականացնում է էլեկտրականացման, ջրի, ոռոգման, գազաֆիկացման, վերանորոգման և այլ շինարարական բնույթի աշխատանքներ:
Կազմակերպությունը գործում է 2020 թվականից ի վեր և այս ընթացքում հասցրել է վայելել պատվիրատուների գոհունակությունը՝ առաջարկելով որակյալ, հուսալի և ժամանակին իրականացված լուծումներ։ Մեր թիմը բաղկացած է բարձր որակավորում ունեցող մասնագետներից, որոնք ունեն երկարամյա փորձ և պատրաստ են լուծել տարբեր աստիճանի բարդության խնդիրներ։`}{" "}
                         
                    </h3>

                    <h3 className={classes["about_us_text"]}>
                        {`Մենք մեծ ուշադրություն ենք դարձնում ինչպես յուրաքանչյուր մանրուքի, այնպես էլ անվտանգության և բնապահպանական պահանջների պահպանմանը, նպատակ ունենալով ստեղծել ամուր և երկարատև համագործակցություն մեր հաճախորդների հետ։
`}
                    </h3>
                    <h3 className={classes["about_us_text"]}>
                        {`Աշխատանքի սկզբունքներն են՝ վստահելիությունը, թափանցիկությունը և նորարարական մոտեցումը։ Շնորհիվ պրոֆեսիոնալիզմի և պատասխանատվության՝ "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ" ՍՊԸ-ն դարձել է ոլորտում վստահելի գործընկեր՝ ապահովելով պատվիրատուների բարձր ակնկալիքները արդարացնող արդյունքներ։
`}
                    </h3>
                </div>
                <div className={classes["image_div"]}>
                    <img
                        // className={classes["about_us_img_up"]}
                        src="/img/about_us_img_up.jpeg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
