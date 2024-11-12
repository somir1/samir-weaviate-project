import { ApolloServer, gql } from "apollo-server";
import { fetchMarsImages } from "./services/roverService";
import { Photo } from "./types/types";

const typeDefs = gql`
  type Photo {
    img_src: String
    earth_date: String
  }

  type Query {
    hello: String
    getMarsImages(earth_date: String!): [Photo]
  }
`;

const resolvers = {
  Query: {
    hello: (): string => "Hello, Apollo GraphQL with TypeScript!",
    getMarsImages: async (
      _: any,
      { earth_date }: { earth_date: string }
    ): Promise<Photo[]> => {
      return await fetchMarsImages(earth_date); // Pass the formatted date to the service function
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
function convertDateToYYYYMMDD(earth_date: string) {
  throw new Error("Function not implemented.");
}
