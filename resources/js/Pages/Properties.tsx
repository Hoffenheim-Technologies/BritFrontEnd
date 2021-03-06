import {
    ArrowsExpandIcon,
    CashIcon,
    ChevronDownIcon,
    HomeIcon,
    LocationMarkerIcon,
    SearchIcon,
} from "@heroicons/react/outline";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../Components/Buttons";
import { SearchBar } from "../Components/Header";
import { SInput } from "../Components/Input";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import Container, { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { SBadge as Badge } from "../Components/Badges";
import { SH2, SH3, Subtitle } from "../shared/Text";
import { Grid } from "../shared/Grid";

interface Prop {
    image: {
        src: string;
        sizes: string;
        srcSet: string;
    };
    price: number;
    name: string;
    location: string;
    area: number;
    type: string;
    link: string;
}
const Property: React.FC<{
    property: Prop;
    isMiniMobile?: boolean;
    isSmall?: boolean;
    isDesktop?: boolean;
}> = ({ property, isMiniMobile, isSmall, isDesktop }) => (
    <div>
        <Link
            href={property.link}
            style={{
                display: "flex",
                minHeight: "100%",
                padding: "0px",
                flexDirection: "column",
                transition: "box-shadow 300ms ease, transform 300ms ease",
                overflow: "hidden",
                borderRadius: "24px",
                backgroundColor: "#fff",
                boxShadow: "0 3px 20px 0 rgba(8, 15, 52, 0.06)",
                color: "#8d8d91",
                textDecoration: "none",
            }}
        >
            <div
                style={{
                    display: "flex",
                    overflow: "hidden",
                    alignItems: "center",
                    transform: "translate(0px, 0px)",
                    position: "relative",
                }}
            >
                <img
                    src={property.image.src}
                    loading="eager"
                    alt={property.name}
                    sizes={property.image.sizes}
                    style={
                        isDesktop
                            ? { height: "222.43px", minWidth: "28vw" }
                            : !isSmall
                            ? { height: "222.43px" }
                            : {}
                    }
                    // srcSet={property.image.srcSet}
                />
            </div>
            <div style={{ padding: "46px 35px 38px" }}>
                <div style={{ marginBottom: "14px" }}>
                    <Flex align="flex-start" direction={"column"}>
                        <div>
                            <SH3>
                                &#8358;
                                {property.price.toLocaleString("en-US")}
                            </SH3>
                        </div>
                        <div
                            style={{
                                width: isSmall ? "100%" : "",
                            }}
                        >
                            <SH3>{property.name}</SH3>
                        </div>
                    </Flex>
                </div>
                <div style={{ display: "flex", alignContent: "center" }}>
                    <LocationMarkerIcon
                        style={{ width: "20px", marginRight: "10px" }}
                    />
                    <p>{property.location}</p>
                </div>

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
                        <Badge style={{ margin: "0 18px 0 0" }}>
                            {property.type}
                        </Badge>
                    </Flex>
                </div>
            </div>
        </Link>
    </div>
);
const Filter: React.FC<{
    maxWidth?: string;
    icon: React.ReactNode;
    filter: string;
    active: boolean;
    onMouseEnter?: any;
    onMouseLeave?: any;
    onClick?: any;
}> = ({
    maxWidth,
    icon,
    filter,
    active,
    onMouseEnter,
    onMouseLeave,
    onClick,
}) => {
    return (
        <div
            style={{ width: "100%", maxWidth: maxWidth }}
            onMouseEnter={() => onMouseEnter(true)}
            onMouseLeave={() => onMouseLeave(false)}
            onClick={() => {
                onClick(!active);
            }}
        >
            <Flex
                style={{
                    padding: "31px 18px",
                    boxShadow: "0 3px 20px 0 rgba(8, 15, 52, 0.06)",
                    borderRadius: "12px",
                    borderColor: active ? "#f85757" : "",
                    color: active ? "#f85757" : "#8d8d91",
                }}
                gap={"10px"}
                justify="space-between"
            >
                <Flex gap={"10px"}>
                    <div style={{ width: "21px" }}>{icon}</div>
                    <span style={{ textTransform: "capitalize" }}>
                        {filter}
                    </span>
                </Flex>
                <div style={{ width: "21px", justifySelf: "self-end" }}>
                    <ChevronDownIcon
                        style={
                            active
                                ? {
                                      transform: "rotate(-180deg)",
                                      transition: "transform ease .3s",
                                  }
                                : { transition: "transform ease .3s" }
                        }
                    />
                </div>
            </Flex>
        </div>
    );
};
const Properties = () => {
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    const isDesktop = useMediaQuery("(min-width: 960px)");
    const isTinyMobile = useMediaQuery("(max-width: 374px)");
    const isTablet = useMediaQuery("(max-width: 767px)");
    const [lactive, setLactive] = useState(true);
    const [pactive, setPactive] = useState(true);
    const [tactive, setTactive] = useState(true);
    useEffect(() => {
        setLactive(false);
        setPactive(false);
        setTactive(false);
    }, []);

    const filters = [
        {
            name: "location",
            icon: <LocationMarkerIcon />,
            state: { name: lactive, action: setLactive },
        },
        {
            name: "property",
            icon: <HomeIcon />,
            state: { name: pactive, action: setPactive },
        },
        {
            name: "type",
            icon: <CashIcon />,
            state: { name: tactive, action: setTactive },
        },
    ];
    const properties: Prop[] = [
        {
            image: {
                src: "/assets/valerie1.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-500.jpeg 500w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template.jpg 1832w",
            },
            price: 650000,
            name: "Valerie Phase 1",
            location: "Imo, Nigeria",
            area: 550,
            type: "Land",
            link: "",
        },
        {
            image: {
                src: "/assets/valerie2.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg 1832w",
            },
            price: 5000000,
            name: "Britwook Park 1",
            location: "CrossRiver, Nigeria",
            area: 400,
            type: "Residential",
            link: "",
        },
        {
            image: {
                src: "/assets/valerie3.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/61953924b3ead41ff043a5ed_image-thumbnail-4-property-posts-realtor-template.jpg 1832w",
            },
            price: 1200000,
            name: "Bethel Home Phase 3",
            location: "Lagos, Nigeria",
            area: 550,
            type: "Dry Land",
            link: "",
        },
        {
            image: {
                src: "/assets/valerie5.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template.jpg 1832w",
            },
            price: 34000000,
            name: "Bethel Home Phase 2",
            location: "Warri, Nigeria",
            area: 550,
            type: "Industrial",
            link: "",
        },
        {
            image: {
                src: "/assets/valerie1.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template.jpg 1832w",
            },
            price: 34000000,
            name: "Bethel Home Phase 1",
            location: "Jigawa, Nigeria",
            area: 550,
            type: "Industrial",
            link: "",
        },
        {
            image: {
                src: "/assets/valerie1.jpg",
                sizes: "(max-width: 767px) 90vw, (max-width: 991px) 86vw, (max-width: 1919px) 46vw, 607.5px",
                srcSet: "https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-800.jpeg 800w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template-p-1600.jpeg 1600w, https://assets.website-files.com/6193ce0889184df85cd96c91/619538b1f22c8819e89bc594_image-thumbnail-3-property-posts-realtor-template.jpg 1832w",
            },
            price: 34000000,
            name: "Bethel Home Phase 3",
            location: "Lagos, Nigeria",
            area: 550,
            type: "Industrial",
            link: "",
        },
    ];

    return (
        <main>
            <section style={{ paddingTop: "58px" }}>
                <SmallContainer width="601px">
                    <div
                        style={{
                            margin: "auto",
                            maxWidth: "486px",
                            textAlign: "center",
                        }}
                    >
                        <div>
                            <SH2>Browse Properties</SH2>
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
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div style={{ marginBottom: "82px" }}>
                            <div
                                style={
                                    !isDesktop
                                        ? { maxWidth: "660px", margin: "auto" }
                                        : {}
                                }
                            >
                                <Flex
                                    direction={isDesktop ? "row" : "column"}
                                    gap={isDesktop ? "40px" : "50px"}
                                >
                                    <div
                                        style={
                                            isDesktop
                                                ? {
                                                      maxWidth: "499px",
                                                      width: "100%",
                                                  }
                                                : {
                                                      maxWidth: "100%",
                                                      width: "100%",
                                                  }
                                        }
                                    >
                                        <SearchBar
                                            style={{
                                                padding: "12px 20px",
                                                borderRadius: "12px",
                                            }}
                                        >
                                            <form>
                                                <Flex
                                                    direction={
                                                        isTablet
                                                            ? "column"
                                                            : "row"
                                                    }
                                                    align="center"
                                                    justify="space-between"
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                        }}
                                                    >
                                                        <SearchIcon
                                                            style={{
                                                                width: "24px",
                                                            }}
                                                        />
                                                        <SInput
                                                            type="search"
                                                            maxLength={256}
                                                            placeholder="Search for properties"
                                                            required={true}
                                                            width={
                                                                isTablet
                                                                    ? "calc(100vw - 200px)"
                                                                    : "100%"
                                                            }
                                                            margin={
                                                                isTablet
                                                                    ? "15px 0"
                                                                    : "0 20px 0 0"
                                                            }
                                                            style={{
                                                                backgroundColor:
                                                                    "transparent",
                                                                border: 0,
                                                                outline: "none",
                                                            }}
                                                        />
                                                    </div>
                                                    <SecondaryButton
                                                        width={
                                                            isTablet
                                                                ? "100%"
                                                                : ""
                                                        }
                                                        style={
                                                            isDesktop
                                                                ? {
                                                                      position:
                                                                          "absolute",
                                                                      right: 0,
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        Search
                                                    </SecondaryButton>
                                                </Flex>
                                            </form>
                                        </SearchBar>
                                    </div>
                                    <Flex
                                        direction={isTablet ? "column" : "row"}
                                        gap={"20px"}
                                    >
                                        {filters.map((filter, index) => (
                                            <Filter
                                                key={index}
                                                icon={filter.icon}
                                                filter={filter.name}
                                                active={filter.state.name}
                                                onMouseEnter={
                                                    filter.state.action
                                                }
                                                onMouseLeave={
                                                    filter.state.action
                                                }
                                                onClick={filter.state.action}
                                            />
                                        ))}
                                    </Flex>
                                </Flex>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Grid
                                columns={isDesktop ? 3 : isTablet ? 1 : 2}
                                columnGap="26px"
                                rowGap="45px"
                            >
                                {properties.map((property, index) => (
                                    <Property
                                        key={index}
                                        property={property}
                                        isSmall={isTablet}
                                        isDesktop={isDesktop}
                                        isMiniMobile={isMiniMobile}
                                    />
                                ))}
                            </Grid>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
};

Properties.layout = (
    page:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
) => <Layout children={page} title="Properties" />;
export default Properties;
