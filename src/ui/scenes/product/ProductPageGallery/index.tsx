//Core
import { useState } from "react";

//Types
import { Product } from "engine/types/products";

//Styles
import useProductPageGalleryStyles from "ui/scenes/product/ProductPageGallery/styles";


interface ProductPageGalleryProps {
  gallery: Product["gallery"];
  name: Product["name"]
}


const ProductPageGallery: React.FC<ProductPageGalleryProps> = ({ gallery, name }) => {

  const [activeSlide, setActiveSlide] = useState(gallery[0]);

  const classNames = useProductPageGalleryStyles();


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
          src={activeSlide}
          alt={name}
          loading="lazy" />

      </div>
    </>
  );
}

export default ProductPageGallery;