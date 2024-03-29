import { gql } from "@apollo/client";


export const GET_ALL_PRODUCTS = gql`
    query {
        category {
            products  {
                category,
                id,
                name,
                inStock,
                gallery,
                description,
                brand,
                attributes{
                  id,
                  name,
                  type,
                  items{
                    value,
                    displayValue,
                    id,
                  },
                },
                prices {
                    currency{
                        label,
                        symbol
                    },
                amount
                }
            }
        }
    }`;

export const GET_PRODUCT_BY_ID = gql`
    query GetProductById($id: String!) {
        product (id: $id) {
            id,
            name,
            brand,
            description,
            inStock,
            gallery,
            category,
            attributes{
                  id,
                  name,
                  type,
                  items{
                    value,
                    displayValue,
                    id,
                  },
            },
            prices {
                currency {
                    label,
                    symbol
                },
                amount
              }
        }
    }`;