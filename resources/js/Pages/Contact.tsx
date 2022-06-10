import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { useTheme } from "styled-components";
import { SecondaryButton } from "../Components/Buttons";
import Card from "../Components/Card";
import { SM, SMHandles } from "../Components/Footer";
import { SInput, STextArea } from "../Components/Input";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import Container, { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { Grid } from "../shared/Grid";
import { BoldContent, SH2, SH3, Subtitle } from "../shared/Text";

const Contact = () => {
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const isTinyMobile = useMediaQuery("(max-width: 374px)");
    const isTablet = useMediaQuery("(max-width: 767px)");
    const phone = "(+234)8077789898";
    const email = "contact@britproperties.ng";
    const theme = useTheme();
    return (
        <main>
            <section
                style={
                    isDesktop
                        ? { paddingTop: "106px", paddingBottom: 0 }
                        : isTablet
                        ? { paddingTop: "54px", paddingBottom: 0 }
                        : { paddingTop: "85px", paddingBottom: 0 }
                }
            >
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        textAlign: "center",
                    }}
                >
                    <SmallContainer width="510px" style={{ color: "#fff" }}>
                        <BoldContent>Get in Touch</BoldContent>
                        <Subtitle style={{ color: "#fff" }} transform={true}>
                            We are always ready and available to serve your
                            needs, or answer your questions
                        </Subtitle>
                    </SmallContainer>
                    <Container
                        width="1132px"
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        <div
                            style={
                                isDesktop
                                    ? {}
                                    : { maxWidth: "660px", margin: "auto" }
                            }
                        >
                            <Grid
                                columns={isDesktop ? 3 : 1}
                                columnGap="26px"
                                rowGap="45px"
                            >
                                <div style={{ width: "100%" }}>
                                    <Link
                                        href={`tel: ${phone}`}
                                        style={{ width: "inherit" }}
                                    >
                                        <Card>
                                            <Flex
                                                direction={"column"}
                                                align={"center"}
                                                width="100%"
                                            >
                                                <div
                                                    style={{
                                                        width: "84px",
                                                        maxHeight: "84px",
                                                        minHeight: "84px",
                                                        minWidth: "84px",
                                                        marginRight: "20px",
                                                        marginBottom: "15px",
                                                        borderRadius:
                                                            "10000000px",
                                                        display: "flex",
                                                        overflow: "hidden",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <img
                                                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6196b065ab885f467883135d_icon-1-contact-link-realtor-template.svg"
                                                        loading="eager"
                                                        alt="Phone Icon - Realtor X Webflow Template"
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        maxWidth: "220px",
                                                        marginBottom: "15px",
                                                    }}
                                                >
                                                    <SH3 margin="6px">
                                                        Give us a call
                                                    </SH3>
                                                    <Subtitle transform={true}>
                                                        Our dedicated call
                                                        agents will be happy to
                                                        receive your call
                                                    </Subtitle>
                                                    <div
                                                        style={{
                                                            marginTop: "26px",
                                                            marginBottom:
                                                                "26px",
                                                            width: "100%",
                                                            minHeight: "1px",
                                                            backgroundColor:
                                                                "#e9e9e9",
                                                        }}
                                                    ></div>
                                                    <SH3
                                                        style={{
                                                            color: theme.secondaryColor,
                                                        }}
                                                        margin=""
                                                    >
                                                        {phone}
                                                    </SH3>
                                                </div>
                                            </Flex>
                                        </Card>
                                    </Link>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <Link
                                        href={`mailto: ${email}`}
                                        style={{ width: "inherit" }}
                                    >
                                        <Card>
                                            <Flex
                                                direction={"column"}
                                                align={"center"}
                                                width="100%"
                                            >
                                                <div
                                                    style={{
                                                        width: "84px",
                                                        maxHeight: "84px",
                                                        minHeight: "84px",
                                                        minWidth: "84px",
                                                        marginRight: "20px",
                                                        marginBottom: "15px",
                                                        borderRadius:
                                                            "10000000px",
                                                        display: "flex",
                                                        overflow: "hidden",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <img
                                                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6196b065ab885f0e8883135e_icon-2-contact-link-realtor-template.svg"
                                                        loading="eager"
                                                        alt="Email Icon - Realtor X Webflow Template"
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        maxWidth: "220px",
                                                        marginBottom: "15px",
                                                    }}
                                                >
                                                    <SH3 margin="6px">
                                                        Send us an email
                                                    </SH3>
                                                    <Subtitle transform={true}>
                                                        We will respond to your
                                                        email quickly and
                                                        meaningfully
                                                    </Subtitle>
                                                    <div
                                                        style={{
                                                            marginTop: "26px",
                                                            marginBottom:
                                                                "26px",
                                                            width: "100%",
                                                            minHeight: "1px",
                                                            backgroundColor:
                                                                "#e9e9e9",
                                                        }}
                                                    ></div>
                                                    <SH3
                                                        style={{
                                                            color: theme.secondaryColor,
                                                            width: "fit-content",
                                                            position:
                                                                "relative",
                                                            margin: "auto auto auto -15px",
                                                        }}
                                                        margin="auto"
                                                    >
                                                        {email}
                                                    </SH3>
                                                </div>
                                            </Flex>
                                        </Card>
                                    </Link>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <Link
                                        href={`tel: ${phone}`}
                                        style={{ width: "inherit" }}
                                    >
                                        <Card>
                                            <Flex
                                                direction={"column"}
                                                align={"center"}
                                                width="100%"
                                            >
                                                <div
                                                    style={{
                                                        width: "84px",
                                                        maxHeight: "84px",
                                                        minHeight: "84px",
                                                        minWidth: "84px",
                                                        marginRight: "20px",
                                                        marginBottom: "15px",
                                                        borderRadius:
                                                            "10000000px",
                                                        display: "flex",
                                                        overflow: "hidden",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <img
                                                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/6196b065ab885f467883135d_icon-1-contact-link-realtor-template.svg"
                                                        loading="eager"
                                                        alt="Phone Icon - Realtor X Webflow Template"
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        maxWidth: "220px",
                                                        marginBottom: "15px",
                                                    }}
                                                >
                                                    <SH3 margin="6px">
                                                        Chat with us
                                                    </SH3>
                                                    <Subtitle transform={true}>
                                                        Our chat platform is
                                                        open, so send a message.
                                                    </Subtitle>
                                                    <div
                                                        style={{
                                                            marginTop: "26px",
                                                            marginBottom:
                                                                "26px",
                                                            width: "100%",
                                                            minHeight: "1px",
                                                            backgroundColor:
                                                                "#e9e9e9",
                                                        }}
                                                    ></div>
                                                    <SH3
                                                        style={{
                                                            color: theme.secondaryColor,
                                                        }}
                                                        margin=""
                                                    >
                                                        {"Open Live Chat"}
                                                    </SH3>
                                                </div>
                                            </Flex>
                                        </Card>
                                    </Link>
                                </div>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div
                    style={{
                        left: "0%",
                        top: "0%",
                        right: "0%",
                        bottom: "auto",
                        minHeight: "82%",
                        position: "absolute",
                        backgroundColor: theme.primaryColor,
                    }}
                ></div>
            </section>
            <section
                style={
                    isDesktop
                        ? { padding: "140px 0" }
                        : !isTablet
                        ? { padding: "112px 0" }
                        : !isMiniMobile
                        ? { padding: "90px 0" }
                        : { padding: "72px 0" }
                }
            >
                <Container
                    style={
                        isMiniMobile
                            ? { paddingRight: "16px", paddingLeft: "16px" }
                            : {}
                    }
                >
                    <div
                        style={
                            isDesktop
                                ? {}
                                : { maxWidth: "660px", margin: "auto" }
                        }
                    >
                        <div>
                            <Flex
                                direction={isDesktop ? "row" : "column"}
                                gap={
                                    isDesktop ? "" : isTablet ? "60px" : "70px"
                                }
                            >
                                <div
                                    style={
                                        isDesktop ? {} : { textAlign: "center" }
                                    }
                                >
                                    <SH2>Prefer to leave us a message?</SH2>
                                    <Subtitle transform={true}>
                                        Feel free to contact us on any of these
                                        platforms
                                    </Subtitle>
                                    <div
                                        style={
                                            isMiniMobile
                                                ? {
                                                      maxWidth: "250px",
                                                      margin: "auto",
                                                  }
                                                : {}
                                        }
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                marginRight: "-20px",
                                                marginBottom: "-20px",
                                            }}
                                        >
                                            <div
                                                style={
                                                    isDesktop
                                                        ? {}
                                                        : {
                                                              marginLeft:
                                                                  "auto",
                                                              marginRight:
                                                                  "auto",
                                                          }
                                                }
                                            >
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent:
                                                            isDesktop
                                                                ? ""
                                                                : "center",
                                                    }}
                                                >
                                                    {SMHandles.map(
                                                        (handle, index) => (
                                                            <div
                                                                key={index}
                                                                style={{
                                                                    marginRight:
                                                                        "20px",
                                                                    marginBottom:
                                                                        "20px",
                                                                }}
                                                            >
                                                                <SM
                                                                    path={
                                                                        handle.url
                                                                    }
                                                                    icon={
                                                                        handle.icon
                                                                    }
                                                                    height={
                                                                        "38px"
                                                                    }
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "100%" }}>
                                    <Card
                                        style={{
                                            display: "flex",
                                            minHeight: "749px",
                                            padding: isDesktop
                                                ? "80px 52px"
                                                : isTablet
                                                ? "51px 25px"
                                                : "64px 35px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                marginBottom: "0px",
                                                flex: "1",
                                            }}
                                        >
                                            <form>
                                                <Grid
                                                    columns={isTablet ? 1 : 2}
                                                    columnGap={"24px"}
                                                    rowGap={"33px"}
                                                >
                                                    <div
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <label
                                                            style={{
                                                                display:
                                                                    "block",
                                                                marginBottom:
                                                                    "16px",
                                                                color: "#222223",
                                                                lineHeight:
                                                                    "1.333em",
                                                                fontWeight:
                                                                    "700",
                                                            }}
                                                        >
                                                            Full Name
                                                        </label>
                                                        <SInput
                                                            type="text"
                                                            placeholder="John Carter"
                                                            style={{
                                                                paddingLeft:
                                                                    "20px",
                                                                paddingRight:
                                                                    "20px",
                                                            }}
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <label
                                                            style={{
                                                                display:
                                                                    "block",
                                                                marginBottom:
                                                                    "16px",
                                                                color: "#222223",
                                                                lineHeight:
                                                                    "1.333em",
                                                                fontWeight:
                                                                    "700",
                                                            }}
                                                        >
                                                            Email Address
                                                        </label>
                                                        <SInput
                                                            type="email"
                                                            placeholder="example@email.com"
                                                            style={{
                                                                paddingLeft:
                                                                    "20px",
                                                                paddingRight:
                                                                    "20px",
                                                            }}
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <label
                                                            style={{
                                                                display:
                                                                    "block",
                                                                marginBottom:
                                                                    "16px",
                                                                color: "#222223",
                                                                lineHeight:
                                                                    "1.333em",
                                                                fontWeight:
                                                                    "700",
                                                            }}
                                                        >
                                                            Full Name
                                                        </label>
                                                        <SInput
                                                            type="phone"
                                                            placeholder="(123)456 - 789"
                                                            style={{
                                                                paddingLeft:
                                                                    "20px",
                                                                paddingRight:
                                                                    "20px",
                                                            }}
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <label
                                                            style={{
                                                                display:
                                                                    "block",
                                                                marginBottom:
                                                                    "16px",
                                                                color: "#222223",
                                                                lineHeight:
                                                                    "1.333em",
                                                                fontWeight:
                                                                    "700",
                                                            }}
                                                        >
                                                            Subject
                                                        </label>
                                                        <SInput
                                                            type="text"
                                                            placeholder="ex. Support"
                                                            style={{
                                                                paddingLeft:
                                                                    "20px",
                                                                paddingRight:
                                                                    "20px",
                                                            }}
                                                        />
                                                    </div>
                                                    <div
                                                        style={{
                                                            gridColumn:
                                                                isMiniMobile
                                                                    ? ""
                                                                    : "1 / span 2",
                                                            display: "grid",
                                                            gridAutoColumns:
                                                                "1fr",
                                                            justifyContent:
                                                                "stretch",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <label
                                                            style={{
                                                                display:
                                                                    "block",
                                                                marginBottom:
                                                                    "16px",
                                                                color: "#222223",
                                                                lineHeight:
                                                                    "1.333em",
                                                                fontWeight:
                                                                    "700",
                                                            }}
                                                        >
                                                            Message
                                                        </label>
                                                        <STextArea
                                                            placeholder="Please type your message here"
                                                            style={{
                                                                paddingLeft:
                                                                    "20px",
                                                                paddingRight:
                                                                    "20px",
                                                                width: "100%",
                                                            }}
                                                            maxLength={500}
                                                        />
                                                    </div>
                                                    <SecondaryButton
                                                        style={{
                                                            width: isMiniMobile
                                                                ? "100%"
                                                                : "",
                                                        }}
                                                    >
                                                        Send message
                                                    </SecondaryButton>
                                                </Grid>
                                            </form>
                                        </div>
                                    </Card>
                                </div>
                            </Flex>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container style={{ position: "relative", zIndex: 1 }}>
                    <Flex>
                        <div style={{ width: "100%", maxWidth: "540px" }}>
                            <Card style={{ padding: "88px 65px 92px" }}>
                                <div style={{ marginBottom: "40px" }}>
                                    <SH2>Our Location</SH2>
                                    <Subtitle margin="" transform={true}>
                                        We are located in the heart of Lagos
                                        State
                                    </Subtitle>
                                </div>
                                <div>
                                    <Flex
                                        gap={isTablet ? "20px" : "40px"}
                                        direction={isTablet ? "column" : "row"}
                                    >
                                        <div
                                            style={{
                                                width: "90px",
                                                maxHeight: "90px",
                                                minHeight: "90px",
                                                minWidth: "90px",
                                                marginRight: "40px",
                                                alignSelf: "center",
                                                borderRadius: "10000000px",
                                                overflow: "hidden",
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
                                                src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619e7a7bb3dcf27ccb6cfc0e_icon-1-location-realtor-template.svg"
                                                loading="eager"
                                                alt="San Francisco Icon - Realtor X Webflow Template"
                                            />
                                        </div>
                                        <div>
                                            <SH3 margin="4px">
                                                Lagos, Nigeria
                                            </SH3>
                                            <Subtitle
                                                transform={true}
                                                margin=""
                                            >
                                                Km 24, Lekki Epe-Exp. Way Conoil
                                                Mega Filling Station Beside
                                                Fidelity Bank Abraham Adesanya
                                            </Subtitle>
                                        </div>
                                    </Flex>
                                </div>
                            </Card>
                        </div>
                    </Flex>
                </Container>
                <div
                    style={{
                        left: "0%",
                        top: "0%",
                        right: "0%",
                        bottom: "0%",
                        position: "absolute",
                        display: "flex",
                        overflow: "hidden",
                        alignItems: "center",
                        transform: "translate(0px, 0px)",
                    }}
                >
                    <img
                        style={{
                            width: "100%",
                            height: "100%",
                            transform: "perspective(1000px)",
                            objectFit: "cover",
                        }}
                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619e9da3080e5b1f1d4b2234_image-bg-location-realtor-template.jpg"
                        loading="eager"
                        srcSet="https://assets.website-files.com/6193ce0889184dacb7d96c80/619e9da3080e5b1f1d4b2234_image-bg-location-realtor-template-p-1080.jpeg 1080w, https://assets.website-files.com/6193ce0889184dacb7d96c80/619e9da3080e5b1f1d4b2234_image-bg-location-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184dacb7d96c80/619e9da3080e5b1f1d4b2234_image-bg-location-realtor-template-p-2000.jpeg 2000w, https://assets.website-files.com/6193ce0889184dacb7d96c80/619e9da3080e5b1f1d4b2234_image-bg-location-realtor-template-p-2600.jpeg 2600w, https://assets.website-files.com/6193ce0889184dacb7d96c80/619e9da3080e5b1f1d4b2234_image-bg-location-realtor-template.jpg 2880w"
                        sizes="100vw"
                        alt="Location - Realtor X Webflow Template"
                    />
                </div>
            </section>
        </main>
    );
};

Contact.layout = (
    page:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
) => <Layout children={page} title="Contact" />;
export default Contact;
