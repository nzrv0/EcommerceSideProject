import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "135px",
            screens: {
                "2xl": "1440px",
            },
        },
        extend: {
            colors: {
                Black: "#000000",
                White: "#FFFFFF",
                Blue: "#0000FF",
                Gray: "#808080",
                Silver: "#C0C0C0",
                Red: "#FF0000",
                Green: "#008000",
                Pink: "#FFC0CB",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                primary1: "#363738",
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                line: "#B3B3B3",
                secondary1: "#fefaf1",
                bg: "#ffffff",
                text: "#fafafa",
                text1: "#7d8184",
                text2: "#000000",
                secondary2: "#db4444",
                button1: "#00ff66",
                button2: "#db4444",
                hoverButton: "#8F2C2C",
                borderSecondary: "#727272",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            fontSize: {
                base: "0.75rem",
                lg: "0.875rem",
                xl: "1rem",
                "2xl": "1.25rem",
                "3xl": "1.5rem",
                "4xl": "2rem",
                "5xl": "2.25rem",
                "6xl": "3rem",
                "7xl": "3.375rem",
                "8xl": "4rem",
                "9xl": "5.625rem",
                "10xl": "6.875rem",
            },
            fontFamily: {
                poppins: "Poppins",
            },
            boxShadow: {
                box20: "0px 2px 10px 2px rgba(0,0,0,0.2)",
                box5: "0px 1px 13px 0px rgba(0,0,0,0.05)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate")
        
    ],
};
export default config;
