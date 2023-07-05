//Core
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";

//API
import { GET_ALL_CATEGORIES } from "api/queries/categories";

//Actions
import { setActiveCategory, setIsCategoriesDropdownMenuOpen } from "engine/redux/slices/headerSlice";

//Styles
import useHeaderCategoriesStyles from "ui/scenes/header/HeaderCategories/styles";

interface Category {
  name: string
}

interface CategoriesData {
  categories: Category[];
}

const HeaderCategories: React.FC = () => {

  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector(state => state.header.activeCategory);
  const isMobile = useAppSelector(state => state.technical.isMobile);

  const { data, loading, error } = useQuery<CategoriesData>(GET_ALL_CATEGORIES);

  const classNames = useHeaderCategoriesStyles();

  const location = useLocation();

  function setCategory(prevCategory: string, newCategory: string): void {
    if (newCategory !== prevCategory) {
      dispatch(setActiveCategory(newCategory));
    }
  }


  if (data && !loading && !error) return (
    <div
      className={classNames.categoriesContainer}
    >
      {data.categories.map(({ name }: { name: string }) => {
        if (location.pathname === "/") {
          return (
            <div key={name} className={classNames.categoryButton} >
              <div
                className={
                  /* ADD ACTIVE CLASS FOR BUTTON */
                  activeCategory === name
                    ? `${classNames.categoryButtonInner} ${classNames.activeCategory}`
                    : classNames.categoryButtonInner
                }
                onClick={() => {
                  setCategory(activeCategory, name);
                  if (isMobile) {
                    dispatch(setIsCategoriesDropdownMenuOpen(false));
                  }
                }}
                key={name} >{name.toUpperCase()}
              </div>
            </div>
          );
        } else {
          return (
            <Link
              key={name}
              className={classNames.categoryButton}
              to={"/"} >
              <div
                className={
                  /* ADD ACTIVE CLASS FOR BUTTON */
                  activeCategory === name
                    ? `${classNames.categoryButtonInner} ${classNames.activeCategory}`
                    : classNames.categoryButtonInner
                }
                onClick={() => {
                  setCategory(activeCategory, name);
                  if (isMobile) {
                    dispatch(setIsCategoriesDropdownMenuOpen(false));
                  }
                }}
                key={name} >{name.toUpperCase()}
              </div>
            </Link>
          );
        }
      })}
    </div>
  );

  return null;
}

export default HeaderCategories;