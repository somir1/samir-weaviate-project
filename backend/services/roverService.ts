import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const nasaImageUrl = process.env.NASA_IMAGE_URL;
const nasaApiKey = process.env.NASA_API_KEY;

export const fetchMarsImages = async (earth_date: string) => {
  if (!nasaImageUrl || !nasaApiKey) {
    throw new Error("Missing NASA API configuration.");
  }

  try {
    const response = await axios.get(nasaImageUrl, {
      params: {
        earth_date,
        api_key: nasaApiKey,
      },
    });

    return response.data.photos.map(
      (photo: { img_src: string; earth_date: string }) => ({
        img_src: photo.img_src,
        earth_date: photo.earth_date,
      })
    );
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
    throw new Error("Failed to fetch data from the NASA API");
  }
};
