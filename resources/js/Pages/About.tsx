import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import Container, { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { Grid } from "../shared/Grid";
import { BoldContent, SH2, SH3, Subtitle } from "../shared/Text";
import Card from "../Components/Card";
import styled, { useTheme } from "styled-components";
import { Link } from "@inertiajs/inertia-react";

const AboutShow: React.FC<{ children: React.ReactNode; header: string }> = ({
    children,
    header,
}) => (
    <div style={{ maxWidth: "298px", textAlign: "center" }}>
        <div style={{ marginBottom: "30px" }}>
            <div
                style={{
                    fontSize: "63px",
                    lineHeight: "0.825em",
                    color: "#f85757",
                }}
            >
                {header}
            </div>
        </div>
        {children}
    </div>
);

const SCard = styled(Card)`
    position: absolute;
    right: 0;
    bottom: 50px;

    @media screen and (max-width: 499px) {
        position: relative;
        right: auto;
        bottom: auto;
        max-width: 90%;
        margin-top: -69px;
        margin-right: auto;
        margin-left: auto;
        padding: 33px 25px;
    }

    & > div {
        text-align: center;
        div {
            margin-bottom: 16px;
            font-size: 63px;
            line-height: 0.825em;
            color: #f85757;
        }
    }
`;

const About = () => {
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const isTinyMobile = useMediaQuery("(max-width: 374px)");
    const isTablet = useMediaQuery("(max-width: 767px)");
    const theme = useTheme();
    const badgeStyle = {
        position: "absolute",
        top: "20px",
        right: "20px",
        background: theme.altBackgroundColor,
        padding: "12px 22px",
        boxShadow: "0 1px 6px 0 rgba(20, 20, 43, 0.09)",
        color: "#fff",
    };
    const agents = [
        {
            name: "John Carter",
            description:
                "Blandit massa enim nec dui morbi enim nunc faucibus a pellent.",
            phone: "(414) 325-427",
            email: "john@britproperties.ng",
            picture: {
                src: "https://assets.website-files.com/6193ce0889184df85cd96c91/619458f159ee9149d326b898_image-1-agents-realtor-template.jpg",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/619458f159ee9149d326b898_image-1-agents-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184df85cd96c91/619458f159ee9149d326b898_image-1-agents-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/619458f159ee9149d326b898_image-1-agents-realtor-template-p-1080.jpeg 1080w, https://assets.website-files.com/6193ce0889184df85cd96c91/619458f159ee9149d326b898_image-1-agents-realtor-template.jpg 1160w",
                sizes: "(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 660px, (max-width: 1919px) 31vw, 406px",
            },
            role: "CEO",
        },
        {
            name: "Martins Chukwu",
            description:
                "Blandit massa enim nec dui morbi enim nunc faucibus a pellent.",
            phone: "(414) 325-427",
            email: "martins.chukwu@britproperties.ng",
            picture: {
                src: "https://assets.website-files.com/6193ce0889184df85cd96c91/619458cd5b21d6434837e15d_image-3-agents-realtor-template.jpg",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/619458cd5b21d6434837e15d_image-3-agents-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/619458cd5b21d6434837e15d_image-3-agents-realtor-template-p-1080.jpeg 1080w, https://assets.website-files.com/6193ce0889184df85cd96c91/619458cd5b21d6434837e15d_image-3-agents-realtor-template.jpg 1160w",
                sizes: "(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 660px, (max-width: 1919px) 31vw, 406px",
            },
            role: "Head Corporate",
        },
        {
            name: "Binta Suleiman",
            description:
                "Blandit massa enim nec dui morbi enim nunc faucibus a pellent.",
            phone: "(414) 325-427",
            email: "binta.suleiman@britproperties.ng",
            picture: {
                src: "https://assets.website-files.com/6193ce0889184df85cd96c91/619458a393e1e343176067b5_image-2-agents-realtor-template.jpg",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/619458a393e1e343176067b5_image-2-agents-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184df85cd96c91/619458a393e1e343176067b5_image-2-agents-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/619458a393e1e343176067b5_image-2-agents-realtor-template-p-1080.jpeg 1080w, https://assets.website-files.com/6193ce0889184df85cd96c91/619458a393e1e343176067b5_image-2-agents-realtor-template.jpg 1160w",
                sizes: "(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 660px, (max-width: 1919px) 31vw, 406px",
            },
            role: "Investment Officer",
        },
    ];
    return (
        <main>
            <section style={{ paddingBottom: 0 }}>
                <Container>
                    <div
                        style={{
                            maxWidth: !isDesktop ? "660px" : "",
                            margin: !isDesktop ? "0 auto" : "",
                        }}
                    >
                        <Flex
                            align={"center"}
                            direction={isDesktop ? "row" : "column"}
                            gap={isDesktop ? "40px" : ""}
                            style={
                                isDesktop
                                    ? { marginBottom: "116px" }
                                    : { marginBottom: "98px" }
                            }
                        >
                            <div
                                style={
                                    isDesktop
                                        ? {
                                              maxWidth: "591px",
                                          }
                                        : {
                                              maxWidth: "100%",
                                              textAlign: "center",
                                              marginBottom: "32px",
                                          }
                                }
                            >
                                <BoldContent
                                    align="center"
                                    style={{
                                        marginBottom: isDesktop
                                            ? "54px"
                                            : "10px",
                                        textAlign: isDesktop
                                            ? "left"
                                            : "center",
                                    }}
                                >
                                    About our real estate firm
                                </BoldContent>
                                <Subtitle margin="" transform={true}>
                                    Brit Properties is a trustworthy and
                                    reliable real estate brokerage company based
                                    in Nigeria. Our mission is to provide
                                    unmatched estate agency, property management
                                    and consultancy services to the public
                                    through our network of offices nationwide.
                                </Subtitle>
                            </div>
                            <div
                                style={{
                                    marginTop: "auto",
                                    textAlign: isDesktop ? "left" : "center",
                                }}
                            >
                                <Subtitle margin="" transform={true}>
                                    We have an exciting selection of Projects to
                                    suit your lifestyle and requirements. We
                                    have over 250 handpicked estates with
                                    services in the various states including
                                    Lagos, Ogun, Kaduna, Osun, etc.
                                </Subtitle>
                            </div>
                        </Flex>
                    </div>
                    <Grid columns={3} columnGap={"21px"}>
                        <Flex align="center">
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    transform: "perspective(1000px)",
                                    objectFit: "cover",
                                }}
                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197ef1975cc9145aaf865a2_image-1-about-hero-realtor-template.jpg"
                                loading="eager"
                                alt="About House - Realtor X Webflow Template"
                            />
                        </Flex>
                        <Flex align="center">
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    transform: "perspective(1000px)",
                                    objectFit: "cover",
                                }}
                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197ef190a77414b661404a9_image-2-about-hero-realtor-template.jpg"
                                loading="eager"
                                alt="About House - Realtor X Webflow Template"
                            />
                        </Flex>
                        <Flex align="center">
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    transform: "perspective(1000px)",
                                    objectFit: "cover",
                                }}
                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197ef185cf1e43fd962d58d_image-3-about-hero-realtor-template.jpg"
                                loading="eager"
                                alt="About House - Realtor X Webflow Template"
                            />
                        </Flex>
                    </Grid>
                </Container>
            </section>
            <section>
                <Container width="1158px">
                    <SH2
                        style={{
                            margin: "auto auto 64px auto",
                            width: "fit-content",
                        }}
                    >
                        Take a look at our numbers
                    </SH2>
                    <Grid
                        columns={isDesktop ? 3 : 1}
                        columnGap={"16px"}
                        rowGap={"80px"}
                        justify={isDesktop ? "" : "center"}
                    >
                        <AboutShow header={"99%"}>
                            <div>
                                <SH3>Customer Satisfaction</SH3>
                                <Subtitle margin="0" transform={true}>
                                    Lorem ipsum dolor sit amet dolor sit
                                    consectetur adipiscing.
                                </Subtitle>
                            </div>
                        </AboutShow>
                        <AboutShow header={"50M+"}>
                            <div>
                                <SH3>In Property Sales</SH3>
                                <Subtitle margin="0" transform={true}>
                                    Lorem ipsum dolor sit amet dolor sit
                                    consectetur adipiscing.
                                </Subtitle>
                            </div>
                        </AboutShow>
                        <AboutShow header={"2,400+"}>
                            <div>
                                <SH3>Successful Sales</SH3>
                                <Subtitle margin="0" transform={true}>
                                    Lorem ipsum dolor sit amet dolor sit
                                    consectetur adipiscing.
                                </Subtitle>
                            </div>
                        </AboutShow>
                    </Grid>
                </Container>
            </section>
            <section style={{ backgroundColor: "rgb(249,249,249)" }}>
                <Container>
                    <div
                        style={{
                            maxWidth: !isDesktop ? "660px" : "",
                            margin: !isDesktop ? "0 auto" : "",
                        }}
                    >
                        <Flex
                            direction={isDesktop ? "row" : "column"}
                            style={{ marginBottom: "54px" }}
                            align="center"
                        >
                            <div
                                style={{
                                    maxWidth: isDesktop ? "39%" : "",
                                    marginBottom: isDesktop ? "" : "30px",
                                    minWidth: isMiniMobile ? "100%" : "401px",
                                }}
                            >
                                <SH2>
                                    We have only one goal: To help you find your
                                    dream home
                                </SH2>
                                <Subtitle style={{ marginBottom: "34px" }}>
                                    BritProperties: We are a real estate agent,
                                    an estate agent. Our philosophy is simple -
                                    it's all about you. We help you find the
                                    right home, office or land and make the
                                    whole experience easy and straightforward.
                                </Subtitle>
                            </div>
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: "730px",
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: !isTablet
                                            ? "85%"
                                            : !isMiniMobile
                                            ? "80%"
                                            : "100%",
                                        marginLeft: isDesktop ? "auto" : "",
                                        marginRight: isDesktop ? "" : "auto",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            transform: "perspective(1000px)",
                                            objectFit: "cover",
                                        }}
                                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a483260460d2901008_image-2-story-realtor-template.jpg"
                                        loading="eager"
                                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 72vw, (max-width: 991px) 560.9943237304688px, (max-width: 1919px) 47vw, 620.4971313476562px"
                                        srcSet="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a483260460d2901008_image-2-story-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a483260460d2901008_image-2-story-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a483260460d2901008_image-2-story-realtor-template-p-1080.jpeg 1080w, https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a483260460d2901008_image-2-story-realtor-template.jpg 1246w"
                                        alt="Our Story - Realtor X Webflow Template"
                                    />
                                </div>
                                <SCard
                                    style={
                                        isDesktop
                                            ? { left: 0, right: "auto" }
                                            : {}
                                    }
                                >
                                    <div>
                                        <div>2,400+</div>
                                        <SH3>Successful Sales</SH3>
                                    </div>
                                </SCard>
                            </div>
                        </Flex>
                        <Flex
                            direction={isDesktop ? "row" : "column"}
                            align="center"
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: "694px",
                                    marginRight: "40px",
                                    order: isDesktop ? "" : "2",
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: !isTablet
                                            ? "90%"
                                            : !isMiniMobile
                                            ? "80%"
                                            : "100%",
                                        marginRight: "auto",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a404193316aa50187d_image-1-story-realtor-template.jpg"
                                        loading="eager"
                                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 72vw, (max-width: 991px) 593.99853515625px, (max-width: 1919px) 50vw, 624.5951538085938px"
                                        srcSet="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a404193316aa50187d_image-1-story-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a404193316aa50187d_image-1-story-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a404193316aa50187d_image-1-story-realtor-template-p-1080.jpeg 1080w, https://assets.website-files.com/6193ce0889184dacb7d96c80/6197f6a404193316aa50187d_image-1-story-realtor-template.jpg 1246w"
                                        alt="Our Story - Realtor X Webflow Template"
                                    />
                                </div>
                                <SCard>
                                    <div>
                                        <div>1,000+</div>
                                        <SH3>Happy Clients</SH3>
                                    </div>
                                </SCard>
                            </div>
                            <div
                                style={{
                                    maxWidth: isDesktop ? "39%" : "",
                                    marginBottom: isDesktop ? "" : "30px",
                                    minWidth: isMiniMobile ? "100%" : "401px",
                                    order: isDesktop ? "" : "1",
                                }}
                            >
                                <SH2>
                                    We have helped over a thousand clients
                                </SH2>
                                <Subtitle style={{ marginBottom: "34px" }}>
                                    Britproperties.ng offers the best property
                                    solutions in Nigeria and we deliver
                                    satisfaction guaranteed! Contact us now to
                                    own a dream home you always wanted!
                                </Subtitle>
                            </div>
                        </Flex>
                    </div>
                </Container>
            </section>
            <section>
                <Container style={{ textAlign: "center" }} width="682px">
                    <SH2>Meet the agents in our firm</SH2>
                    <div style={{ maxWidth: "514px", margin: "auto" }}>
                        <Subtitle>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit mi lobortis gravida ornare leo in at{" "}
                        </Subtitle>
                    </div>
                </Container>
                <Container>
                    <div
                        style={{
                            maxWidth: !isDesktop ? "660px" : "",
                            margin: !isDesktop ? "0 auto" : "",
                        }}
                    >
                        <div>
                            <Grid
                                columns={isDesktop ? 3 : 1}
                                columnGap={"26px"}
                                rowGap={"45px"}
                            >
                                {agents.map((agent, index) => (
                                    <div key={index}>
                                        <div
                                            style={{
                                                overflow: "hidden",
                                                borderRadius: "24px",
                                                backgroundColor: "#fff",
                                                boxShadow:
                                                    "0 3px 20px 0 rgba(8, 15, 52, 0.06)",
                                                transition:
                                                    "box-shadow 300ms ease, transform 300ms ease, -webkit-transform 300ms ease",
                                            }}
                                        >
                                            <div
                                                style={{ position: "relative" }}
                                            >
                                                <img
                                                    src={agent.picture.src}
                                                    loading="eager"
                                                    alt={agent.name}
                                                    sizes={agent.picture.sizes}
                                                    srcSet={
                                                        agent.picture.srcSet
                                                    }
                                                />
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        bottom: "20px",
                                                        right: "20px",
                                                        background:
                                                            theme.secondaryColor,
                                                        borderRadius: "60px",
                                                        padding: "12px 22px",
                                                        boxShadow:
                                                            "0 1px 6px 0 rgba(20, 20, 43, 0.09)",
                                                        color: "#fff",
                                                    }}
                                                >
                                                    {agent.role}
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    padding: "36px 40px 55px",
                                                }}
                                            >
                                                <div>
                                                    <SH3>{agent.name}</SH3>
                                                    <Subtitle margin="">
                                                        {agent.description}
                                                    </Subtitle>
                                                </div>
                                                <div
                                                    style={{
                                                        marginTop: "26px",
                                                        marginBottom: "26px",
                                                        width: "100%",
                                                        minHeight: "1px",
                                                        backgroundColor:
                                                            "#e9e9e9",
                                                    }}
                                                ></div>
                                                <Grid
                                                    columns={1}
                                                    rowGap={"16px"}
                                                >
                                                    <Link
                                                        href={`tel: ${agent.phone}`}
                                                        style={{
                                                            width: "inherit",
                                                        }}
                                                    >
                                                        <Flex
                                                            gap="10px"
                                                            direction={
                                                                isMiniMobile
                                                                    ? "column"
                                                                    : "row"
                                                            }
                                                            align={
                                                                isMiniMobile
                                                                    ? ""
                                                                    : "center"
                                                            }
                                                        >
                                                            <div>
                                                                <img
                                                                    src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197fd4fdabccf005b3c9570_icon-2-agents-realtor-template.svg"
                                                                    loading="eager"
                                                                    alt="Phone Icon - Realtor X Webflow Template"
                                                                />
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width: "100%",
                                                                    maxWidth:
                                                                        "220px",
                                                                }}
                                                            >
                                                                {agent.phone}
                                                            </div>
                                                        </Flex>
                                                    </Link>
                                                    <Link
                                                        href={`mailto: ${agent.email}`}
                                                        style={{
                                                            width: "inherit",
                                                        }}
                                                    >
                                                        <Flex
                                                            gap="10px"
                                                            direction={
                                                                isMiniMobile
                                                                    ? "column"
                                                                    : "row"
                                                            }
                                                            align={
                                                                isMiniMobile
                                                                    ? ""
                                                                    : "center"
                                                            }
                                                        >
                                                            <div>
                                                                <img
                                                                    src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6197fd4f75db262a65c572df_icon-1-agents-realtor-template.svg"
                                                                    loading="eager"
                                                                    alt="Email Icon - Realtor X Webflow Template"
                                                                />
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width: "100%",
                                                                    maxWidth:
                                                                        "220px",
                                                                }}
                                                            >
                                                                {agent.email}
                                                            </div>
                                                        </Flex>
                                                    </Link>
                                                </Grid>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </Container>
            </section>
            <section style={{ backgroundColor: "rgb(249,249,249)" }}>
                <Container>
                    <div
                        style={{
                            maxWidth: !isDesktop ? "660px" : "",
                            margin: !isDesktop ? "0 auto" : "",
                        }}
                    >
                        <Flex
                            align={"center"}
                            direction={isDesktop ? "row" : "column"}
                            gap={"40px"}
                        >
                            <div style={{ maxWidth: isDesktop ? "621px" : "" }}>
                                <div
                                    style={{
                                        maxWidth: "492px",
                                        margin: isDesktop
                                            ? "0 0 25px 0"
                                            : "auto auto 30px auto",
                                    }}
                                >
                                    <div
                                        style={{
                                            textAlign: isDesktop
                                                ? "left"
                                                : "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                maxWidth: "424px",
                                                margin: isDesktop ? "" : "auto",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    maxWidth: isTablet
                                                        ? "320px"
                                                        : "",
                                                    margin: isTablet
                                                        ? ""
                                                        : "auto",
                                                }}
                                            >
                                                <SH2>
                                                    The values that drive
                                                    everything we do
                                                </SH2>
                                            </div>
                                        </div>
                                        <Subtitle transform={true} margin="">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipiscing elit feugiat
                                            purus suscipit turpis sed vitae
                                        </Subtitle>
                                    </div>
                                </div>
                                <Card
                                    style={{ marginBottom: "35px" }}
                                    padding="50px 38px 70px"
                                >
                                    <Flex
                                        direction={
                                            !isMiniMobile ? "row" : "column"
                                        }
                                    >
                                        <div
                                            style={{
                                                width: "108px",
                                                maxHeight: "108px",
                                                minHeight: "108px",
                                                minWidth: "108px",
                                                marginRight: "23px",
                                                borderRadius: "10000000px",
                                                display: "flex",
                                                overflow: "hidden",
                                                alignItems: "center",
                                                transform:
                                                    "translate(0px, 0px)",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    transform:
                                                        "perspective(1000px)",
                                                    objectFit: "cover",
                                                }}
                                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619802d67457484f730c9c5f_icon-1-values-realtor-template.svg"
                                                loading="eager"
                                                alt="Excellence - Realtor X Webflow Template"
                                            />
                                        </div>
                                        <div>
                                            <SH3 margin="8px">Excellence</SH3>
                                            <Subtitle
                                                margin=""
                                                transform={true}
                                            >
                                                Lorem ipsum dolor sit amet conse
                                                ctetur adipiscing elit ipsum at
                                                iaculis nulla nulla justo
                                                vestibulum faucibus nec
                                                ullamcorper bibend.
                                            </Subtitle>
                                        </div>
                                    </Flex>
                                </Card>
                                <Card padding="50px 38px 70px">
                                    <Flex
                                        direction={
                                            !isMiniMobile ? "row" : "column"
                                        }
                                    >
                                        <div
                                            style={{
                                                width: "108px",
                                                maxHeight: "108px",
                                                minHeight: "108px",
                                                minWidth: "108px",
                                                marginRight: "23px",
                                                borderRadius: "10000000px",
                                                display: "flex",
                                                overflow: "hidden",
                                                alignItems: "center",
                                                transform:
                                                    "translate(0px, 0px)",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    transform:
                                                        "perspective(1000px)",
                                                    objectFit: "cover",
                                                }}
                                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619802d67457484f730c9c5f_icon-1-values-realtor-template.svg"
                                                loading="eager"
                                                alt="Excellence - Realtor X Webflow Template"
                                            />
                                        </div>
                                        <div>
                                            <SH3 margin="8px">Excellence</SH3>
                                            <Subtitle
                                                margin=""
                                                transform={true}
                                            >
                                                Lorem ipsum dolor sit amet conse
                                                ctetur adipiscing elit ipsum at
                                                iaculis nulla nulla justo
                                                vestibulum faucibus nec
                                                ullamcorper bibend.
                                            </Subtitle>
                                        </div>
                                    </Flex>
                                </Card>
                            </div>
                            <div style={{ maxWidth: isDesktop ? "621px" : "" }}>
                                <Card
                                    style={{ marginBottom: "35px" }}
                                    padding="50px 38px 70px"
                                >
                                    <Flex
                                        direction={
                                            !isMiniMobile ? "row" : "column"
                                        }
                                    >
                                        <div
                                            style={{
                                                width: "108px",
                                                maxHeight: "108px",
                                                minHeight: "108px",
                                                minWidth: "108px",
                                                marginRight: "23px",
                                                borderRadius: "10000000px",
                                                display: "flex",
                                                overflow: "hidden",
                                                alignItems: "center",
                                                transform:
                                                    "translate(0px, 0px)",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    transform:
                                                        "perspective(1000px)",
                                                    objectFit: "cover",
                                                }}
                                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619802d67457484f730c9c5f_icon-1-values-realtor-template.svg"
                                                loading="eager"
                                                alt="Excellence - Realtor X Webflow Template"
                                            />
                                        </div>
                                        <div>
                                            <SH3 margin="8px">Excellence</SH3>
                                            <Subtitle
                                                margin=""
                                                transform={true}
                                            >
                                                Lorem ipsum dolor sit amet conse
                                                ctetur adipiscing elit ipsum at
                                                iaculis nulla nulla justo
                                                vestibulum faucibus nec
                                                ullamcorper bibend.
                                            </Subtitle>
                                        </div>
                                    </Flex>
                                </Card>
                                <Card
                                    style={{ marginBottom: "35px" }}
                                    padding="50px 38px 70px"
                                >
                                    <Flex
                                        direction={
                                            !isMiniMobile ? "row" : "column"
                                        }
                                    >
                                        <div
                                            style={{
                                                width: "108px",
                                                maxHeight: "108px",
                                                minHeight: "108px",
                                                minWidth: "108px",
                                                marginRight: "23px",
                                                borderRadius: "10000000px",
                                                display: "flex",
                                                overflow: "hidden",
                                                alignItems: "center",
                                                transform:
                                                    "translate(0px, 0px)",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    transform:
                                                        "perspective(1000px)",
                                                    objectFit: "cover",
                                                }}
                                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619802d67457484f730c9c5f_icon-1-values-realtor-template.svg"
                                                loading="eager"
                                                alt="Excellence - Realtor X Webflow Template"
                                            />
                                        </div>
                                        <div>
                                            <SH3 margin="8px">Excellence</SH3>
                                            <Subtitle
                                                margin=""
                                                transform={true}
                                            >
                                                Lorem ipsum dolor sit amet conse
                                                ctetur adipiscing elit ipsum at
                                                iaculis nulla nulla justo
                                                vestibulum faucibus nec
                                                ullamcorper bibend.
                                            </Subtitle>
                                        </div>
                                    </Flex>
                                </Card>
                                <Card padding="50px 38px 70px">
                                    <Flex
                                        direction={
                                            !isMiniMobile ? "row" : "column"
                                        }
                                    >
                                        <div
                                            style={{
                                                width: "108px",
                                                maxHeight: "108px",
                                                minHeight: "108px",
                                                minWidth: "108px",
                                                marginRight: "23px",
                                                borderRadius: "10000000px",
                                                display: "flex",
                                                overflow: "hidden",
                                                alignItems: "center",
                                                transform:
                                                    "translate(0px, 0px)",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    transform:
                                                        "perspective(1000px)",
                                                    objectFit: "cover",
                                                }}
                                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619802d67457484f730c9c5f_icon-1-values-realtor-template.svg"
                                                loading="eager"
                                                alt="Excellence - Realtor X Webflow Template"
                                            />
                                        </div>
                                        <div>
                                            <SH3 margin="8px">Excellence</SH3>
                                            <Subtitle
                                                margin=""
                                                transform={true}
                                            >
                                                Lorem ipsum dolor sit amet conse
                                                ctetur adipiscing elit ipsum at
                                                iaculis nulla nulla justo
                                                vestibulum faucibus nec
                                                ullamcorper bibend.
                                            </Subtitle>
                                        </div>
                                    </Flex>
                                </Card>
                            </div>
                        </Flex>
                    </div>
                </Container>
            </section>
        </main>
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
