//Core
import { useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import useMediaQuery from "engine/hooks/useMediaQuery";
import { Link, useLocation } from "react-router-dom";

//API
import { GET_ALL_CATEGORIES } from "api/queries/categories";

//Actions
import { setActiveCategory } from "engine/redux/slices/categoriesSlice";
import { setFilterContainerWidth } from "engine/redux/slices/headerSlice";

//Styles
import { useStyles } from "./styles";



function HeaderCategories() {

  const dispatch = useDispatch();
  const { activeCategory } = useSelector(state => state.categories);

  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);

  const containerRef = useRef();

  const isMobile = useMediaQuery('(max-width: 960px)');

  const classes = useStyles();

  const location = useLocation();


  useLayoutEffect(() => {
    if (!loading && !error && !isMobile) {
      dispatch(setFilterContainerWidth(`${containerRef.current.offsetWidth}px`));
    }
  }, [dispatch, loading, error, isMobile, location]);


  if (!loading && !error) return (
    <div
      className={classes.categoriesContainer}
      ref={containerRef}>
      {data.categories.map(({ name }) => {
        if (location.pathname === "/") {
          return (
            <div key={name} className={classes.categoryButton} >
              <div
                className={
                  /* ADD ACTIVE CLASS FOR BUTTON */
                  activeCategory === name
                    ? `${classes.categoryButtonInner} ${classes.activeCategory}`
                    : classes.categoryButtonInner
                }
                onClick={() => {
                  if (activeCategory !== name) {
                    dispatch(setActiveCategory(name));
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
              className={classes.categoryButton}
              to={"/"} >
              <div
                className={
                  /* ADD ACTIVE CLASS FOR BUTTON */
                  activeCategory === name
                    ? `${classes.categoryButtonInner} ${classes.activeCategory}`
                    : classes.categoryButtonInner
                }
                onClick={() => {
                  if (activeCategory !== name) {
                    dispatch(setActiveCategory(name));
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