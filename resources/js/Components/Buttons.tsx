import React from "react";
import styled from "styled-components";

const Button: React.FC<{
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    width?: string;
    disabled?: boolean;
    padding?: string;
    fontSize?: string;
    fontWeight?: number;
    margin?: string | number;
    transform?: boolean;
    style?: any;
}> = ({ className, children, onClick, disabled, style }) => (
    <button
        onClick={onClick}
        className={className + " reveal"}
        disabled={disabled}
        style={style}
    >
        {children}
    </button>
);

const PrimaryButton = styled(Button)`
    padding: ${({ padding }) => (padding ? padding : "20px 40px")};
    width: ${({ width }) => width};
    border-radius: 10px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
    margin: ${({ margin }) => (margin !== "" ? margin : "0 0 0 10px")};
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryTextColor};
    transform: ${({ transform }) => (transform ? "" : "translateY(100px)")};
    cursor: pointer;
    opacity: ${({ transform }) => (transform ? 1 : 0)};
    line-height: 1;
    &:hover {
        transform: scale(0.9);
        background-color: ${({ theme }) => theme.secondaryColor};
    }
    &.active {
        transform: translateY(0);
        opacity: 1;
    }
    transition: transform 0.6s ease, background-color 0.6s ease,
        opacity 0.3s ease;
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
    &:hover {
        transform: scale(0.9);
    }
    transition: transform 0.3s ease;
`;

const TertiaryButton = styled(Button)`
    padding: ${({ padding }) => (padding ? padding : "20px 40px")};
    width: ${({ width }) => width};
    border-radius: 10px;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
    margin: ${({ margin }) => (margin !== "" ? margin : "0 0 0 20px")};
    background-color: #fff;
    color: #000;
    cursor: pointer;
    line-height: 1;
    transform: ${({ transform }) => (transform ? "" : "translateY(100px)")};
    opacity: ${({ transform }) => (transform ? 1 : 0)};
    &:hover {
        transform: scale(0.9);
        background-color: ${({ theme }) => theme.secondaryColor};
        color: #fff;
    }
    &.active {
        transform: translateY(0);
        opacity: 1;
    }
    transition: transform 0.6s ease, background-color 0.6s ease,
        opacity 0.4s ease, color 0.3s ease;
    box-shadow: 0 2px 12px 0 rgb(20 20 43 / 7%);
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
