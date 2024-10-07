"use client";
import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { RxSlash } from "react-icons/rx";
import { usePathname } from "next/navigation";
function ShowRoute({ routes }: { routes?: string[] }) {
    const params = usePathname();
    const links = params
        .split("/")
        .map((string) => string.charAt(0).toUpperCase() + string.slice(1));
    links.shift();
    routes = !routes ? links : routes;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {routes.map((param, key) => {
                    const last_item = routes.length - 1 === key;
                    const link = param
                        ?.split(" ")
                        .map(
                            (string) =>
                                string.charAt(0).toLowerCase() + string.slice(1)
                        )
                        .join("_");
                    return (
                        <div
                            key={key}
                            className="flex items-center flex-row gap-3"
                        >
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href={`${link}`}
                                    className={`font-normal text-sm text-text2  ${
                                        last_item ? `` : `text-opacity-50`
                                    }`}
                                >
                                    {param}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {last_item ? (
                                ""
                            ) : (
                                <BreadcrumbSeparator>
                                    <RxSlash />
                                </BreadcrumbSeparator>
                            )}
                        </div>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default ShowRoute;
