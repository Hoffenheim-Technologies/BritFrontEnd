import React from "react";
import styled from "styled-components";

interface Props {
    width?: string;
    height?: string;
    justify?: string;
    align?: string;
    direction?: string;
    children?: React.ReactNode;
    gap?: string;
    className?: string;
    flow?: string;
    columns?: number;
    rows?: string;
    rowGap?: string;
    columnGap?: string;
}

const Div = ({ children, className }: Props) => (
    <div className={className}>{children}</div>
);

const Grid = styled(Div)`
    display: grid;
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "auto")};
    grid-auto-flow: ${(props) => (props.flow ? props.flow : "")};
    grid-template-columns: ${(props) =>
        props.columns ? `repeat(${props.columns}, minmax(0, 1fr))` : "auto"};
    grid-template-rows: ${(props) =>
        props.rows ? `repeat(${props.rows}, minmax(0, 1fr))` : "auto"};
    row-gap: ${(props) => (props.rowGap ? props.rowGap : "")};
    column-gap: ${(props) => (props.columnGap ? props.columnGap : "")};
    justify-items: ${(props) => (props.justify ? props.justify : "flex-start")};
    align-items: ${(props) => (props.align ? props.align : "flex-start")};
`;

export { Grid };
