//Core
import { useState } from "react";


//Styles
import { useStyles } from "./styles";

function ProductPageGallery({ gallery, name }) {

  const [activeSlide, setActiveSlide] = useState("");

  const classNames = useStyles();



  return (
    <>
      {/* IMAGE PICKER */}
      <div className={classNames.gallery}>
        {gallery.map((img, i) => {
          return (
            <div
              onClick={() => setActiveSlide(img)}
              key={i}
              className={classNames.galleryItem}>
              <img
                className={classNames.galleryItemImg}
                src={img}
                alt={name}
                loading="lazy" />
            </div>
          );
        })}
      </div>

      {/* ACTIVE IMAGE */}
      <div className={classNames.activeImgContainer}>
        <img
          className={classNames.activeImg}
          src={activeSlide || gallery[0]}
          alt={name}
          loading="lazy" />
      </div>
    </>
  );
}

export default ProductPageGallery;