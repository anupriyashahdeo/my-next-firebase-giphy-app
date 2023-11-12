// pages/giphy.js  GlVGYHkr3WSBnllca54iNt0yFbjz7L65
import React, { useState } from "react";
import axios from "axios";
import Auth from "../components/Auth";
import { firebaseApp, auth } from "../firebase";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Giphy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  // State to store user favorites
  const [userFavorites, setUserFavorites] = useState([]);

  const handleSearch = async () => {
    try {
      setLoading(true);

      // Get the user token from Firebase
      const user = auth.currentUser;
      if (!user) {
        console.error("User not authenticated.");
        return;
      }

      // Make a request to the Giphy API
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=30`
      );

      // Set the GIFs in the state
      setGifs(response.data.data);
    } catch (error) {
      console.error("Error searching Giphy:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to add a GIF to favorites
  const addToFavorites = (gif) => {
    setUserFavorites((prevFavorites) => [...prevFavorites, gif]);
  };

  return (
    <Auth>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md w-96 mb-8">
          <h1 className="text-4xl font-bold mb-4">Giphy Search</h1>
          <div className="flex space-x-2">
            <input
              type="text"
              className="p-2 border rounded-md flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter search query"
            />
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={handleSearch}
              disabled={loading}
            >
              Search
            </button>
          </div>
        </div>
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            {/* <Loader type="TailSpin" color="#fff" height={50} width={50} /> */}
          </div>
        )}
        <div className="grid grid-cols-3 gap-4">
          {gifs.map((gif) => (
            <div key={gif.id} className="rounded-md overflow-hidden shadow-md">
              <img
                src={gif.images.fixed_height.url}
                alt={gif.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600">{gif.title}</p>
                <button
                  type="button"
                  className="bg-yellow-500 text-white p-2 rounded-md mt-2"
                  onClick={() => addToFavorites(gif)}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Display User Favorites */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
          {userFavorites.length === 0 ? (
            <p>No favorites yet. Mark some GIFs as favorites!</p>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {userFavorites.map((favorite) => (
                <div
                  key={favorite.id}
                  className="rounded-md overflow-hidden shadow-md"
                >
                  <img
                    src={favorite.images.fixed_height.url}
                    alt={favorite.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{favorite.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Auth>
  );
};

export default Giphy;
