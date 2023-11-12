// components/Giphy.js
import axios from 'axios';

const Giphy = ({ searchTerm }) => {
  const fetchGifs = async () => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YOUR_GIPHY_API_KEY&limit=5`
      );

      // Handle the response, e.g., set state with the GIFs
    } catch (error) {
      console.error('Error fetching Giphy:', error);
    }
  };

  return (
    <div>
      <h2>Giphy Results</h2>
      {/* Render the GIFs */}
    </div>
  );
};

export default Giphy;
