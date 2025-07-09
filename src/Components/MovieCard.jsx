import '../CSS/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';
function MovieCard({movie}){
    const {isFavourite,addToFavourites,removeFromFavourites}=useMovieContext();
    const favourite=isFavourite(movie.id);
    function onFavouriteClick(e){
        e.preventDefault();
        if(favourite) {
            removeFromFavourites(movie.id);
        }else{
            addToFavourites(movie);
        }
    }
    return(
    <div className="movie-card">
        <div className="movie-poster">
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750/cccccc/666666?text=No+Image'}
                alt={movie.title}
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x750/cccccc/666666?text=No+Image';
                }}
            />
            <div className="movie-overlay">
                <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}> ♥</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date ? movie.release_date.split("-")[0] : 'Unknown'}</p>
        </div>
    </div>
    )
}
export default MovieCard;