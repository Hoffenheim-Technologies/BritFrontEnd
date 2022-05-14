import { Link } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import styled from "styled-components";
import { PrimaryButton, TertiaryButton } from "../Components/Buttons";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import Container, { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { BoldContent, SH2, SH3, Subtitle } from "../shared/Text";
import { SBadge as Badge } from "../Components/Badges";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

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

const Props: React.FC<{
    className?: string;
    mobile: boolean;
    mini: boolean;
}> = ({ className }) => {
    const isSmall = useMediaQuery("(max-width: 768px)");
    const isMiniMobile = useMediaQuery("(max-width: 374px)");
    const properties = [
        {
            image: {
                src: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template.jpg 1832w",
            },
            price: 650000,
            name: "Valerie Phase 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus suscipit turpis sed vitae.",
            area: 550,
            type: "Land",
        },
        {
            image: {
                src: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg 1832w",
            },
            price: 5000000,
            name: "Britwook Park 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus suscipit turpis sed vitae.",
            area: 400,
            type: "Residential",
        },
        {
            image: {
                src: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg 1832w",
            },
            price: 1200000,
            name: "Bethel Home Phase 3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus suscipit turpis sed vitae.",
            area: 550,
            type: "Dry Land",
        },
        {
            image: {
                src: "https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template.jpg 1832w",
            },
            price: 34000000,
            name: "Bethel Home Phase 2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus suscipit turpis sed vitae.",
            area: 550,
            type: "Industrial",
        },
    ];
    return (
        <div className={className}>
            <ul>
                {properties.length &&
                    properties.map((property, index) => (
                        <li key={index}>
                            <Link href="">
                                <div>
                                    <img
                                        src={property.image.src}
                                        loading="eager"
                                        alt={property.name}
                                        sizes={property.image.sizes}
                                        srcSet={property.image.srcSet}
                                    />
                                </div>
                                <div>
                                    <div style={{ marginBottom: "14px" }}>
                                        <Flex
                                            justify="space-between"
                                            align="center"
                                            direction={
                                                isMiniMobile ? "column" : "row"
                                            }
                                        >
                                            <div
                                                style={{
                                                    width: isSmall
                                                        ? "100%"
                                                        : "",
                                                }}
                                            >
                                                <SH3>{property.name}</SH3>
                                            </div>
                                            <div>
                                                <SH3
                                                    style={{ color: "#f85757" }}
                                                >
                                                    &#8358;
                                                    {property.price.toLocaleString(
                                                        "en-US"
                                                    )}
                                                </SH3>
                                            </div>
                                        </Flex>
                                    </div>
                                    <p>{property.description}</p>
                                    <div style={{ marginTop: "auto" }}>
                                        <div
                                            style={{
                                                width: "100%",
                                                minHeight: "1px",
                                                marginTop: "36px",
                                                marginBottom: "36px",
                                                backgroundColor: "#e9e9e9",
                                            }}
                                        ></div>
                                        <Flex align="center" direction="row">
                                            <Badge
                                                style={{
                                                    margin: "0 18px 0 0 ",
                                                }}
                                            >
                                                <ArrowsExpandIcon
                                                    style={{
                                                        width: "20px",
                                                        marginRight: "5px",
                                                    }}
                                                />
                                                {property.area}&nbsp;sqft
                                            </Badge>
                                            <Badge
                                                style={{ margin: "0 18px 0 0" }}
                                            >
                                                {property.type}
                                            </Badge>
                                        </Flex>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

const Properties = styled(Props)`
    ul {
        margin-top: 70px;
        display: grid;
        grid-column-gap: 55px;
        grid-row-gap: 0px;

        display: grid;
        grid-auto-columns: 1fr;
        grid-template-columns: ${({ mobile }) => (mobile ? "1fr" : "1fr 1fr")};
        grid-template-rows: auto;

        li:first-of-type {
            margin-top: ${({ mobile }) => (mobile ? "" : "-55px")};
            margin-bottom: 55px;
        }
        li {
            margin-bottom: ${({ mobile }) => (mobile ? "55px" : "")};
        }
        li:last-of-type {
            margin-top: ${({ mobile }) => (mobile ? "" : "55px")};
        }
    }
    img {
        transition: transform 0.3s ease;
    }

    a {
        display: flex;
        padding: 0px;
        flex-direction: column;
        transition: box-shadow 300ms ease, transform 300ms ease;
        overflow: hidden;
        max-width: 100%;
        color: #8d8d91;
        text-decoration: none;
        border-radius: 24px;
        background-color: #fff;
        box-shadow: 0 3px 20px 0 rgba(8, 15, 52, 0.06);

        & > div:first-of-type {
            display: flex;
            overflow: hidden;
            align-items: center;
            transform: translate(0px, 0px);
        }
        & > div:last-of-type {
            display: flex;
            padding: 46px 35px 38px;
            flex-direction: column;
            flex: 1;
        }

        p {
            margin-bottom: 0;
            line-height: 1.667em;
        }
    }

    li:hover {
        transform: translateY(-2px);
        img {
            transform: scale3d(1.04, 1.04, 1);
        }
        a {
            box-shadow: 0 3px 20px 0 rgba(8, 15, 52, 0.1);
        }
    }
`;
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
    const isDesktop = useMediaQuery("(min-width: 900px)");
    const PropertiesRef = useRef(null);
    const isTinyMobile = useMediaQuery("(max-width: 374px)");
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
                                Browse our four types of properties available
                            </SH2>
                        </div>
                        <Subtitle>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit odio massa eget posuere at proin lectus proin
                            morbi
                        </Subtitle>
                    </div>
                </SmallContainer>
                <Container>
                    <div
                        style={{
                            maxWidth: !isDesktop ? "660px" : "",
                            margin: !isDesktop ? "0 auto" : "",
                        }}
                    >
                        <Properties mini={isTinyMobile} mobile={!isDesktop} />
                    </div>
                </Container>
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
