import React, { useContext } from "react";
import CardWrapper from "./CardWrapper";
import NominationList from "./NominationList";
import {  NominatedMoviesContext } from "../ContextFile";
import { connect } from 'react-redux';

 function Nominations({ allNominatedMovies }) {
   let { nominatedMovies } = useContext(NominatedMoviesContext);

   return (
     <CardWrapper>
       <h4>Nominations</h4>

       <NominationList nominations={allNominatedMovies} />
     </CardWrapper>
   );
 }

 const mapStateToProps = (state) => {
  //  console.log(state.appState)
   return {
     allNominatedMovies: state.appState.allNominatedMovies,
   };
 }

export default connect(mapStateToProps) (Nominations);