import React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    position?: string;
    children: React.ReactNode;
    zIndex?: number;
    small?: boolean;
    id?: string;
    width?: string;
    style?: any;
}
export const Div = ({ className, children, id, style }: Props) => (
    <div id={id} className={className} style={style}>
        {children}
    </div>
);

const Container = styled(Div)`
    position: ${({ position }) => position};
    top: 0;
    max-width: ${({ width }) => (width ? width : "1318px")};
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px;
    padding-left: 24px;
    z-index: ${({ zIndex }) => zIndex};
`;

export const SmallContainer = styled(Div)`
    max-width: ${({ width }) => (width ? width : "580px")};
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px;
    padding-left: 24px;
    margin-bottom: ${({ small }) => (small ? "48px" : "82px")};
`;

export default Container;
