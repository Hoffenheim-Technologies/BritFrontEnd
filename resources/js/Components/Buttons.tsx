import React from "react";
import styled from "styled-components";

const Button: React.FC<{
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
}> = ({ className, children, onClick }) => (
    <button onClick={onClick} className={className}>
        {children}
    </button>
);

const PrimaryButton = styled(Button)`
    padding: 16px 24px;
    border-radius: 10px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryTextColor};
    cursor: pointer;
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
`;

export { PrimaryButton, SecondaryButton };
