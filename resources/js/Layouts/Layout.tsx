import React from "react";
import { Head } from "@inertiajs/inertia-react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";
import Header from "../Components/Header";
import GlobalStyle from "../createGlobalStyles";
import Container from "../shared/Container";

const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
    children,
    title,
}) => {
    return (
        <>
            <Head title={title ? title : "Admin"} />
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <div>
                    <Header />
                    <section
                        style={{ padding: "40px 0 0 0", minHeight: "150vh" }}
                    >
                        {children}
                    </section>
                </div>
            </ThemeProvider>
        </>
    );
};

export default Layout;
