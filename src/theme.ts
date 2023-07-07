export interface Theme {
  colors: {
    primary: "#5ECE7B",
    text: "#1D1F22",
    background: "#FFFFFF",
    primaryHover: "#439058",
    dropdownHover: "#EEEEEE",
    danger: "#FF0000"
  };
  breakpoints: {
    xs: "480px";
    sm: "768px";
    md: "960px";
    lg: "1280px";
    xl: "1520px";
    xxl: "2048px"
  };
  zIndex: {
    modal: 1000;
    header: 120;
    dropdown: 110;
  };
}

const theme: Theme = {
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
    xxl: "2048px"
  },
  zIndex: {
    modal: 1000,
    header: 120,
    dropdown: 110
  }
};

export default theme;