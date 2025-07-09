const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

if (!API_KEY) {
    console.error("TMDB API key is missing. Please add VITE_TMDB_API_KEY to your .env file");
}

// Mock data for testing


export const getPopularMovies=async()=>{
    try {
        const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch popular movies');
        }
        const data=await response.json();
        return data.results;
    } catch (error) {
        console.log("API failed, using mock data:", error);
        // Return mock data if API fails
        return mockMovies;
    }
}
export const searchMovies=async(query)=>{
    try {
        const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Failed to search movies');
        }
        const data=await response.json();
        return data.results;
    } catch (error) {
        console.log("Search API failed, filtering mock data:", error);
        // Filter mock data based on query
        return mockMovies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
    }
}