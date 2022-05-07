import React, { useEffect, useState, useRef, Suspense } from "react";
import styled from "styled-components";
import { Flex } from "../shared/Flex";
import Container from "../shared/Container";
import { Link } from "@inertiajs/inertia-react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { Img } from "react-image";
import { logoSrc } from "../assets";
import { SearchIcon } from "@heroicons/react/outline";
import { SInput } from "./Input";
import { Div } from "../shared/Container";

const Logo: React.FC<{ className?: string }> = ({ className }) => (
    <Img className={className} src={"/assets/logo.webp"} alt="logo" />
);
const SLogo = styled(Logo)`
    width: 200px;
    max-width: 100%;
    &:hover {
        transform: scale(1.2);
    }
    transition: transform 0.3s ease;
`;

const routes: { route: string; path: string }[] = [
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
    z-index: 1;
    padding: 32px 0;
    background-color: #fff;
    svg {
        height: 24px;
        margin-right: 10px;
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
    return (
        <div ref={wrapperRef}>
            <SearchBar className={className}>
                <form>
                    <Flex align="center">
                        <SInput
                            type="search"
                            maxLength={256}
                            placeholder="Search for properties"
                            required={true}
                            width={"500px"}
                            margin={"0 20px 0 0"}
                        />
                        <SecondaryButton>Search</SecondaryButton>
                    </Flex>
                </form>
            </SearchBar>
        </div>
    );
    // } else {
    //     return <></>;
    // }
};

const SSearch = styled(Search)`
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%)
        ${({ active }) => (active ? "translateY(0)" : "translateY(10px)")};
    background-color: #fff;
    opacity: ${({ active }) => (active ? 1 : 0)};

    transition: all 0.6s ease-in-out;
`;
const Header: React.FC = () => {
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Container position="sticky">
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

                        <div>
                            <SNav />
                        </div>
                        <Flex align="center" width="fit-content">
                            <SearchIcon
                                className="search"
                                onClick={() => setSearchActive(true)}
                            />
                            <PrimaryButton>Post a Property</PrimaryButton>
                        </Flex>
                    </Flex>
                </nav>
            </SHead>
            {<SSearch active={searchActive} func={setSearchActive} />}
        </Container>
    );
};

export default Header;
