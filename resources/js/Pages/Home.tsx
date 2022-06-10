import { Link } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import styled from "styled-components";
import {
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from "../Components/Buttons";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import Container, { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { BoldContent, SH2, SH3, Subtitle } from "../shared/Text";
import { SBadge as Badge } from "../Components/Badges";
import { ArrowsExpandIcon, MailIcon } from "@heroicons/react/outline";
import { Grid } from "../shared/Grid";
import Card from "../Components/Card";
import { SInput, STextArea } from "../Components/Input";
import LineIcon from "react-lineicons";
import { SM } from "../Components/Footer";

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
                        src="/assets/home-hero.jpg"
                        loading="eager"
                        // sizes="100vw"
                        // srcSet="https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1410cffb1c0b026536_image-1-hero-v2-realtor-template.jpg 2258w"
                        alt="Real Agent - Realtor X Webflow Template"
                    />
                </div>
                <div className="image-wrapper second">
                    <img
                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1421cb1a6f711390c7_image-2-hero-v2-realtor-template.jpg"
                        loading="eager"
                        // sizes="100vw"
                        // srcSet="https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1421cb1a6f711390c7_image-2-hero-v2-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1421cb1a6f711390c7_image-2-hero-v2-realtor-template-p-1080.jpeg 1080w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61967f1421cb1a6f711390c7_image-2-hero-v2-realtor-template.jpg 1312w"
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
                src: "/assets/valerie1.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                // srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template.jpg 1832w",
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
                src: "/assets/valerie1.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                // srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg 1832w",
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
                src: "/assets/valerie2.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                // srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg 1832w",
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
                src: "/assets/valerie3.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                // srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template.jpg 1832w",
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
                                        // srcSet={property.image.srcSet}
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

const ContactCard = styled(Card)`
    display: flex;
    min-height: 724px;
    padding: 89px 55px;
    align-items: center;
    border-radius: 20px;
    @media (max-width: 770px) {
        padding: 40px 25px;
    }
`;

const ContactSection: React.FC<{ className?: string; mobile: boolean }> = ({
    className,
    mobile,
}) => {
    const SMHandles = [
        {
            name: "facebook",
            icon: <LineIcon name="facebook-filled" />,
            url: "",
        },
        {
            name: "twitter",
            icon: <LineIcon name="twitter-filled" />,
            url: "",
        },
        {
            name: "instagram",
            icon: <LineIcon name="instagram-original" />,
            url: "",
        },

        { name: "whatsapp", icon: <LineIcon name="whatsapp" />, url: "" },
    ];
    const phone = "(+234)8077789898";
    const email = "info@britproperties.ng";
    const isDesktop = useMediaQuery("(min-width: 960px");
    const isMiniMobile = useMediaQuery("(max-width: 500px");
    return (
        <div className={className}>
            <Flex
                direction={mobile ? "column" : "row"}
                justify="space-between"
                align="center"
            >
                <div
                    style={{
                        maxWidth: isDesktop ? "469px" : "",
                        marginRight: isDesktop ? "30px" : "",
                        marginBottom: "40px",
                    }}
                >
                    <div>
                        <SH2>
                            Get in touch to schedule a visit to one of our
                            properties.
                        </SH2>
                    </div>
                    <div style={{ marginBottom: "26px" }}>
                        <Subtitle>
                            We're eagerly looking forward to hearing from you
                        </Subtitle>
                    </div>
                    <Grid columns={1} rowGap={"16px"} width="100%">
                        <a href={`tel: ${phone}`} style={{ width: "inherit" }}>
                            <Card padding="18px">
                                <Flex
                                    direction={isMiniMobile ? "column" : "row"}
                                    align={isMiniMobile ? "" : "center"}
                                >
                                    <div
                                        style={{
                                            width: "84px",
                                            maxHeight: "84px",
                                            minHeight: "84px",
                                            minWidth: "84px",
                                            marginRight: "20px",
                                            marginBottom: "15px",
                                            borderRadius: "10000000px",
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
                                        <Subtitle margin="6px" transform={true}>
                                            Give us a call
                                        </Subtitle>
                                        <SH3>{phone}</SH3>
                                    </div>
                                </Flex>
                            </Card>
                        </a>
                        <a
                            href={`mailto: ${email}`}
                            style={{ width: "inherit" }}
                        >
                            <Card padding="33px 30px 18px">
                                <Flex
                                    direction={isMiniMobile ? "column" : "row"}
                                    align={isMiniMobile ? "" : "center"}
                                >
                                    <div
                                        style={{
                                            width: "84px",
                                            maxHeight: "84px",
                                            minHeight: "84px",
                                            minWidth: "84px",
                                            marginRight: "20px",
                                            marginBottom: "15px",
                                            borderRadius: "10000000px",
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
                                        <Subtitle margin="6px" transform={true}>
                                            Send us an email
                                        </Subtitle>
                                        <SH3 style={{ lineBreak: "anywhere" }}>
                                            {email}
                                        </SH3>
                                    </div>
                                </Flex>
                            </Card>
                        </a>
                    </Grid>
                </div>
                <div
                    style={{
                        width: "100%",
                        maxWidth: "704px",
                        minWidth: isDesktop ? "593px" : "auto",
                    }}
                >
                    <ContactCard>
                        <div style={{ flex: 1, maxWidth: "100%" }}>
                            <form>
                                <Flex width="100%">
                                    <SInput
                                        margin="0 0 12px 0"
                                        placeholder="Full name"
                                        type="text"
                                    />
                                    <MailIcon />
                                </Flex>
                                <Flex width="100%">
                                    <SInput
                                        margin="0 0 12px 0"
                                        placeholder="Email"
                                        type="email"
                                    />
                                    <MailIcon />
                                </Flex>
                                <Flex width="100%">
                                    <SInput
                                        margin="0 0 12px 0"
                                        placeholder="Phone"
                                        type="tel"
                                    />
                                    <MailIcon />
                                </Flex>
                                <Flex width="100%">
                                    <SInput
                                        margin="0 0 12px 0"
                                        placeholder="Property type"
                                        type="text"
                                    />
                                    <MailIcon />
                                </Flex>
                                <Flex width="100%">
                                    <SInput
                                        margin="0 0 12px 0"
                                        placeholder="Desired date"
                                        type="date"
                                    />
                                    <MailIcon />
                                </Flex>
                                <Flex width="100%">
                                    <SInput
                                        margin="0 0 12px 0"
                                        placeholder="Desired time"
                                        type="time"
                                    />
                                    <MailIcon />
                                </Flex>
                                <div style={{ gridColumn: "1 / span 2" }}>
                                    <STextArea
                                        placeholder="Please write any additional note here..."
                                        maxLength={5000}
                                    />
                                </div>
                                <div style={{ gridColumn: "1 / span 2" }}>
                                    <Flex
                                        direction={
                                            isMiniMobile ? "column" : "row"
                                        }
                                        width="100%"
                                        justify={
                                            isMiniMobile ? "" : "space-between"
                                        }
                                        align={isMiniMobile ? "" : "center"}
                                        gap={isMiniMobile ? "10px" : ""}
                                    >
                                        <SecondaryButton>
                                            Send Message
                                        </SecondaryButton>
                                        <Flex
                                            width="fit-content"
                                            direction="row"
                                            gap="16px"
                                        >
                                            {SMHandles.map((handle, index) => (
                                                <SM
                                                    key={index}
                                                    path={handle.url}
                                                    icon={handle.icon}
                                                />
                                            ))}
                                        </Flex>
                                    </Flex>
                                </div>
                            </form>
                        </div>
                    </ContactCard>
                </div>
            </Flex>
        </div>
    );
};

const Contact = styled(ContactSection)`
    form {
        display: grid;
        grid-auto-columns: 1fr;
        grid-column-gap: 21px;
        grid-row-gap: 28px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;

        @media (max-width: 770px) {
            display: block;
        }
    }
    input {
        padding-right: 50px;
        max-width: 100%;
        &:hover,
        &:focus {
            & ~ svg {
                color: inherit;
            }
        }
    }
    svg {
        position: absolute;
        width: 32px;
        color: #8d8d91;
        top: calc(1.5em + 4px);
        right: 20px;
        transform: translateY(-50%);
        stroke-width: 1px;
    }
    img {
        width: 100%;
        height: 100%;
        transform: perspective(1000px);
        object-fit: cover;
    }
`;
const Home = () => {
    document.addEventListener("scroll", homescroll);
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    const isDesktop = useMediaQuery("(min-width: 960px)");
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
                            Nigeria's premier Property firm, offers Land and
                            Estate services in various states in Nigeria.
                            Contact us for free advice &amp; counseling on
                            purchasing a property or any land related issues.
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
                            Brit Properties is a property services company that
                            offers land and estate services in various states in
                            Nigeria including Abuja. We are a family owned
                            business with over twenty years' experience in the
                            real estate industry.
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
            <section
                style={{
                    display: isDesktop ? "flex" : "block",
                    height: isDesktop ? "970px" : "auto",
                    alignItems: "center",
                }}
            >
                <Container>
                    <div
                        style={{
                            maxWidth: isDesktop ? "" : "660px",
                            margin: isDesktop ? "" : "auto",
                        }}
                    >
                        <Flex
                            align="center"
                            justify="space-between"
                            direction={isDesktop ? "row" : "column"}
                        >
                            <div
                                style={{
                                    maxWidth: isDesktop ? "39%" : "",
                                    marginBottom: isDesktop ? "" : "30px",
                                    minWidth: isMiniMobile ? "100%" : "401px",
                                }}
                            >
                                <SH2>Why Purchase with Us?</SH2>
                                <Subtitle style={{ marginBottom: "34px" }}>
                                    BritProperties is one of the fastest growing
                                    land and estate agencies that provides
                                    exclusive and professional land and real
                                    estate services to its clients in Nigeria.
                                </Subtitle>
                                <Grid
                                    columns={1}
                                    rowGap={"16px"}
                                    rows="auto"
                                    align={isDesktop ? "" : "center"}
                                >
                                    <Flex>
                                        <img
                                            style={{
                                                width: "28px",
                                                maxHeight: "28px",
                                                minHeight: "28px",
                                                minWidth: "28px",
                                                marginTop: "-3px",
                                                marginRight: "12px",
                                                borderRadius: "10000000px",
                                                display: "inline-block",
                                            }}
                                            src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619698760c06a552711c5b59_icon-1-check-realtor-template.svg"
                                            loading="eager"
                                            alt="Check Icon - Realtor X Webflow Template"
                                        />
                                        <div
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "1.111em",
                                                fontWeight: "500",
                                                color: "#616066",
                                            }}
                                        >
                                            Excellent service
                                        </div>
                                    </Flex>
                                    <Flex>
                                        <img
                                            style={{
                                                width: "28px",
                                                maxHeight: "28px",
                                                minHeight: "28px",
                                                minWidth: "28px",
                                                marginTop: "-3px",
                                                marginRight: "12px",
                                                borderRadius: "10000000px",
                                                display: "inline-block",
                                            }}
                                            src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619698760c06a552711c5b59_icon-1-check-realtor-template.svg"
                                            loading="eager"
                                            alt="Check Icon - Realtor X Webflow Template"
                                        />
                                        <div
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "1.111em",
                                                fontWeight: "500",
                                                color: "#616066",
                                            }}
                                        >
                                            Prompt responses
                                        </div>
                                    </Flex>
                                    <Flex>
                                        <img
                                            style={{
                                                width: "28px",
                                                maxHeight: "28px",
                                                minHeight: "28px",
                                                minWidth: "28px",
                                                marginTop: "-3px",
                                                marginRight: "12px",
                                                borderRadius: "10000000px",
                                                display: "inline-block",
                                            }}
                                            src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619698760c06a552711c5b59_icon-1-check-realtor-template.svg"
                                            loading="eager"
                                            alt="Check Icon - Realtor X Webflow Template"
                                        />
                                        <div
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "1.111em",
                                                fontWeight: "500",
                                                color: "#616066",
                                            }}
                                        >
                                            Confidence and Quality Assurance
                                        </div>
                                    </Flex>
                                    <Flex>
                                        <img
                                            style={{
                                                width: "28px",
                                                maxHeight: "28px",
                                                minHeight: "28px",
                                                minWidth: "28px",
                                                marginTop: "-3px",
                                                marginRight: "12px",
                                                borderRadius: "10000000px",
                                                display: "inline-block",
                                            }}
                                            src="https://assets.website-files.com/6193ce0889184dacb7d96c80/619698760c06a552711c5b59_icon-1-check-realtor-template.svg"
                                            loading="eager"
                                            alt="Check Icon - Realtor X Webflow Template"
                                        />
                                        <div
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "1.111em",
                                                fontWeight: "500",
                                                color: "#616066",
                                            }}
                                        >
                                            Reliable and Trustworthy
                                        </div>
                                    </Flex>
                                </Grid>
                            </div>
                        </Flex>
                    </div>
                </Container>
                <div
                    style={{
                        top: "0%",
                        right: "0%",
                        bottom: "0%",
                        width: isDesktop ? "50%" : "100%",
                        position: isDesktop ? "absolute" : "relative",
                    }}
                >
                    <img
                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/61969b2d1d8cb6eddb815e35_image-perks-realtor-template.jpg"
                        loading="eager"
                        data-w-id="4a410718-534f-7d64-fa07-496ed529cc65"
                        srcSet="https://assets.website-files.com/6193ce0889184dacb7d96c80/61969b2d1d8cb6eddb815e35_image-perks-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184dacb7d96c80/61969b2d1d8cb6eddb815e35_image-perks-realtor-template.jpg 1440w"
                        sizes="(max-width: 991px) 100vw, 50vw"
                        alt="House Real Estate - Realtor X Webflow Template"
                        style={{
                            width: "100%",
                            height: "100%",
                            transform: "perspective(1000px)",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </section>
            <section
                style={{
                    display: isDesktop ? "flex" : "block",
                    height: isDesktop ? "970px" : "auto",
                    alignItems: "center",
                }}
            >
                <Container>
                    <div
                        style={{
                            maxWidth: isDesktop ? "" : "660px",
                            margin: isDesktop ? "" : "auto",
                        }}
                    >
                        <Flex
                            direction={!isDesktop ? "column" : "row"}
                            align="center"
                            justify="space-between"
                        >
                            <div
                                style={{
                                    maxWidth: isDesktop ? "39%" : "700px",
                                    minWidth: isMiniMobile ? "100%" : "401px",
                                    marginBottom: isDesktop ? "" : "30px",
                                    marginLeft: "auto",
                                    marginRight: isDesktop ? "-100px" : "auto",
                                }}
                            >
                                <SH2>About Brit Properties</SH2>
                                <Subtitle style={{ marginBottom: "34px" }}>
                                    BritProperties provides land, estate and
                                    related real estate services. We handle Land
                                    Acquisition and Preparation of Title Deeds,
                                    Mortgage and Conveyancing, Property
                                    Management & Development in Lagos and Abuja.
                                </Subtitle>
                                <div style={{ marginBottom: "54px" }}>
                                    <div style={{ maxWidth: "476px" }}>
                                        <Grid
                                            columns={isMiniMobile ? 1 : 2}
                                            columnGap={"16px"}
                                            rowGap={"60px"}
                                            justify="flex-start"
                                        >
                                            <div>
                                                <div
                                                    style={{
                                                        marginBottom: "10px",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            color: "#f85757",
                                                            fontSize: "48px",
                                                            lineHeight:
                                                                "1.25em",
                                                            fontWeight: "700",
                                                        }}
                                                    >
                                                        99%
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "18px",
                                                        lineHeight: "1.111em",
                                                        color: "#222223",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    Customer satisfaction
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div
                                                        style={{
                                                            color: "#f85757",
                                                            fontSize: "48px",
                                                            lineHeight:
                                                                "1.25em",
                                                            fontWeight: "700",
                                                        }}
                                                    >
                                                        230+
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "18px",
                                                        lineHeight: "1.111em",
                                                        color: "#222223",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    Successful sales
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div
                                                        style={{
                                                            color: "#f85757",
                                                            fontSize: "48px",
                                                            lineHeight:
                                                                "1.25em",
                                                            fontWeight: "700",
                                                        }}
                                                    >
                                                        500M+
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "18px",
                                                        lineHeight: "1.111em",
                                                        color: "#222223",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    In property sales
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div
                                                        style={{
                                                            color: "#f85757",
                                                            fontSize: "48px",
                                                            lineHeight:
                                                                "1.25em",
                                                            fontWeight: "700",
                                                        }}
                                                    >
                                                        10%
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "18px",
                                                        lineHeight: "1.111em",
                                                        color: "#222223",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    Avg yearly appreciation
                                                </div>
                                            </div>
                                        </Grid>
                                    </div>
                                </div>
                                <Link href="/about">
                                    <PrimaryButton
                                        width={isMiniMobile ? "100%" : ""}
                                    >
                                        About Us
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </Flex>
                    </div>
                </Container>
                <div
                    style={{
                        top: "0%",
                        left: "0%",
                        bottom: "0%",
                        width: isDesktop ? "50%" : "100%",
                        position: isDesktop ? "absolute" : "relative",
                    }}
                >
                    <img
                        src="https://assets.website-files.com/6193ce0889184dacb7d96c80/61969b2d7f0ca2e2d5593633_image-about-section-v2-realtor-template.jpg"
                        loading="eager"
                        data-w-id="a390926b-b834-b6f5-1eae-a3de11336098"
                        alt="Real Agent - Realtor X Webflow Template"
                        style={{
                            width: "100%",
                            height: "100%",
                            transform: "perspective(1000px)",
                            objectFit: "cover",
                        }}
                    />
                </div>
            </section>
            <section
                style={{
                    backgroundColor: "rgb(249,249,249)",
                }}
            >
                <Container>
                    <Contact mobile={!isDesktop} />
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
