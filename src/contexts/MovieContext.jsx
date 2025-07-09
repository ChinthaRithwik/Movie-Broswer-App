import {useState,useContext,useEffect,createContext} from 'react';
const MovieContext=createContext();
export const useMovieContext=()=> useContext(MovieContext);
export const MovieProvider=({children})=>{
    const [favourites,setFavourites]=useState([]);
    useEffect(()=>{
        const StoredFavs=localStorage.getItem("favourites");
        if(StoredFavs){
            setFavourites(JSON.parse(StoredFavs));
        }
    },[]);
    useEffect(()=>{
         localStorage.setItem("favourites",JSON.stringify(favourites));
    },[favourites]);
    const addToFavourites=(movie)=>{
        setFavourites(p=>[...p,movie]);
    }
    const removeFromFavourites=(movieId)=>{
        setFavourites(p=>p.filter(m=>m.id!==movieId)); 
    }
    const isFavourite=(movieId)=>{
        return favourites.some(m=>m.id===movieId);
    }
    const value={
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
    }
    return (
        <MovieContext.Provider value={value}>
            {children}
    </MovieContext.Provider>
    );
}
