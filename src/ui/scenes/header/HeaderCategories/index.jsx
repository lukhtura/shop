//Core
import { useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

//API
import { GET_ALL_CATEGORIES } from "api/categories";

//Actions
import { activeCategoryChange } from "engine/redux/slices/categoriesSlice";
import { setFilterContainerWidth } from "engine/redux/slices/headerSlice";

//Styles
import { useStyles } from "./styles";



function HeaderCategories() {

  const dispatch = useDispatch();
  const { activeCategory } = useSelector(state => state.categories);

  const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);

  const classes = useStyles();

  const containerRef = useRef();


  useLayoutEffect(() => {
    if (!loading && !error) {
      dispatch(setFilterContainerWidth(`${containerRef.current.offsetWidth}px`));
    }
  }, [dispatch, loading, error]);


  if (!loading && !error) return (
    <div
      className={classes.categoriesContainer}
      ref={containerRef}>
      {data.categories.map(({ name }) => {
        return (
          <Link key={name} className={classes.categoryButton} to={`./`} >
            <div
              className={
                /* ADD ACTIVE CLASS FOR BUTTON */
                activeCategory === name
                  ? `${classes.categoryButtonInner} ${classes.activeCategory}`
                  : classes.categoryButtonInner
              }
              onClick={() => {
                if (activeCategory !== name) {
                  dispatch(activeCategoryChange(name));
                }
              }}
              key={name} >{name.toUpperCase()}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HeaderCategories;