// // THIS COMPONENT IS NOT READY YET

// import { useStyles } from "./styles";
// import galleryButton from "assets/img/galleryArrow.svg";


// function CartItemGallery({ images }) {

//   const classNames = useStyles();


//   const renderGallerySlider = (data) => {
//     return data.map((item, i) => <img key={item} className={classNames.galleryItem} src={gallery[i]} alt="alt" />);
//   }

//   return (
//     <div className={classNames.container}>
//       <div className={classNames.galleryFlow}>
//         {renderGallerySlider(images)}
//       </div>
//       <div>
//         <img
//           className={classNames.nextBtn}
//           src={galleryButton}
//           alt="next" />
//         <img
//           className={classNames.prevBtn}
//           src={galleryButton}
//           alt="previous" />
//       </div>
//     </div>
//   )
// }

// export default CartItemGallery;