//Components
import ProductsGrid from "ui/scenes/product/ProductsGrid";

//Styles
import useMainPageStyles from "ui/pages/MainPage/styles";



const MainPage: React.FC = () => {

  const classNames = useMainPageStyles();

  return (
    <div className={classNames.mainPageContainer}>
      <ProductsGrid />
    </div>
  );
}

export default MainPage;