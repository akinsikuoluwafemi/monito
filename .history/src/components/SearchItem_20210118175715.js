import React, { useState, useContext, useEffect } from "react";
import { NominatedMoviesContext, ShowBannerContext } from "../ContextFile";
import "../Pages/Home.css";
import { clickToNominateMovie, showAlertBanner } from "../actions";
import { connect } from 'react-redux';

 function SearchItem({ movie, clickToNominateMovie }) {
   useEffect(() => {}, []);

   const {nominatedMovies, setNominatedMovies } = useContext(NominatedMoviesContext);

   const [nominated, setNominated] = useState(false);

   const { showBanner, setShowBanner } = useContext(ShowBannerContext);
  const [showBanner, setShowBanner] = useState(false);

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
     
     clickToNominateMovie(movie);


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
    showBanner: state.appState.showBanner,
  };
}

export default connect(mapStateToProps, {
  clickToNominateMovie,
  showAlertBanner,
})(SearchItem);