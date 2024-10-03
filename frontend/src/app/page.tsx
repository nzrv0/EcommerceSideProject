import SideMenu from "@/components/sideMenu";
import Image from "next/image";
import Link from "next/link";
import { ProductCaruesel } from "@/components/productCarusel";
import ProductsByDate from "@/components/productsByDate";
import CategoriesCorusel from "@/components/categoriesCorusel";
import { Button } from "@/components/ui/button";
import OurProducts from "@/components/ourProducts";
import JBL from "@/public/jbl.png";
import Playstation from "@/public/playstation.png";
import Woman from "@/public/woman.png";
import Echo from "@/public/echo.png";
import Perfume from "@/public/parfume.png";
import { RiCaravanLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";

const mockData = [
    {
        Icon: <RiCaravanLine size={30} color="white" />,
        Title: "FREE AND FAST DELIVERY",
        Describtion: "Free delivery for all orders over $140",
    },
    {
        Icon: <TfiHeadphoneAlt size={30} color="white" />,
        Title: "24/7 CUSTOMER SERVICE",
        Describtion: "Friendly 24/7 customer support",
    },
    {
        Icon: <LuShieldCheck size={30} color="white" />,
        Title: "MONEY BACK GUARANTEE",
        Describtion: "We reurn money within 30 days",
    },
];

export default function Home() {
    const date = new Date();
    return (
        <div className="container w-full h-auto">
            <section className="flex w-full h-full items-start justify-center mb-36">
                <SideMenu />
                <ProductCaruesel />
            </section>
            <ProductsByDate Title="Today's" SubTitle="Flash Sales" Counter />
            <hr className="max-w-[1170px] my-[70px]" />
            <CategoriesCorusel />
            <hr className="max-w-[1170px] my-[70px]" />
            <ProductsByDate
                Title="This Month"
                SubTitle="Best Selling Products"
            />
            <section className="bg-black p-10 mb-20 mt-36">
                <div className="flex items-center gap-7 ">
                    <div className="flex flex-col items-start gap-8 text-white">
                        <h1 className="text-xl font-semibold text-button1">
                            Categories
                        </h1>
                        <h2 className="text-6xl font-semibold">
                            Enhance Your Music Experience
                        </h2>
                        <div className=" flex items-center gap-6 text-[11px] font-normal text-text2 ">
                            <span className="flex flex-col items-center justify-center bg-white w-[62px] h-[62px] rounded-full">
                                <span className="text-xl font-semibold -mb-1">
                                    {date.getDay()}
                                </span>
                                Days
                            </span>
                            <span className="flex flex-col items-center justify-center bg-white w-[62px] h-[62px] rounded-full">
                                <span className="text-xl font-semibold -mb-1">
                                    {date.getHours()}
                                </span>
                                Hours
                            </span>
                            <span className="flex flex-col items-center justify-center bg-white w-[62px] h-[62px] rounded-full">
                                <span className="text-xl font-semibold -mb-1">
                                    {date.getMinutes()}
                                </span>
                                Minutes
                            </span>
                            <span className="flex flex-col items-center justify-center bg-white w-[62px] h-[62px] rounded-full">
                                <span className="text-xl font-semibold -mb-1">
                                    {date.getSeconds()}
                                </span>
                                Seconds
                            </span>
                        </div>
                        <Button className="bg-button1 text-white hover:bg-button1">
                            Buy Now!
                        </Button>
                    </div>
                    <div className="relative w-full h-full">
                        <Image src={JBL} alt="Jbl speaker" className="z-40" />
                        <div className="w-[504px] h-[500px] opacity-30 bg-[#d9d9d9] rounded-full border border-black blur-[200px] absolute -top-20 left-0 z-20" />
                    </div>
                </div>
            </section>
            <OurProducts />
            <section className="flex flex-col gap-16 my-36">
                <div className="flex flex-col items-start gap-5">
                    <div className="flex items-center gap-4">
                        <span className="w-5 h-10 bg-secondary2 rounded-sm" />
                        <h1 className="text-xl font-semibold text-secondary2">
                            Our Products
                        </h1>
                    </div>
                    <p className="text-5xl font-semibold text-text2">
                        Explore Our Products
                    </p>
                </div>
                <div className="flex items-start gap-8 w-full h-auto">
                    <div className="bg-black relative min-w-[570px] h-[600px] flex justify-center items-end rounded-sm">
                        <div className="text-white flex flex-col items-start gap-4 absolute bottom-8 w-[242px] h-auto left-8 text-wrap">
                            <h1 className="text-3xl font-semibold">
                                PlayStation 5
                            </h1>
                            <p className="text-sm font-normal">
                                Black and White version of the PS5 coming out on
                                sale.
                            </p>
                            <Link
                                href="products"
                                className="text-xl font-medium underline"
                            >
                                Shop Now
                            </Link>
                        </div>
                        <Image
                            src={Playstation}
                            alt="playstation"
                            className=""
                        />
                    </div>
                    <div className="w-full flex flex-col items-start gap-8">
                        <div className="bg-black relative w-full h-[284px] flex justify-end items-end rounded-sm">
                            <div className="text-white flex flex-col items-start gap-4 absolute bottom-8 w-[242px] h-auto left-8 text-wrap">
                                <h1 className="text-3xl font-semibold">
                                    Women’s Collections
                                </h1>
                                <p className="text-sm font-normal">
                                    Featured woman collections that give you
                                    another vibe.
                                </p>
                                <Link
                                    href="products"
                                    className="text-xl font-medium underline"
                                >
                                    Shop Now
                                </Link>
                            </div>
                            <Image src={Woman} alt="woman" className="" />
                        </div>
                        <div className="w-full flex items-start gap-8">
                            <div className="bg-black relative w-full h-[284px] flex justify-center items-center rounded-sm">
                                <div className="text-white flex flex-col items-start gap-4 absolute bottom-8 w-[242px] h-auto left-8 text-wrap">
                                    <h1 className="text-3xl font-semibold">
                                        Speakers
                                    </h1>
                                    <p className="text-sm font-normal">
                                        Amazon wireless speakers
                                    </p>
                                    <Link
                                        href="products"
                                        className="text-xl font-medium underline"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                                <Image src={Echo} alt="echo" className="" />
                            </div>
                            <div className="bg-black relative w-full h-[284px] flex justify-center items-center rounded-sm">
                                <div className="text-white flex flex-col items-start gap-4 absolute bottom-8 w-[242px] h-auto left-8 text-wrap">
                                    <h1 className="text-3xl font-semibold">
                                        Perfume
                                    </h1>
                                    <p className="text-sm font-normal">
                                        GUCCI INTENSE OUD EDP
                                    </p>
                                    <Link
                                        href="products"
                                        className="text-xl font-medium underline"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                                <Image
                                    src={Perfume}
                                    alt="perfume"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-between">
                {mockData.map((item, key) => (
                    <div key={key} className="flex flex-col items-center">
                        <div className="bg-black p-2 border-solid border-8 border-line rounded-full">
                            {item.Icon}
                        </div>
                        <h1 className="text-black text-2xl font-semibold mt-6 mb-2">
                            {item.Title}
                        </h1>
                        <p className="text-black text-sm font-normal">
                            {item.Describtion}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}
