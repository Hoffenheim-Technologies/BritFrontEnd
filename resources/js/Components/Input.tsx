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
}> = ({ className, type, placeholder, maxLength, required, disabled }) => (
    <input
        className={className}
        type={type ? type : "text"}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
    />
);

const SInput = styled(Input)`
    width: ${({ width }) => (width ? width : "100%")};
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

export { SInput, Input };
