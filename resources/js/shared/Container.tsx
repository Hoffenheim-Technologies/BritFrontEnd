import React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    position?: string;
    children: React.ReactNode;
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
`;

export const SmallContainer = styled(Div)`
    max-width: 580px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 24px;
    padding-left: 24px;
`;

export default Container;
