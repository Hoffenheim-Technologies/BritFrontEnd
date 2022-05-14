import React, { useRef } from "react";
import styled from "styled-components";
import { PrimaryButton, TertiaryButton } from "../Components/Buttons";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import Container, { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { BoldContent, SH2, Subtitle } from "../shared/Text";

const executeScroll = (ref: React.MutableRefObject<any>) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

const homescroll = () => {
    const section = document.getElementById("homeImageSection");
    const top = section!.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const vertical = window.scrollY;
    const firstImage = document.querySelector(".first") as HTMLElement;
    const secondImage = document.querySelector(".second") as HTMLElement;
    // console.log(windowHeight - top, windowHeight, top);
    if (vertical < top) {
        firstImage!.style.transform = `translate3d(0px, ${-(
            (vertical / windowHeight) *
            25
        )}%, 0px)`;
    }
    secondImage!.style.transform = `translate3d(0px, ${-(
        (vertical / windowHeight) *
        125
    )}%, 0px)`;
};

const ImageSection: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <Container
            id="homeImageSection"
            className={className}
            style={{ zIndex: 1 }}
        >
            <Flex>
                <div className="image-wrapper first" style={{}}>
                    <img
                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template.jpg"
                        loading="eager"
                        sizes="100vw"
                        srcSet="https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template.jpg 2258w"
                        alt="Real Agent - Realtor X Webflow Template"
                    />
                </div>
                <div className="image-wrapper second">
                    <img
                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1421cb1a6f711390c7_image-2-hero-v2-realtor-template.jpg"
                        loading="eager"
                        sizes="100vw"
                        srcSet="https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1421cb1a6f711390c7_image-2-hero-v2-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1421cb1a6f711390c7_image-2-hero-v2-realtor-template-p-1080.jpeg 1080w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1421cb1a6f711390c7_image-2-hero-v2-realtor-template.jpg 1312w"
                        alt="Real Estate - Realtor X Webflow Template"
                    />
                </div>
            </Flex>
        </Container>
    );
};

const SImageSection = styled(ImageSection)`
    img {
        width: 100%;
        height: 100%;
        transform: perspective(1000px);
        object-fit: cover;
    }
    .image-wrapper {
        display: flex;
        overflow: hidden;
        align-items: center;
        transform: translate(0px, 0px);
        border-radius: 12px;
        will-change: transform;
        transform-style: preserve-3d;
    }
    .image-wrapper.first {
        max-width: 89%;
        margin-bottom: 127px;
    }
    .image-wrapper.second {
        position: absolute;
        right: 0px;
        bottom: 0px;
        max-width: 52%;
        box-shadow: 0 10px 34px 0 rgba(0, 0, 0, 0.14);
    }
`;
const Home = () => {
    document.addEventListener("scroll", homescroll);
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    const PropertiesRef = useRef(null);

    return (
        <main>
            <section style={{ paddingTop: "40px", paddingBottom: 0 }} id="hero">
                <div style={{ position: "relative" }}>
                    <SmallContainer small={isMiniMobile}>
                        <BoldContent align="center">
                            Your Dream Home is a Click Away
                        </BoldContent>
                        <Subtitle align="center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat modi officia, fugit hic rem qui iure
                            quaerat omnis
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
                </div>
                <SImageSection />
                <div
                    style={{
                        left: 0,
                        right: 0,
                        bottom: 0,
                        minHeight: "259px",
                        position: "absolute",
                        backgroundColor: "#f9f9f9",
                        zIndex: -1,
                    }}
                ></div>
            </section>

            <section
                style={{ backgroundColor: "rgb(249,249,249)", paddingTop: 0 }}
                ref={PropertiesRef}
                id="properties"
            >
                <SmallContainer width="601px">
                    <div
                        style={{
                            margin: "auto",
                            maxWidth: "486px",
                            textAlign: "center",
                        }}
                    >
                        <div>
                            <SH2>
                                Browse our four types of apartments available
                            </SH2>
                        </div>
                    </div>
                </SmallContainer>
            </section>
        </main>
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
