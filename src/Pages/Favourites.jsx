import '../CSS/Favourites.css';
import {useMovieContext} from '../contexts/MovieContext.jsx';
import MovieCard from '../Components/MovieCard.jsx';
function Favourites() {
    const {favourites}=useMovieContext();
    if(favourites.length > 0){
        return(
            <div className="favourites">
                <h2>Your Favourites</h2>
            <div className="movies-grid">
                {favourites.map((movie) =>
                   <MovieCard movie={movie} key={movie.id} />
                    )}
            </div>
        </div>
        ); 
    }
    return(
        <div className="favourites">
            <h2>Favourites</h2>
            <p>Start adding your movies to favourites and they will appear here </p>
        </div>
    );
}
export default Favourites;