import { gql } from "@apollo/client";



export const SEND_ORDER = gql`
mutation createOrderWithBuyer($input: CreateOrderInput!) {
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

