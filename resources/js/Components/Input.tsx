import React from "react";
import styled from "styled-components";

const Input: React.FC<{
    className?: string;
    width?: string;
    margin?: string;
    type?: string;
    placeholder?: string;
    maxLength?: number;
    required?: boolean;
    disabled?: boolean;
    style?: any;
}> = ({
    className,
    type,
    placeholder,
    maxLength,
    required,
    disabled,
    style,
}) => (
    <input
        className={className}
        type={type ? type : "text"}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        style={style}
    />
);

const SInput = styled(Input)`
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        appearance: none;
    }
    appearance: none;
    width: ${({ width }) => (width ? width : width === "" ? width : "100%")};
    max-width: min(80vw, 450px);
    margin: ${({ margin }) => (margin ? margin : 0)};
    padding: 8px 12px;
    height: 3em;
    font-size: 20px;
    color: #222223;
    line-height: calc(10 / 7);
    border-radius: 12px;
    border: 1px solid #cccccc;
    background-color: ${({ theme }) => theme.backgroundColor};

    &:focus,
    &:hover {
        outline: 1px solid ${({ theme }) => theme.secondaryColor};
    }
`;

const TextArea: React.FC<{
    className?: string;
    placeholder?: string;
    maxLength?: number;
}> = ({ className, placeholder, maxLength }) => (
    <textarea
        placeholder={placeholder}
        maxLength={maxLength}
        className={className}
    ></textarea>
);

const STextArea = styled(TextArea)`
    max-height: 250px;
    max-width: 100%;
    min-height: 182px;
    min-width: 100%;
    margin-bottom: 0px;
    padding: 18px 24px;
    border-style: solid;
    border-width: 1px;
    border-color: #f6f6f6;
    border-radius: 12px;
    background-color: #f6f6f6;
    -webkit-transition: border-color 300ms ease, color 300ms ease;
    transition: border-color 300ms ease, color 300ms ease;
    color: #222223;
    font-size: 18px;

    &:focus,
    &:hover {
        outline: 1px solid ${({ theme }) => theme.secondaryColor};
    }
`;
export { SInput, Input, STextArea, TextArea };
