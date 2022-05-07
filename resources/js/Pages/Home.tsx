import React from "react";
import Layout from "../Layouts/Layout";
import { SmallContainer } from "../shared/Container";
import { BoldContent } from "../shared/Text";

const Home = () => {
    return (
        <>
            <SmallContainer>
                <BoldContent align="center">
                    Your Dream Home is a Click Away
                </BoldContent>
            </SmallContainer>
        </>
    );
};

Home.layout = (
    page:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
) => <Layout children={page} title="Home" />;
export default Home;
