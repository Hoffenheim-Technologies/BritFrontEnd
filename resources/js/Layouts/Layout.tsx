import React, { useRef } from "react";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import GlobalStyle from "../createGlobalStyles";
import Container from "../shared/Container";
import { ChevronUpIcon } from "@heroicons/react/outline";

const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    const toTop = document.getElementById("toTop");
    if (window.scrollY > window.innerHeight) {
        toTop!.style.transform = "translateY(0)";
    } else {
        toTop!.style.transform = "translateY(100px)";
    }
    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
};
const executeScroll = (ref: React.MutableRefObject<any>) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
    children,
    title,
}) => {
    window.addEventListener("scroll", reveal);
    const start = useRef(null);
    Inertia.on("navigate", reveal);
    return (
        <>
            <Head title={title ? title : "Admin"} />
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <div ref={start}>
                    <Header style={{ position: "sticky", top: 0, zIndex: 2 }} />
                    {children}
                    <Footer />
                    <div
                        id="toTop"
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            background: lightTheme.secondaryColor,
                            color: lightTheme.primaryTextColor,
                            cursor: "pointer",
                            minWidth: "40px",
                            minHeight: "40px",
                            lineHeight: 0,
                            borderRadius: "100px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transform: "translateY(100px)",
                            transition: "transform .3s ease",
                            boxShadow: "0 5px 20px 5px rgba(8, 15, 52, 0.2)",
                        }}
                        onClick={() => executeScroll(start)}
                    >
                        <ChevronUpIcon style={{ width: "30px" }} />
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
};

export default Layout;
