import React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    children: React.ReactNode;
    align?: string;
}
const H1 = ({ className, children }: Props) => (
    <p className={className + " reveal"}>{children}</p>
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

const Subtitle = styled(P)`
    text-align: ${({ align }) => align};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.667em;
    margin-bottom: 40px;
    color: #8d8d91;
    position: relative;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.8s ease 0.2s;
    &.active {
        transform: translateY(0);
        opacity: 1;
    }
`;

export { BoldContent, Subtitle };
