import colors from "./colors";

export interface Itheme {
  colors: {
    white: string;
    black: string;
    offWhite: string;
    background: string;
    darkerBackground: string;
    elements: string;
    darkBlue: string;
    logout: string;
    error: string;
    success: string;
  };
}

const theme: Itheme = {
  colors,
};

export default theme;
