import React from "react";
import styled from "styled-components";

const Badge: React.FC<{
    className?: string;
    children: React.ReactNode;
    style?: any;
}> = ({ className, children, style }) => (
    <div style={style} className={className}>
        {children}
    </div>
);

const SBadge = styled(Badge)`
    display: flex;
    padding: 10px 14px;
    align-items: center;
    border-radius: 40px;
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgba(20, 20, 43, 0.09);
    color: #222223;
    font-size: 14px;
    line-height: 1.143em;
    font-weight: 400;
    text-align: center;
`;

export { SBadge };
