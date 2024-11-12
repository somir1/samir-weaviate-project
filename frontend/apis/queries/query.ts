import { gql } from "@apollo/client";

export const GET_MARS_IMAGES = gql`
  query GetMarsImages($earthDate: String!) {
    getMarsImages(earth_date: $earthDate) {
      earth_date
      img_src
    }
  }
`;
