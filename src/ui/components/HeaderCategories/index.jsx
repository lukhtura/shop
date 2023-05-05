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
  }, [categories]);


  useEffect(() => {
    if (!loading && !error) {
      dispatch(categoriesFetch(data.categories));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);


  return (
    <div
      className={classes.categoriesContainer}
      ref={containerRef}>
      {categories.map((item) => {
        /* ADDING ACTIVE CLASS FOR BUTTON */
        if (activeCategory === item.name) {
          return (
            <Link key={item.name} className={classes.categoryButton} to={"./"} >
              <div className={`${classes.categoryButtonInner} ${classes.activeCategory}`}
                onClick={() => {
                  if (activeCategory !== item.name) {
                    dispatch(activeCategoryChange(item.name));
                  }
                }}
                key={item.name} >{item.name.toUpperCase()}
              </div>
            </Link>
          );
        }
        else {
          return (
            <Link key={item.name} className={classes.categoryButton} to={"./"} >
              <div className={classes.categoryButtonInner}
                onClick={() => {
                  if (activeCategory !== item.name) {
                    dispatch(activeCategoryChange(item.name));
                  }
                }}
                key={item.name} >{item.name.toUpperCase()}
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default HeaderCategories;

/* {categories.map(item => (
  <Link key={item.name} className={classes.categoryButton} to={"./"} >
    <div className={classes.categoryButtonInner}
      onClick={() => {
        if (activeCategory !== item.name) {
          dispatch(activeCategoryChange(item.name));
        }
      }}
      key={item.name} >{item.name.toUpperCase()}
    </div>
  </Link>
)
)
} */