export interface Theme {
  colors: {
    primary: string;
    text: string;
    background: string;
    primaryHover: string;
    dropdownHover: string;
    danger: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  zIndex: {
    modal: number;
    header: number;
    dropdown: number;
  };
}

const theme = {
  colors: {
    primary: "#5ECE7B",
    text: "#1D1F22",
    background: "#FFFFFF",
    primaryHover: "#439058",
    dropdownHover: "#EEEEEE",
    danger: "#FF0000"
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "960px",
    lg: "1280px",
    xl: "1520px",
  },
  zIndex: {
    modal: 1000,
    header: 120,
    dropdown: 110
  }
};

export default theme;