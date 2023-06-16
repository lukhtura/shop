import { gql } from "@apollo/client";



export const SEND_ORDER = gql`
mutation CreateOrderWithBuyer($input: CreateOrderInput!) {
  createOrderWithBuyer(input: $input) {
    buyerID,
    date
    products {
      id
      price
      currency
    }
  }
}
`

