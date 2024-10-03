import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonStyle = cva(
    [
        "flex",
        "items-center",
        "text-xl",
        "transition-color",
        "rounded",
        "pointer-cursor",
        "w-min",
        "text-nowrap",
    ],
    {
        variants: {
            variant: {
                deafult: ["text-secondary2", " font-regular", "text-black"],
                primary: ["font-medium", "bg-button2", "hover:bg-hoverButton"],
                secondary: [
                    "font-medium",
                    "bg-transparent",
                    "border-2",
                    "border-borderSecondary",
                    "hover:bg-black ",
                    "hover:text-white",
                    "hover:border-black",
                ],
            },
            size: {
                default: ["p-1"],
                primary: ["py-4", "px-12"],
                secondary: ["py-2.5", "px-12"],
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "primary",
        },
    }
);
type buttonType = VariantProps<typeof buttonStyle> & ComponentProps<"button">;
function Button({ variant, size, className, ...props }: buttonType) {
    return (
        <button
            {...props}
            className={cn(buttonStyle({ variant, size }), className)}
        ></button>
    );
}

export { Button, buttonStyle };
