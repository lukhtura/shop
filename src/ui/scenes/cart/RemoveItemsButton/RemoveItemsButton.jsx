//Core
import { useDispatch } from "react-redux";

//Actions
import { removeFromCart } from "engine/redux/slices/cartSlice";

//Styles
import { useStyles } from "./style";

function RemoveItemsButton() {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <button
      onClick={() => dispatch(removeFromCart("all"))}
      className={classes.removeBtn}
    >Remove all</button>
  );
}

export default RemoveItemsButton;