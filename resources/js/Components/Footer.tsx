import React, { Suspense } from "react";
import styled, { useTheme } from "styled-components";
import Container from "../shared/Container";
import { SLogo } from "./Header";
import { Subtitle, SH4 } from "../shared/Text";
import { Flex } from "../shared/Flex";
import useMediaQuery from "../hooks/useMediaQuery";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "react-feather";
import LineIcon from "react-lineicons";
import { Link, usePage } from "@inertiajs/inertia-react";
import { SInput } from "./Input";
import { SecondaryButton } from "./Buttons";
import { MailIcon } from "@heroicons/react/outline";

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
    {
        name: "linkedin",
        icon: <LineIcon name="linkedin-original" />,
        url: "",
    },
    { name: "youtube", icon: <LineIcon name="youtube" />, url: "" },
    { name: "instagram", icon: <LineIcon name="whatsapp" />, url: "" },
];

const SMLink: React.FC<{
    className?: string;
    path: string;
    icon: React.ReactElement;
    fill?: string;
}> = ({ className, path, icon }) => (
    <Link href={path} className={className}>
        {icon}
    </Link>
);

const SM = styled(SMLink)`
    background-color: ${({ theme }) => theme.primaryColor};
    color: #fff;
    border-radius: 1000000px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 34px;
    min-width: 34px;
    max-height: 34px;
    max-width: 34px;
    font-size: 16px;
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

const Foot: React.FC<{ className?: string }> = ({ className }) => {
    const isDesktop = useMediaQuery("(min-width: 900px)");
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
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Magna sed tortor nullam vel
                                    velit quis enim et amet.
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
`;

export default Footer;
