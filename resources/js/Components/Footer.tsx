import React, { Suspense } from "react";
import styled, { useTheme } from "styled-components";
import Container from "../shared/Container";
import { routes, SLogo } from "./Header";
import { Subtitle, SH4 } from "../shared/Text";
import { Flex } from "../shared/Flex";
import useMediaQuery from "../hooks/useMediaQuery";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "react-feather";
import LineIcon from "react-lineicons";
import { Link, usePage } from "@inertiajs/inertia-react";
import { SInput } from "./Input";
import { SecondaryButton } from "./Buttons";
import { MailIcon } from "@heroicons/react/outline";
import { Grid } from "../shared/Grid";
import { Image } from "./Image";
import { ArrowRightIcon } from "@heroicons/react/outline";

export const SMHandles = [
    {
        name: "facebook",
        icon: <LineIcon name="facebook-filled" />,
        url: "https://facebook.com/britpropertyng",
    },
    {
        name: "twitter",
        icon: <LineIcon name="twitter-filled" />,
        url: "https://twitter.com/BritPropertyng",
    },
    {
        name: "instagram",
        icon: <LineIcon name="instagram-original" />,
        url: "https://www.instagram.com/britpropertyng_/",
    },
    {
        name: "linkedin",
        icon: <LineIcon name="linkedin-original" />,
        url: "",
    },
    {
        name: "youtube",
        icon: <LineIcon name="youtube" />,
        url: "https://www.youtube.com/channel/UCVxDf7_sOyLiAEiv6IMmxWw/videos",
    },
    {
        name: "whatsapp",
        icon: <LineIcon name="whatsapp" />,
        url: "https://wa.me/2348112427496",
    },
];

const SMLink: React.FC<{
    className?: string;
    path: string;
    icon: React.ReactElement;
    fill?: string;
    height?: string;
}> = ({ className, path, icon }) => (
    <Link href={path} className={className}>
        {icon}
    </Link>
);

export const SM = styled(SMLink)`
    background-color: ${({ theme }) => theme.primaryColor};
    &:hover {
        background-color: ${({ theme }) => theme.secondaryColor};
    }
    color: #fff;
    border-radius: 1000000px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${({ height }) => (height ? height : "34px")};
    min-width: ${({ height }) => (height ? height : "34px")};
    max-height: ${({ height }) => (height ? height : "34px")};
    max-width: ${({ height }) => (height ? height : "34px")};
    font-size: 16px;
    transition: background 300ms ease;
    svg {
        height: 16px;
    }
`;

const SubscribeForm: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <form className={className}>
            <Flex width="100%">
                <SInput
                    margin="0 0 12px 0"
                    placeholder="Enter your email address"
                    type="email"
                />
                <MailIcon />
            </Flex>
            <SecondaryButton>Subscribe</SecondaryButton>
        </form>
    );
};

const SSubscribe = styled(SubscribeForm)`
    margin-top: 22px;
    position: relative;
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
`;

interface Property {
    path: string;
    image: string;
    location: string;
    description: string;
}

const featured: Property[] = [
    {
        path: "",
        image: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg",
        location: "Imo, Nigeria",
        description:
            "Lorem ipsum dolor sit amet cons ectetur adipiscing elit mag",
    },
    {
        path: "",
        image: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg",
        location: "Warri, Nigeria",
        description:
            "Lorem ipsum dolor sit amet cons ectetur adipiscing elit mag",
    },
    {
        path: "",
        image: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg",
        location: "Lagos, Nigeria",
        description:
            "Lorem ipsum dolor sit amet cons ectetur adipiscing elit mag",
    },
];

const Featured: React.FC<{
    property: Property;
    className?: string;
    small?: boolean;
}> = ({ property, className, small }) => (
    <Link href={property.path} className={className}>
        <Flex
            direction={small ? "column" : "row"}
            align={small ? "flex-start" : "center"}
        >
            <div style={{ marginBottom: small ? "10px" : 0 }}>
                <Suspense fallback="logo">
                    <Image src={property.image} />
                </Suspense>
            </div>
            <div
                style={{
                    marginBottom: "9px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        color: "#222223",
                        fontSize: "18px",
                        lineHeight: "1.333em",
                        fontWeight: 700,
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            color: "#222223",
                            fontSize: "18px",
                            lineHeight: "1.333em",
                            fontWeight: 700,
                            marginRight: "12px",
                        }}
                    >
                        <h5>{property.location}</h5>
                    </div>
                    <ArrowRightIcon />
                </div>
                <Subtitle margin={small ? "0" : ""} transform={true}>
                    {property.description}
                </Subtitle>
            </div>
        </Flex>
    </Link>
);

const SFeatured = styled(Featured)`
    &>div>div: first-of-type {
        height: ${({ small }) => (small ? "80px" : "137px")};
        width: ${({ small }) => (small ? "80px" : "137px")};
        max-height: ${({ small }) => (small ? "80px" : "137px")};
        min-height: ${({ small }) => (small ? "80px" : "137px")};
        max-width: ${({ small }) => (small ? "80px" : "137px")};
        min-width: ${({ small }) => (small ? "80px" : "137px")};
        background: rgba(248, 87, 87, 0.2);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 36px;
    }
    h5 {
        color: #222223;
        font-size: 18px;
        line-height: 1.333em;
        font-weight: 700;
    }
    svg {
        height: 15px;
    }
    &:hover {
        h5,
        svg {
            color: ${({ theme }) => theme.secondaryColor};
        }
        img {
            transform: scale(1.1);
        }
        svg {
            transform: translateX(10px);
            transition: transform 0.5s ease;
        }
    }
`;

const Foot: React.FC<{ className?: string }> = ({ className }) => {
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    const theme = useTheme();
    const { appYear } = usePage().props;
    return (
        <footer className={className}>
            <Container>
                <div>
                    <div>
                        <Flex
                            direction={isDesktop ? "row" : "column"}
                            justify={isDesktop ? "space-between" : "flex-start"}
                        >
                            <div
                                style={{
                                    maxWidth: isDesktop ? "466px" : "100%",
                                    marginRight: "40px",
                                    marginBottom: isDesktop ? 0 : "50px",
                                }}
                            >
                                <Suspense>
                                    <SLogo />
                                </Suspense>
                                <Subtitle transform={true}>
                                    Turning your dream home into reality
                                </Subtitle>
                                <Flex direction="row" gap="16px">
                                    {SMHandles.map((handle, index) => (
                                        <SM
                                            key={index}
                                            path={handle.url}
                                            icon={handle.icon}
                                        />
                                    ))}
                                </Flex>
                            </div>
                            <div
                                style={{
                                    flexGrow: 1,
                                    maxWidth: isDesktop ? "460px" : "",
                                    width: isDesktop ? "" : "100%",
                                }}
                            >
                                <SH4>Subscribe to our newsletter</SH4>
                                <SSubscribe />
                            </div>
                        </Flex>
                        <div
                            style={{
                                minHeight: "1px",
                                margin: "80px 0",
                                width: "100%",
                                opacity: 1,
                                backgroundColor: "#e9e9e9",
                            }}
                        ></div>
                        <Flex
                            justify="space-between"
                            direction={isDesktop ? "row" : "column"}
                        >
                            <div
                                style={{
                                    maxWidth: "739px",
                                    marginRight: "40px",
                                    flexGrow: 1,
                                    width: "100%",
                                }}
                            >
                                <Flex
                                    direction={isMiniMobile ? "column" : "row"}
                                    justify={
                                        !isMiniMobile && !isDesktop
                                            ? ""
                                            : "space-around"
                                    }
                                    width="100%"
                                >
                                    <div
                                        style={{
                                            width:
                                                !isMiniMobile && !isDesktop
                                                    ? "50%"
                                                    : "",
                                        }}
                                    >
                                        <SH4 margin="0 0 48px 0">Pages</SH4>
                                        <ul>
                                            {routes.map((route, index) => (
                                                <li key={index}>
                                                    <Link href={route.path}>
                                                        {route.route}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <SH4 margin="0 0 48px 0">
                                            Useful Pages
                                        </SH4>
                                        <ul>
                                            <li>
                                                <Link href="/">Licenses</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Privacy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Flex>
                            </div>
                            <div style={{ width: "100%", maxWidth: "448px" }}>
                                <SH4 margin="0 0 48px 0">Explore by City</SH4>
                                <Grid
                                    columnGap="20px"
                                    rowGap="20px"
                                    columns={1}
                                >
                                    {featured.map((property, index) => (
                                        <SFeatured
                                            small={isMiniMobile}
                                            key={index}
                                            property={property}
                                        />
                                    ))}
                                </Grid>
                            </div>
                        </Flex>
                        <div
                            style={{
                                minHeight: "1px",
                                margin: isDesktop
                                    ? "80px 0 36px 0"
                                    : isMiniMobile
                                    ? "36px 0 "
                                    : "56px 0",
                                width: "100%",
                                opacity: 1,
                                backgroundColor: "#e9e9e9",
                            }}
                        ></div>
                        <div style={{ width: "100%" }}>
                            <div style={{ width: "100%", textAlign: "center" }}>
                                <Subtitle transform={true}>
                                    <>
                                        Copyright &copy; Brit Properties{" "}
                                        {appYear} | Powered by{" "}
                                        <Link
                                            href="https://www.hoffenheimtechnologies.com/"
                                            target="blank"
                                            style={{
                                                color: theme.secondaryColor,
                                            }}
                                        >
                                            Hoffenheim Technologies
                                        </Link>
                                    </>
                                </Subtitle>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

const Footer = styled(Foot)`
    overflow: hidden;
    padding-top: 80px;
    padding-bottom: 32px;
    border-top: 1px solid #e9e9e9;
    background-attachment: scroll;

    img {
        margin-bottom: 16px;
        cursor: pointer;
    }
    // p {
    //     margin: 0;
    // }

    ul a {
        display: block;
        margin-bottom: 24px;
        color: #616066;
        font-size: 16px;
        line-height: 1.125em;
        transition: color 300ms ease;
        &:hover {
            color: ${({ theme }) => theme.secondaryColor};
        }
    }
`;

export default Footer;
