import React from "react";
import styled from "styled-components";
import { SH3 } from "../shared/Text";

const Card: React.FC<{
    className?: string;
    heading?: string;
    children: React.ReactNode;
    padding?: string;
}> = ({ className, heading, children }) => (
    <div className={className}>
        <SH3>{heading}</SH3>
        {children}
    </div>
);

const SCard = styled(Card)`
    overflow: hidden;
    padding: ${({ padding }) => (padding ? padding : "32px 34px 44px")};
    border-radius: 24px;
    background-color: #fff;
    box-shadow: 0 3px 20px 0 rgba(8, 15, 52, 0.06);
`;

export default SCard;
