import React, {
    useEffect,
    useState,
    useRef,
    Suspense,
    MouseEventHandler,
} from "react";
import styled from "styled-components";
import { Flex } from "../shared/Flex";
import Container from "../shared/Container";
import { Link } from "@inertiajs/inertia-react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { Img } from "react-image";
import { SearchIcon } from "@heroicons/react/outline";
import { SInput } from "./Input";
import { Div } from "../shared/Container";
import { Inertia } from "@inertiajs/inertia";
import useMediaQuery from "../hooks/useMediaQuery";

const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <Img className={className} src={"/assets/logo.webp"} alt="logo" />
);
export const SLogo = styled(Logo)`
    width: 156px;
    max-width: 100%;
    &:hover {
        transform: scale(0.9);
    }
    transition: transform 0.3s ease;
`;

export const routes: { route: string; path: string }[] = [
    { route: "Home", path: "/" },
    { route: "About", path: "/about" },
    { route: "Properties", path: "/properties" },
    { route: "Contact", path: "/contact" },
];

const Nav: React.FC<{ className?: string }> = ({ className }) => (
    <ul className={className}>
        {routes.map((route, index) => (
            <li key={index}>
                <Link href={route.path}>{route.route}</Link>
            </li>
        ))}
    </ul>
);

const SearchBar = styled(Div)`
    padding: 32px;
    box-shadow: 0 3px 20px 0 rgb(8 15 52 / 6%);
`;
const SNav = styled(Nav)`
    display: flex;
    li {
        &:hover {
            a {
                color: ${({ theme }) => theme.secondaryColor};
            }
            transform: scale(1.3);
        }
        transition: all 0.3s ease;
    }
    li:not(:last-of-type) {
        margin-right: 32px;
    }
`;

const Head: React.FC<{ className?: string; children: React.ReactNode }> = ({
    className,
    children,
}) => <header className={className}>{children}</header>;

const SHead = styled(Head)`
    padding: 32px 0;
    background-color: #fff;
    svg {
        height: 24px;
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.secondaryColor};
            transform: scale(1.3);
        }
        transition: all 0.3s ease;
    }
`;

const Search: React.FC<{
    className?: string;
    active: boolean;
    func: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ className, active, func }) => {
    const useOutsideAlerter = (ref: React.RefObject<any>) => {
        useEffect(() => {
            /**
             * Hide if clicked on outside of element
             */
            const handleClickOutside = (event: { target: any }) => {
                if (
                    ref.current &&
                    !ref.current.contains(event.target) &&
                    event.target.className.baseVal != "search"
                ) {
                    func(false);
                }
            };
            // Bind the event listener
            document.addEventListener("click", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    // if (active) {
    const isDesktop = useMediaQuery("(min-width: 900px)");
    const isMini = useMediaQuery("(max-width: 500px)");
    return (
        <div ref={wrapperRef}>
            <SearchBar className={className}>
                <form>
                    <Flex direction={isMini ? "column" : "row"} align="center">
                        <SInput
                            type="search"
                            maxLength={256}
                            placeholder="Search for properties"
                            required={true}
                            width={
                                !isMini
                                    ? isDesktop
                                        ? "500px"
                                        : "calc(100vw - 200px)"
                                    : "500px"
                            }
                            margin={isMini ? "15px 0" : "0 20px 0 0"}
                        />
                        <SecondaryButton
                            disabled={!active}
                            width={isMini ? "100%" : ""}
                        >
                            Search
                        </SecondaryButton>
                    </Flex>
                </form>
            </SearchBar>
        </div>
    );
    // } else {
    //     return <></>;
    // }
};

const MNav: React.FC<{
    className?: string;
    active: boolean;
    tall: boolean;
}> = ({ className }) => (
    <div className={className}>
        <nav>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link href={route.path}>{route.route}</Link>
                    </li>
                ))}
                <li>
                    <PrimaryButton width={"100%"}>
                        Post a Property
                    </PrimaryButton>
                </li>
            </ul>
        </nav>
    </div>
);

const MobileNav = styled(MNav)`
    height: ${({ active }) => (active ? "10000px" : 0)};
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    transition: all 0.6s ease;

    nav {
        background-color: rgba(255, 255, 255, 0.99);
        height: ${({ active, tall }) =>
            active ? (tall ? "82vh" : "77vh") : 0};
        overflow: auto;
        padding: 50px 0 20px 0;
        box-shadow: 0 4px 10px 0 rgb(8 15 52 / 6%);

        transform: ${({ active }) =>
            active
                ? "translateY(0px) translateX(0px);"
                : "translateY(-800px) translateX(0px)"};
        opacity: ${({ active }) => (active ? 1 : 0)};

        transition: all 0.6s ease;
    }

    ul {
        height: 100%;
        margin-right: 24px;
        margin-left: 24px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
    }
    li {
        padding: 12px 0;
    }
    li:last-of-type {
        display: flex;
        margin-top: auto;
        padding-top: 55px;
        padding-bottom: 40px;
    }
    a {
        font-size: 28px;
        line-height: 1.111em;
        font-weight: 500;
    }
`;

const SSearch = styled(Search)`
    height: ${({ active }) => (active ? "auto" : 0)};
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%)
        ${({ active }) => (active ? "translateY(0)" : "translateY(-500px)")};
    background-color: #fff;
    opacity: ${({ active }) => (active ? 1 : 0)};

    transition: all 0.6s ease-in-out;
`;

const NavToggle: React.FC<{
    className?: string;
    active?: boolean;
    onClick?: MouseEventHandler<Element>;
}> = ({ className, onClick }) => (
    <PrimaryButton onClick={onClick} className={className} transform={true}>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </PrimaryButton>
);

const Toggle = styled(NavToggle)`
    padding: 12px;
    margin-left: 10px;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20px;
        min-height: 16px;
        justify-content: space-between;
    }
    span {
        width: 100%;
        max-height: 2px;
        min-height: 2px;
        padding: 0px;
        background-color: #fff;
        opacity: ${({ active }) => (active ? 0 : 1)};
        transform-style: preserve-3d;
        transition: transform 0.6s ease, opacity 0.7s ease-out;
        &:first-of-type {
            opacity: 1;
            transform: ${({ active }) =>
                active
                    ? "translate3d(0px, 7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(140deg) skew(0deg, 0deg)"
                    : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"};
        }
        &:last-of-type {
            opacity: 1;
            transform: ${({ active }) =>
                active
                    ? "translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(40deg) skew(0deg, 0deg);"
                    : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"};
        }
    }
`;
const Header: React.FC<{ style?: any }> = ({ style }) => {
    const isDesktop = useMediaQuery("(min-width: 900px)");
    const isMiniMobile = useMediaQuery("(max-width: 500px)");
    const isTall = useMediaQuery("(min-height: 800px");
    const [searchActive, setSearchActive] = useState(false);
    const [toggleActive, setToggleActive] = useState(false);
    Inertia.on("navigate", () => setToggleActive(false));
    return (
        <div style={{ backgroundColor: "white", ...style }}>
            <Container zIndex={2}>
                <SHead>
                    <nav>
                        <Flex
                            direction="row"
                            justify="space-between"
                            align="center"
                        >
                            <div>
                                <Link href="/">
                                    <Suspense fallback={"logo"}>
                                        <SLogo />
                                    </Suspense>
                                </Link>
                            </div>

                            {isDesktop && (
                                <div>
                                    <SNav />
                                </div>
                            )}
                            <Flex align="center" width="fit-content">
                                <SearchIcon
                                    className="search"
                                    onClick={() => setSearchActive(true)}
                                />
                                {!isMiniMobile && (
                                    <PrimaryButton
                                        padding="18px 26px"
                                        fontSize="16px"
                                        fontWeight={400}
                                        transform={true}
                                        margin={"0 0 0 10px"}
                                    >
                                        Post a Property
                                    </PrimaryButton>
                                )}
                                {!isDesktop && (
                                    <Toggle
                                        onClick={() =>
                                            setToggleActive(!toggleActive)
                                        }
                                        active={toggleActive}
                                    />
                                )}
                            </Flex>
                        </Flex>
                    </nav>
                </SHead>
                {!isDesktop && (
                    <MobileNav active={toggleActive} tall={isTall} />
                )}
                {<SSearch active={searchActive} func={setSearchActive} />}
            </Container>
        </div>
    );
};

export default Header;
