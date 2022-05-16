import {
    CashIcon,
    ChevronDownIcon,
    HomeIcon,
    LocationMarkerIcon,
    SearchIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../Components/Buttons";
import { SearchBar } from "../Components/Header";
import { SInput } from "../Components/Input";
import useMediaQuery from "../hooks/useMediaQuery";
import Layout from "../Layouts/Layout";
import Container, { SmallContainer } from "../shared/Container";
import { Flex } from "../shared/Flex";
import { SH2, Subtitle } from "../shared/Text";

const Filter: React.FC<{
    maxWidth?: string;
    icon: React.ReactNode;
    filter: string;
    active?: boolean;
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
            onClick={() => onClick(!active)}
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
    const isDesktop = useMediaQuery("(min-width: 900px)");
    const isTinyMobile = useMediaQuery("(max-width: 374px)");
    const isTablet = useMediaQuery("(max-width: 767px)");
    const [lactive, setLactive] = useState(false);
    const [pactive, setPactive] = useState(false);
    const [tactive, setTactive] = useState(false);
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
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit odio massa eget posuere at proin lectus proin
                            morbi
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
