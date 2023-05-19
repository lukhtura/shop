// THIS COMPONENT IS NOT READY YET

import { useStyles } from "./styles";
import galleryButton from "assets/img/galleryArrow.svg";


function CartItemGallery({ images }) {

  const classes = useStyles();


  const renderGallerySlider = (data) => {
    return data.map((item, i) => <img key={item} className={classes.galleryItem} src={gallery[i]} alt="alt" />);
  }

  return (
    <div className={classes.container}>
      <div className={classes.galleryFlow}>
        {renderGallerySlider(images)}
      </div>
      <div>
        <img
          className={classes.nextBtn}
          src={galleryButton}
          alt="next" />
        <img
          className={classes.prevBtn}
          src={galleryButton}
          alt="previous" />
      </div>
    </div>
  )
}

export default CartItemGallery;