import React, { useState, useContext, useEffect } from "react";
import { NominatedMoviesContext, ShowBannerContext } from "../ContextFile";
import "../Pages/Home.css";
import { clickToNominateMovie, showAlertBanner } from "../actions";
import { connect } from 'react-redux';

//  function SearchItem(props) {
// console.log(props)
 function SearchItem({ movie, clickToNominateMovie, allNominatedMovies , showAbanner, showAlertBanner}) {
   useEffect(() => {}, []);

   const { nominatedMovies, setNominatedMovies } = useContext(
     NominatedMoviesContext
   );

   const [nominated, setNominated] = useState(false);

   //  const { showBanner, setShowBanner } = useContext(ShowBannerContext);
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






     if (allNominatedMovies.length + 1 === 5) {
      alert('you nominated 5 already')
      //  setShowBanner(true);
       showAlertBanner()
     }
   };
    console.log(showAbanner);

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
  // console.log(state.appState)
  return {
    allNominatedMovies: state.appState.allNominatedMovies,
    showAbanner: state.appState.showAbanner,
    alreadyNominated: state.appState.alreadyNominated,
  };
}

export default connect(mapStateToProps, {
  clickToNominateMovie,
  showAlertBanner,
})(SearchItem);