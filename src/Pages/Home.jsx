import MovieCard from '../Components/MovieCard.jsx';
import React, { useState ,useEffect} from 'react';
import {getPopularMovies,searchMovies} from '../services/api.js';
import '../CSS/Home.css';
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies,setMovies]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    const loadPopularMovies = async () => {
        setLoading(true);
        setError(null);
        try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        } catch (e) {
            console.log("Error loading movies:", e);
            setError("Failed to load movies...");
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        loadPopularMovies();
    },[])
   async function handleSearch(e) {
        e.preventDefault();
       if(!searchQuery.trim()) return;
       if(loading) return;
       setLoading(true);
       try{
           const searchResults=await searchMovies(searchQuery);
           setMovies(searchResults);
           setError(null);
       }catch(e){
         console.log(e);
         setError("Failed to search movies...");
       }finally{
        setLoading(false);
       }
       setSearchQuery("");
    }



    const handleClearSearch = () => {
        setSearchQuery("");
        loadPopularMovies();
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                    className="search-input"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button className="search-button" type="submit">Search</button>
                <button className="search-button" type="button" onClick={handleClearSearch}>Popular</button>
            </form>
            {error && <div className="error">{error}</div>}
             {loading ? (
                <div className="loading">Loading...</div>
             ) : (<div className="movies-grid">
                {movies.map((movie) =>
                   <MovieCard movie={movie} key={movie.id} />
                    )}
            </div>)
             }
        </div>
    );
}
export default Home;