//PATHS FOR ROUTES

interface Paths {
  [key: string]: string;
}

export const paths: Paths = Object.freeze({
  main: "/",
  cart: "/cart",
  product: "/:productId",
  page404: "*"
});