import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ - Որակյալ շինարարական ծառայություններ",
    description:
        "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ-ն առաջարկում է էլեկտրականացման, ջրի, ոռոգման, գազաֆիկացման, վերանորոգման և այլ շինարարական ծառայություններ՝ 2020 թվականից ի վեր։",
    keywords:
        "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ, շինարարություն, էլեկտրականացում, գազաֆիկացում, ջրամատակարարում, վերանորոգում, շինարարական ծառայություններ",
    openGraph: {
        title: "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ",
        description:
            "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ-ն առաջարկում է որակյալ շինարարական ծառայություններ՝ էլեկտրականացում, ջրամատակարարում, գազաֆիկացում և վերանորոգում:",
        url: "https://www.constructiongroup.am",
        siteName: "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ",
        images: [
            {
                url: "https://www.constructiongroup.am/img/logo.png",
                width: 800,
                height: 600,
                alt: "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ Logo",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ",
        description:
            "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ-ն առաջարկում է որակյալ շինարարական ծառայություններ՝ 2020 թվականից ի վեր՝ էլեկտրականացում, գազաֆիկացում, վերանորոգում:",
        site: "@constructiongroup_am",
        creator: "@constructiongroup_am",
        images: [
            {
                url: "https://www.constructiongroup.am/img/logo.png",
                alt: "ՔՈՆՍԹՐԱՔՇՆ ԳՐՈՒՊ ՍՊԸ Logo",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
