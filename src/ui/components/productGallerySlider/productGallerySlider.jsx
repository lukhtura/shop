//Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Utils
import { showSlide, clearActiveSlide } from './productGallerySliderSlice'
//Styles
import './productGallerySlider.scss';


const ProductGallerySlider = (props) => {

    const dispatch = useDispatch();
    const { activeSlide } = useSelector(state => state.slider);

    useEffect(() => {
        return () => dispatch(clearActiveSlide())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { gallery, name } = props;

    return (
        <>
            <aside className='product-page-gallery'>
                {gallery.map((img, i) => {
                    return (
                        <div
                            onClick={() => dispatch(showSlide(img))}
                            key={i}
                            className='product-page-gallery-item'>
                            <img className='product-page-gallery-item-img' src={img} alt={name} />
                        </div>
                    )
                })}
            </aside>

            <div className='product-page-item'>
                <div className='product-page-item-img'>
                    <img src={activeSlide || gallery[0]} alt={name} />
                </div>
            </div>
        </>
    );
};

export default ProductGallerySlider;