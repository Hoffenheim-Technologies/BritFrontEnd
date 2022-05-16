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
    style?: any;
}

const Div = ({ children, className, style }: Props) => (
    <div className={className} style={style}>
        {children}
    </div>
);
const Flex = styled(Div)`
    display: flex;
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "auto")};
    justify-content: ${(props) =>
        props.justify ? props.justify : "flex-start"};
    align-items: ${(props) => (props.align ? props.align : "flex-start")};
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
    gap: ${({ gap }) => gap};
    position: relative;
`;

export { Flex };
