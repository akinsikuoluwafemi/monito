import React, { useState, useContext, useEffect } from "react";
import { NominatedMoviesContext, ShowBannerContext } from "../ContextFile";
import "../Pages/Home.css";
import { nominateMovie } from '../actions';
import { connect } from 'react-redux';

 function SearchItem({ movie, nominateMovie }) {
   useEffect(() => {}, []);

   const { setNominatedMovies } = useContext(NominatedMoviesContext);

   const [nominated, setNominated] = useState(false);

   const { showBanner, setShowBanner } = useContext(ShowBannerContext);

   const nominateMovie = () => {
     if (!showBanner) {
       setNominated((prevValue) => !prevValue);
       let tempObj = { ...movie, isNominated: true };

       alert("Added a nomination");

       setNominatedMovies((prevValue) => [...prevValue, tempObj]);
       localStorage.setItem(
         "n-movies",
         JSON.stringify([...nominatedMovies, tempObj])
       );
       //   console.log(tempObj);
     }

     if (nominatedMovies.length + 1 === 5) {
       setShowBanner(true);
     }
   };

   const nominateAmovie = () => {
     nominateMovie(movie);
   };

   return (
     <ul className="list">
       <li className="list-item">
         {movie.Title}, ({movie.Year})
         <>
           {nominated ? (
             <button className="btn btn-outline-success disabled">
               Nominate
             </button>
           ) : (
             <button
               //  onClick={nominateMovie}
               onClick={nominateAmovie}
               className="btn btn-outline-success"
             >
               Nominate
             </button>
           )}
         </>
       </li>
     </ul>
   );
 }

const mapStateToProps = (state) => {
  console.log(state.appState)
  return {
    nominatedMovies: state.appState.nominatedMovies,
  };
}

export default connect(mapStateToProps, {nominateMovie}) (SearchItem)