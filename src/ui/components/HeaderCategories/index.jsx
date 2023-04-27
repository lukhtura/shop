//Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

//API
import { GET_ALL_CATEGORIES } from "src/api/products";

//Actions
import { categoriesFetch, activeCategoryChange } from "src/redux/slices/productsSlice";

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

  useEffect(() => {
    if (!loading && !error) {
      dispatch(categoriesFetch(data.categories));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);


  return (
    <div className={classes.categoriesContainer}>
      {categories.map(item =>
        <Link key={item.name} className={classes.categoryInner} to={"./"} >
          <div className={classes.category}
            onClick={() => {
              if (activeCategory !== item.name) {
                dispatch(activeCategoryChange(item.name));
              }
            }}
            key={item.name} >{item.name.toUpperCase()}
          </div>
        </Link>)}
    </div>
  );
}

export default HeaderCategories