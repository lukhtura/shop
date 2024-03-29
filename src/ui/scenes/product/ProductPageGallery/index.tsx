// Core
import { useState } from "react";

// Types
import { Product } from "engine/types/products";

// Styles
import useProductPageGalleryStyles from "ui/scenes/product/ProductPageGallery/styles";

interface ProductPageGalleryProps {
  gallery: Product["gallery"];
  name: Product["name"]
}

const ProductPageGallery = (
  {
    gallery,
    name
  }: ProductPageGalleryProps) => {

  const [activeSlide, setActiveSlide] = useState<string>(gallery[0]);

  const classNames = useProductPageGalleryStyles();

  return (
    <div className={classNames.galleryContainer}>

      {/* IMAGE PICKER */}
      <div className={classNames.gallery}>
        {
          gallery.map((img, i) => {
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
          })
        }
      </div>

      {/* ACTIVE IMAGE */}
      <div className={classNames.activeImgContainer}>
        <img
          className={classNames.activeImg}
          src={activeSlide}
          alt={name}
          loading="lazy" />
      </div>
    </div>
  );
}

export default ProductPageGallery;