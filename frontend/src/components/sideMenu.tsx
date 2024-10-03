import { fetchCategory } from "@/lib/actions/category.actions";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

async function SideMenu() {
    const resoult = await fetchCategory();

    return (
        <div className="flex flex-col gap-4 items-start pt-10 pr-4">
            {resoult.map((item) => {
                return (
                    <Link
                        className="min-w-56 text-xl font-normal text-text2 flex items-center justify-between"
                        key={item._id}
                        href={item.name.toLowerCase()}
                    >
                        {item.name}
                        <MdOutlineKeyboardArrowRight size={20} />
                    </Link>
                );
            })}
        </div>
    );
}

export default SideMenu;
