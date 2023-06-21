import{l as r}from"./index-4a06ca2e.js";const a=r`
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
                prices {
                    currency{
                        label,
                        symbol
                    },
                amount
                }
            }
        }
    }`,t=r`
    query GetProductById($id: String!) {
        product (id: $id) {
            id,
            name,
            brand,
            description,
            inStock,
            gallery,
            category,
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
    }`;export{a as G,t as a};
