//Core
import { useRef, useState } from "react";

//Types
import { Product } from "engine/types/products";

//Styles
import useProductPageGalleryStyles from "ui/scenes/product/ProductPageGallery/styles";
import galleryArrow from "assets/icons/galleryArrow.svg"


interface ProductPageGalleryProps {
  gallery: Product["gallery"];
  name: Product["name"]
}

const ProductPageGallery: React.FC<ProductPageGalleryProps> = ({ gallery, name }) => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderCount, setSliderCount] = useState(1);

  const activeSlideImgRef = useRef<HTMLImageElement | null>(null);

  const classNames = useProductPageGalleryStyles();

  const lastSlide = gallery.length;


  function turnSlide(direction: "next" | "prev"): void {

    if (activeSlideImgRef.current) {
      if (direction === "next" && sliderCount < lastSlide) {
        setActiveSlide(activeSlide - activeSlideImgRef.current.offsetWidth);
        setSliderCount(sliderCount + 1);
      } else if (direction === "prev" && sliderCount > 1) {
        setActiveSlide(activeSlide + activeSlideImgRef.current.offsetWidth);
        setSliderCount(sliderCount - 1);
      }
    }
  }


  return (
    <>
      {/* IMAGE PICKER */}
      {/* <div className={classNames.gallery}>

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

      </div> */}

      {/* new slider */}
      <div
        className={classNames.sliderOverflow}
      >
        <div
          className={classNames.activeSlide}
          style={{
            transform: `translateX(${activeSlide}px)`
          }}
        >
          {gallery.map((imgUrl, index) => {
            return (
              <div key={imgUrl}>
                <img
                  ref={activeSlideImgRef}
                  src={imgUrl}
                  alt={name} />
                <p>{(index + 1)}/{lastSlide}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* BUTTONS */}
      <div className={classNames.sliderButtonsContainer}>
        <img
          src={galleryArrow}
          onClick={() => turnSlide("prev")}
          alt="previous image"
          className={`${classNames.sliderButton} ${classNames.previousSliderButton}`}
        />
        <img
          onClick={() => turnSlide("next")}
          src={galleryArrow}
          alt="next image"
          className={classNames.sliderButton} />
      </div>

      {/* new slider */}

      {/* ACTIVE IMAGE */}
      {/* <div className={classNames.activeImgContainer}>

        <img
          className={classNames.activeImg}
          src={activeSlide || gallery[0]}
          alt={name}
          loading="lazy" />

      </div> */}
    </>
  );
}

export default ProductPageGallery;