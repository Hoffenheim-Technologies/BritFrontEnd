import React, { useRef } from "react";
import { PrimaryButton, TertiaryButton } from "../Components/Buttons";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { BoldContent, Subtitle } from "../shared/Text";

const Home = () => {
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    const PropertiesRef = useRef(null);
    const executeScroll = (ref: React.MutableRefObject<any>) =>
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
                        onClick={() => executeScroll(PropertiesRef)}
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
            <section
                style={{ backgroundColor: "rgb(249,249,249)", padding: "30px" }}
                ref={PropertiesRef}
            >
                Properties
            </section>
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
