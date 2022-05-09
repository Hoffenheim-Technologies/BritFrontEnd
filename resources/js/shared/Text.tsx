import React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    children: React.ReactNode;
    align?: string;
    transform?: boolean;
    margin?: string;
    hover?: boolean;
}
const H1 = ({ className, children }: Props) => (
    <h1 className={className + " reveal"}>{children}</h1>
);

const H4 = ({ className, children }: Props) => (
    <h4 className={className + " reveal"}>{children}</h4>
);

const H5 = ({ className, children }: Props) => (
    <h5 className={className + " reveal"}>{children}</h5>
);

const P = ({ className, children }: Props) => (
    <p className={className + " reveal"}>{children}</p>
);

const BoldContent = styled(H1)`
    margin-bottom: 10px;
    font-size: 48px;
    font-weight: 700;
    text-align: ${({ align }) => align};
    position: relative;
    transform: translateY(20px);
    opacity: 0;
    transition: all 1s ease;
    &.active {
        transform: translateY(0);
        opacity: 1;
    }
`;

const SH4 = styled(H4)`
    color: ${({ theme }) => theme.primaryColor};
    font-size: 20px;
    line-height: 1.4em;
    font-weight: 700;
    margin: ${({ margin }) => margin};
`;

const SH5 = styled(H4)`
    color: ${({ theme }) => theme.primaryColor};
    font-size: 18px;
    line-height: 1.4em;
    font-weight: 700;
    margin: ${({ margin }) => margin};
`;

const Subtitle = styled(P)`
    text-align: ${({ align }) => align};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.667em;
    margin-bottom: ${({ margin }) => (margin === "" ? margin : "40px")};
    color: #8d8d91;
    position: relative;
    transform: ${({ transform }) => (transform ? "" : "translateY(100px)")};
    opacity: ${({ transform }) => (transform ? 1 : 0)};
    transition: all 0.8s ease 0.2s;
    &.active {
        transform: translateY(0);
        opacity: 1;
    }
`;

export { BoldContent, Subtitle, SH4, SH5 };
