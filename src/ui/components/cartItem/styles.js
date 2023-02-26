import { createUseStyles } from "react-jss";



export const useStyles = createUseStyles(
    {
        cartItem: {
            maxWidth: "100%",
            minHeight: "336px",
            margin: "0 auto",
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
        },
        brand: {
            margin: "0 0 16px",
            fontWeight: "600",
            fontSize: "30px",
            lineHeight: "27px",
        },
        name: {
            fontWeight: "400",
            fontSize: "30px",
            lineHeight: "27px",
            margin: "16px 0 20px",
        },
        description: {
            margin: "16px 0 20px",
            fontWeight: "400",
            fontSize: "30px",
            lineHeight: "27px",
        },
        price: {
            margin: "20px 0",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "24px",
        },
        attribute: {
            marginBottom: "10px",
        },
        attrName: {
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "18px",
            margin: "0",
        },
        attrValue: {
            color: "green",
            fontWeight: "700",
            fontSize: "27px",
            margin: "0",
        },
        attrColor: {
            width: "16px",
            height: "16px",
            marginTop: "5px",
        },
        galleryContainer: {
            width: "270px",
            gap: "24px",
            display: "flex",
        },
        counterContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        },
        counterNumber: {
            fontWeight: "500",
            fontSize: "24px",
        },
        counterButton: {
            display: "flex",
            padding: "0",
            fontSize: "37px",
            width: "45px",
            height: "45px",
            background: "white",
            border: "1px solid black",
            fontWeight: "100",
            justifyContent: "center",
            alignItems: "center",
            userSelect: "none",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
                backgroundColor: "black",
                color: "white",
            }
        },
    }
)