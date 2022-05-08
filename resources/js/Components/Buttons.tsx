import React from "react";
import styled from "styled-components";

const Button: React.FC<{
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    width?: string;
}> = ({ className, children, onClick }) => (
    <button onClick={onClick} className={className}>
        {children}
    </button>
);

const PrimaryButton = styled(Button)`
    padding: 18px 26px;
    width: ${({ width }) => width};
    border-radius: 10px;
    font-size: 16px;
    margin: 0 0 0 10px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryTextColor};
    cursor: pointer;
    line-height: 1;
    &:hover {
        transform: scale(0.9);
        background-color: ${({ theme }) => theme.secondaryColor};
    }
    transition: all 0.3s ease;
`;

const SecondaryButton = styled(Button)`
    padding: 20px 40px;
    border-radius: 10px;
    font-size: 20px;
    line-height: 0.75em;
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryTextColor};
    cursor: pointer;
    width: ${({ width }) => width};
`;

export { PrimaryButton, SecondaryButton };
