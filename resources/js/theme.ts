import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        backgroundColor?: string;
        altBackgroundColor?: string;
        primaryColor: string;
        primaryTextColor?: string;
        secondaryColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    backgroundColor: "#f6f6f6",
    altBackgroundColor: "#666",
    primaryColor: "#222261",
    primaryTextColor: "#fff",
    // secondaryColor: "#ed2024",
    secondaryColor: "#f85757",
};

export const darkTheme: DefaultTheme = {
    primaryColor: "#fff",
    secondaryColor: "#cacaca",
};
