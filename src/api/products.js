import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
    query {
        categories {
            name
        }
    }
`

export const GET_ALL_PRODUCTS = gql`
    query {
        category{
            products {
                category,
                id,
                name,
                inStock,
                gallery,
                description,
                brand,
                prices {
                    currency{
                        label,
                        symbol
                    },
                amount
                }
            }
        }
    }
`

export const GET_ONE_PRODUCT_BY_ID = gql`
    query product($id: String!) {
        product (id: $id) {
            id,
            name,
            brand,
            description,
            inStock,
            gallery,
            attributes {
                name,
                items {
                    displayValue,
                    value
                }
            }
            prices {
                amount,
                currency {
                    label,
                    symbol
                }
            }
        }
    }
`