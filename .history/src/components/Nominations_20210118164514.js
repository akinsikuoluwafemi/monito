import React, { useContext } from "react";
import CardWrapper from "./CardWrapper";
import NominationList from "./NominationList";
import {  NominatedMoviesContext } from "../ContextFile";
import {} from '../'


export default function Nominations() {
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
