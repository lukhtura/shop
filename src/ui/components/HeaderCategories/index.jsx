//Core
import { useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

//API
import { GET_ALL_CATEGORIES } from "src/api/products";

//Actions
import { categoriesFetch, activeCategoryChange } from "src/redux/slices/productsSlice";
import { setFilterContainerWidth } from "src/redux/slices/headerSlice";

//Styles
import { useStyles } from "./styles";



function HeaderCategories() {

  /* STATE */
  const dispatch = useDispatch();
  const { categories, activeCategory } = useSelector(state => state.products);
  /* STATE */

  /* API */
  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);
  /* API */

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  /* REFS */
  const containerRef = useRef();
  /* REFS */

  useLayoutEffect(() => {
    if (containerRef.current.offsetWidth !== 0)
      dispatch(setFilterContainerWidth(`${containerRef.current.offsetWidth}px`));
  }, [dispatch, categories]);


  useEffect(() => {
    if (!loading && !error) {
      dispatch(categoriesFetch(data.categories));
    }
  }, [dispatch, data, error, loading]);


  return (
    <div
      className={classes.categoriesContainer}
      ref={containerRef}>
      {categories.map(({ name }) => {
        /* ADDING ACTIVE CLASS FOR BUTTON */
        if (activeCategory === name) {
          return (
            <Link key={name} className={classes.categoryButton} to={`./`} >
              <div className={`${classes.categoryButtonInner} ${classes.activeCategory}`}
                onClick={() => {
                  if (activeCategory !== name) {
                    dispatch(activeCategoryChange(name));
                  }
                }}
                key={name} >{name.toUpperCase()}
              </div>
            </Link>
          );
        }
        else {
          return (
            <Link key={name} className={classes.categoryButton} to={"./"} >
              <div className={classes.categoryButtonInner}
                onClick={() => {
                  if (activeCategory !== name) {
                    dispatch(activeCategoryChange(name));
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
}

export default HeaderCategories;