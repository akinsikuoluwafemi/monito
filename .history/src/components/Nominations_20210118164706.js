import React, { useContext } from "react";
import CardWrapper from "./CardWrapper";
import NominationList from "./NominationList";
import {  NominatedMoviesContext } from "../ContextFile";
import { connect } from 'react-redux';

 function Nominations() {
  let { nominatedMovies } = useContext(
    NominatedMoviesContext
  );

  return (
    <CardWrapper>
      <h4>Nominations</h4>

      <NominationList nominations={nominatedMovies} />
    </CardWrapper>
  );
 }

 

export default connect() (Nominations);