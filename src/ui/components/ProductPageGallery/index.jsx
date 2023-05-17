//Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { showSlide, clearActiveSlide } from "src/redux/slices/productGallerySliderSlice"

//Styles
import { useStyles } from "./styles";

function ProductPageGallery({ gallery, name }) {

  /* STATE */
  const dispatch = useDispatch();
  const activeSlide = useSelector(state => state.slider.activeSlide);
  /* STATE */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  useEffect(() => {
    return () => dispatch(clearActiveSlide());
  }, [dispatch]);

  return (
    <>
      {/* IMAGE PICKER */}
      <div className={classes.gallery}>
        {gallery.map((img, i) => {
          return (
            <div
              onClick={() => dispatch(showSlide(img))}
              key={i}
              className={classes.galleryItem}>
              <img className={classes.galleryItemImg} src={img} alt={name} />
            </div>
          );
        })}
      </div>

      {/* ACTIVE IMAGE */}
      <div className={classes.activeImgContainer}>
        <img className={classes.activeImg} src={activeSlide || gallery[0]} alt={name} />
      </div>
    </>
  );
}

export default ProductPageGallery;