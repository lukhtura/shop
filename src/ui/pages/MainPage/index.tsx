//Components
import ProductsGrid from 'ui/scenes/product/ProductsGrid';
// import DropdownMenu from 'ui/components/DropdownMenu';

//Styles
import useMainPageStyles from 'ui/pages/MainPage/styles';

const MainPage = () => {
  const classNames = useMainPageStyles();

  return (
    <div className={classNames.mainPageContainer}>
      {/* <DropdownMenu
        data={[
          {
            name: 'all',
          },
          {
            name: 'clothes',
          },
          {
            name: 'tech',
          },
        ]}
        optionName="name"
      /> */}
      <ProductsGrid />
    </div>
  );
};

export default MainPage;
