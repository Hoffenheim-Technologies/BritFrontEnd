import React from "react";
import { PrimaryButton, TertiaryButton } from "../Components/Buttons";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { BoldContent, Subtitle } from "../shared/Text";

const Home = () => {
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    return (
        <>
            <SmallContainer>
                <BoldContent align="center">
                    Your Dream Home is a Click Away
                </BoldContent>
                <Subtitle align="center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat modi officia, fugit hic rem qui iure quaerat omnis
                </Subtitle>
                <Flex
                    justify="center"
                    direction={isMiniMobile ? "column" : "row"}
                    align="center"
                    width={isMiniMobile ? "100%" : ""}
                    gap={isMiniMobile ? "10px" : ""}
                >
                    <PrimaryButton
                        margin={isMiniMobile ? 0 : ""}
                        width={isMiniMobile ? "100%" : ""}
                    >
                        Browse Properties
                    </PrimaryButton>
                    <TertiaryButton
                        margin={isMiniMobile ? 0 : ""}
                        width={isMiniMobile ? "100%" : ""}
                    >
                        Talk to an Agent
                    </TertiaryButton>
                </Flex>
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
