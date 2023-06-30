import{n as e}from"./index-a3058b41.js";const a=e`
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
    }`,r=e`
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
    }`;export{a as G,r as a};
