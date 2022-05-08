import React from "react";
import Layout from "../Layouts/Layout";
import { SmallContainer } from "../shared/Container";
import { BoldContent } from "../shared/Text";

const About = () => {
    return (
        <>
            <SmallContainer>
                <BoldContent align="center">About Page</BoldContent>
            </SmallContainer>
        </>
    );
};

About.layout = (
    page:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
) => <Layout children={page} title="About" />;
export default About;
