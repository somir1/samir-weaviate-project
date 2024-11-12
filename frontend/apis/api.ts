import client from "@/apolloClient";
import { GET_MARS_IMAGES } from "./queries/query";

export const fetchMarsImages = async (earthDate: string) => {
  try {
    const { data } = await client.query({
      query: GET_MARS_IMAGES,
      variables: { earthDate },
    });
    return data.getMarsImages;
  } catch (error) {
    console.error("Error fetching Mars images:", error);
    throw error;
  }
};
