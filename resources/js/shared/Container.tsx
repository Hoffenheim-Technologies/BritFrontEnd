import React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    position?: string;
    children: React.ReactNode;
    zIndex?: number;
    small?: boolean;
}
export const Div = ({ className, children }: Props) => (
    <div className={className}>{children}</div>
);

const Container = styled(Div)`
    position: ${({ position }) => position};
    top: 0;
    max-width: 1318px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px;
    padding-left: 24px;
    z-index: ${({ zIndex }) => zIndex};
`;

export const SmallContainer = styled(Div)`
    max-width: 580px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px;
    padding-left: 24px;
    margin-bottom: ${({ small }) => (small ? "48px" : "82px")};
`;

export default Container;
