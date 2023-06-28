import { createUseStyles } from "react-jss";


const useProductFormAttributesStyles = createUseStyles(theme => ({
  label: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "18px",
    margin: "0 0 10px",
  },
  attributesContainer: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  },

  /* --- COLOR PICKER RADIO BUTTONS --- */
  colorPicker: {
    height: "32px",
    width: "32px",

    "& input": {
      display: "none"
    },

    "& input:checked + label": {
      border: `3px solid ${theme.colors.primary}`
    },

    "& label": {
      border: "1px solid #d5cece",
      height: "32px",
      width: "32px",
      display: "flex",
      justifyContent: "center",
      lineHeight: "45px",
      cursor: "pointer",
      userSelect: "none"
    },
  },

  /* --- REST ATTRIBUTES PICKER RADIO BUTTONS --- */
  attributesPicker: {
    width: "63px",
    border: "1px solid black",
    transition: "0.3s",

    "& input": {
      display: "none"
    },

    "& input:checked + label, &-active, &:hover": {
      backgroundColor: "black",
      color: "white"
    },

    "& label": {
      width: "63px",
      display: "flex",
      justifyContent: "center",
      lineHeight: "45px",
      cursor: "pointer",
      userSelect: "none"
    },
  },
}));

export default useProductFormAttributesStyles;