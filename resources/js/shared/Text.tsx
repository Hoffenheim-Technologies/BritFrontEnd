import React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    children: React.ReactNode;
    align?: string;
}
const H1 = ({ className, children }: Props) => (
    <p className={className}>{children}</p>
);

const BoldContent = styled(H1)`
    font-size: 48px;
    font-weight: 700;
    text-align: ${({ align }) => align};
`;

export { BoldContent };
