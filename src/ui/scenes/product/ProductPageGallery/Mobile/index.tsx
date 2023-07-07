//Core
import { useRef } from "react";
import useProductPageGalleryMobile from "engine/hooks/useProductGallerySliderMobile";

//Types
import { Product } from "engine/types/products";

//Styles
import useProductPageGalleryMobileStyles from "ui/scenes/product/ProductPageGallery/Mobile/styles";
// import galleryArrow from "assets/icons/galleryArrow.svg"


interface ProductPageGalleryProps {
  gallery: Product["gallery"];
  name: Product["name"]
}


const ProductPageGalleryMobile: React.FC<ProductPageGalleryProps> = ({ gallery, name }) => {

  const activeSlideImgRef = useRef<HTMLImageElement | null>(null);
  const activeSlideContainerRef = useRef<HTMLDivElement | null>(null);

  const lastSlide: number = gallery.length;

  const { handleTouchStart, handleTouchMove, handleTouchEnd, sliderCounter, activeSlideTranslate } = useProductPageGalleryMobile({ activeSlideImgRef, lastSlide });

  const classNames = useProductPageGalleryMobileStyles();


  return (
    <>

      {/* SLIDER */}
      <div
        className={classNames.sliderOverflow}
        ref={activeSlideContainerRef}
      >
        <div
          className={classNames.sliderInner}
          style={{
            transform: `translateX(${activeSlideTranslate}px)`
          }}
        >
          {gallery.map((imgUrl) => {
            return (
              <div
                key={imgUrl}
                className={classNames.sliderImageContainer}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  className={classNames.sliderImage}
                  ref={activeSlideImgRef}
                  src={imgUrl}
                  alt={name} />
              </div>
            )
          })}
        </div>
        {
          (lastSlide !== 1) && <p className={classNames.sliderCounter}>{(sliderCounter)}/{lastSlide}</p>
        }
      </div>



      {/* BUTTONS */}
      {/* <div className={classNames.sliderButtonsContainer}>
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
      </div> */}
    </>
  );
}

export default ProductPageGalleryMobile;