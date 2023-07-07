import { createUseStyles } from "react-jss"


const useProductPageGalleryMobileStyles = createUseStyles({
  sliderButtonsContainer: {
    width: "100%",
    height: "40px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "space-between"
  },
  sliderButton: {
    width: "40px",
  },
  previousSliderButton: {
    transform: "rotateY(180deg)",
  },
  sliderOverflow: {
    width: "100%",
    overflow: "hidden",
    position: "relative"
  },
  sliderInner: {
    display: "inline-block",
    whiteSpace: "nowrap",
    transition: "0.5s",
    maxHeight: "80vh"
  },
  sliderImageContainer: {
    display: "inline-block",
    verticalAlign: "top",
    width: "100%",
  },
  sliderImage: {
    display: "block",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    minHeight: "50vh",
    maxHeight: "80vh",
  },
  sliderCounter: {
    position: "absolute",
    bottom: "10px",
    right: "10px"
  },
  disabled: {
    opacity: "0,5"
  },
});

export default useProductPageGalleryMobileStyles;

