const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

if (!API_KEY) {
    console.error("TMDB API key is missing. Please add VITE_TMDB_API_KEY to your .env file");
}

// Mock data for testing
const mockMovies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        release_date: "2019-04-26",
        poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
        id: 2,
        title: "Spider-Man: No Way Home",
        release_date: "2021-12-17",
        poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    },
    {
        id: 3,
        title: "Avatar: The Way of Water",
        release_date: "2022-12-16",
        poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    },
    {
        id: 4,
        title: "Black Panther",
        release_date: "2018-02-16",
        poster_path: "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
    },
    {
        id: 5,
        title: "The Batman",
        release_date: "2022-03-04",
        poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
    },
    {
        id: 6,
        title: "Top Gun: Maverick",
        release_date: "2022-05-27",
        poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
    }
];


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