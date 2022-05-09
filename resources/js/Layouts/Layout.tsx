import React from "react";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import GlobalStyle from "../createGlobalStyles";
import Container from "../shared/Container";

const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
};

const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
    children,
    title,
}) => {
    window.addEventListener("scroll", reveal);
    Inertia.on("navigate", reveal);
    return (
        <>
            <Head title={title ? title : "Admin"} />
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <div>
                    <Header />
                    <main style={{ padding: "40px 0 0 0" }}>{children}</main>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    );
};

export default Layout;
