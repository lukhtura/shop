import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles({
    header: {
        width: "100%",
        background: "#fff",
        zIndex: "120",
        position: "fixed",
        top: "0",
        left: "0",
        webkitBoxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)",
        boxShadow: "0 5px 25px rgba(0, 0, 0, 0.15)"
    },
    inner: {
        margin: "0 auto",
        width: "100%",
        maxWidth: "1440px",
        maxHeight: "80px",
        display: "flex",
        justifyContent: "space-between"
    },
    categoriesContainer: {
        display: "flex",
        width: "234px",
        height: "80px",
        justifyContent: "space-around"
    },
    category: {
        display: "flex",
        height: "80px",
        alignItems: "center",

        "&:hover": {
            textDecoration: "none",
            color: "#5ece7b",
            borderBottom: "2px solid #5ece7b"
        }
    },
    categoryInner: {
        textDecoration: "none",
        color: "black",
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
    },
    logo: {
        display: "flex",
        alignItems: "center"
    },
    buttonsContainer: {
        width: "234px",
        height: "80px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    btn: {
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "160%",
        cursor: "pointer",
    },
    currencySelectorBtn: {
        display: "flex",
        gap: "5px"
    },
    currencyArrow: {
        display: "flex",
        transition: "0.3s"
    },
    currencyArrowRotated: {
        display: "flex",
        transition: "0.3s",
        transform: "rotate(-180deg)"
    },
    currencyArrowImg: {
        width: "10px"
    },
    cartBtn: {
        display: "flex",
        position: "relative"
    },
    cartBtnCounter: {
        width: "20px",
        height: "20px",
        backgroundColor: "black",
        borderRadius: "50px",
        textAlign: "center",
        color: "#fff",
        fontWeight: "700",
        fontSize: "14px",
        lineHeight: "16px",
        position: "absolute",
        bottom: "10px",
        left: "10px"
    }
});