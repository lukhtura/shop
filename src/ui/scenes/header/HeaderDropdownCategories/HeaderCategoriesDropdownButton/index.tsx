//Core
import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

//Actions
import { setFilterContainerWidth, setIsCategoriesDropdownmenuOpen } from "engine/redux/slices/headerSlice";

//Styles
import { useStyles } from "./styles";
import { theme } from "theme";




function HeaderCategoriesDropdownButton() {

  const [onHover, setOnHover] = useState(false);

  const dispatch = useDispatch();

  const classNames = useStyles();

  const containerRef = useRef();

  useLayoutEffect(() => {
    if (containerRef.current.offsetWidth !== 0)
      dispatch(setFilterContainerWidth(`${containerRef.current.offsetWidth}px`));
  }, [dispatch]);


  return (
    <div
      onMouseEnter={() => {
        setOnHover(true)
        dispatch(setIsCategoriesDropdownmenuOpen(true))
      }}
      onMouseLeave={() => {
        setOnHover(false)
        dispatch(setIsCategoriesDropdownmenuOpen(false))
      }}
      ref={containerRef}
      className={classNames.container}>
      <svg
        style={{ enableBackground: "new 0 0 32 32", cursor: "pointer" }}
        fill={onHover ? theme.colors.primary : "black"}
        width={onHover ? "34px" : "32px"}
        height={onHover ? "34px" : "32px"}
        id="Layer_1"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" > <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg >
    </div>
  );
}

export default HeaderCategoriesDropdownButton;