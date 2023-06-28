//Core
import { useRef, useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";
import { useQuery } from "@apollo/client";
import useMediaQuery from "engine/hooks/useMediaQuery";
import { Link, useLocation } from "react-router-dom";

//API
import { GET_ALL_CATEGORIES } from "api/queries/categories";

//Actions
import { setActiveCategory } from "engine/redux/slices/headerSlice";
import { setCategoryContainerWidth } from "engine/redux/slices/headerSlice";

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
  const { activeCategory } = useAppSelector(state => state.header);

  const { data, loading, error } = useQuery<CategoriesData>(GET_ALL_CATEGORIES);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery('(max-width: 960px)');

  const classNames = useHeaderCategoriesStyles();

  const location = useLocation();

  function setCategory(prevCategory: string, newCategory: string): void {
    if (newCategory !== prevCategory) {
      dispatch(setActiveCategory(newCategory));
    }
  }

  useLayoutEffect((): void => {
    if (!loading && !error && !isMobile && containerRef.current) {
      dispatch(setCategoryContainerWidth(`${containerRef.current.offsetWidth}px`));
    }
  }, [loading, error, isMobile, containerRef.current]);



  if (data && !loading && !error) return (
    <div
      className={classNames.categoriesContainer}
      ref={containerRef}>
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
                onClick={() => setCategory(activeCategory, name)}
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
                onClick={() => setCategory(activeCategory, name)}
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