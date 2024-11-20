export const fetchGiphyImages = async (apiKey, limit = 12) => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      return data.data.map(gif => ({
        id: gif.id,
        url: gif.images.fixed_height.url,
        title: gif.title,
      }));
    } catch (error) {
      console.error('Error fetching Giphy images:', error);
      return [];
    }
  };
  