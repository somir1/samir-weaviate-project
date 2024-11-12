"use client";

import { useState } from "react";
import { fetchMarsImages } from "@/apis/api";
import { MarsCard } from "@/marscomponents/marscard";

export default function Home() {
  const [earthDate, setEarthDate] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleFetchImages = async () => {
    setLoading(true);
    setError("");
    setSearchPerformed(true);
    try {
      const fetchedImages = await fetchMarsImages(earthDate);
      setImages(fetchedImages);
    } catch (err) {
      setError("Failed to fetch images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col sm:items-center sm:justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="sm:text-5xl text-xl font-bold mb-6 text-center">
        Mars Rover Image Search
      </h1>
      <p className="text-gray-300 sm:text-lg text-xs text-center max-w-md mb-6">
        Explore stunning images captured by NASA's Mars Rover. Enter a date to
        view images taken on that day and immerse yourself in the Martian
        landscape.
      </p>
      <div className="flex w-full max-w-sm items-center space-x-3 mb-6">
        <input
          type="date"
          placeholder="Enter date (MM-DD-YYYY)"
          value={earthDate}
          onChange={(e) => setEarthDate(e.target.value)}
          className="border border-gray-600 bg-gray-700 text-white p-2 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleFetchImages}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg focus:outline-none"
        >
          Search
        </button>
        <button
          onClick={() => {
            setEarthDate("");
            setImages([]);
            setError("");
            setSearchPerformed(false);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 shadow-md hover:shadow-lg focus:outline-none"
        >
          Reset
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center mt-4">
          <div className="animate-bounce text-white">Loading...</div>
        </div>
      )}

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {images.length > 0
            ? images.map((photo, index) => (
                <div key={index} className="animate-fadeIn">
                  <MarsCard imgSrc={photo.img_src} date={photo.earth_date} />
                </div>
              ))
            : searchPerformed && (
                <p className="text-gray-400 text-center mt-4">
                  No images found. Try another date.
                </p>
              )}
        </div>
      )}
    </div>
  );
}
