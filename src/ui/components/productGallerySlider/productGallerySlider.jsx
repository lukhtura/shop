//Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { showSlide, clearActiveSlide } from 'src/redux/features/productGallerySliderSlice'

//Styles
import 'src/ui/components/productGallerySlider/productGallerySlider.scss';

const ProductGallerySlider = ({ gallery, name }) => {

    const dispatch = useDispatch();
    const activeSlide = useSelector(state => state.slider.activeSlide);

    useEffect(() => {
        return () => dispatch(clearActiveSlide());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='product-page-gallery'>
                {gallery.map((img, i) => {
                    return (
                        <div
                            onClick={() => dispatch(showSlide(img))}
                            key={i}
                            className='product-page-gallery-item'>
                            <img className='product-page-gallery-item-img' src={img} alt={name} />
                        </div>
                    );
                })}
            </div>

            <div className='product-page-item'>
                <div className='product-page-item-img'>
                    <img src={activeSlide || gallery[0]} alt={name} />
                </div>
            </div>
        </>
    );
};

export default ProductGallerySlider;