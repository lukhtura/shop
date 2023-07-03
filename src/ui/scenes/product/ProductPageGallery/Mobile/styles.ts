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
    // display: "flex",
    display: "inline-block",
    whiteSpace: "nowrap",
    transition: "0.5s"
  },
  sliderImageContainer: {
    display: "inline-block",
    verticalAlign: "top",
    width: "100%"
  },
  sliderImage: {
    display: "block",
    maxWidth: "100%",
    height: "auto"
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

