import { gql } from "@apollo/client"

export const GET_QUERY = gql`
  {
    me {
      _id
      username
      email
      bookCount
      saveBooks {
        authors
        description
        title
        bookId
        link
        image
      }
    }
  }
`