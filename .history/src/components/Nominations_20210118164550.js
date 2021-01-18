import React, { useContext } from "react";
import CardWrapper from "./CardWrapper";
import NominationList from "./NominationList";
import {  NominatedMoviesContext } from "../ContextFile";
import {clickToNominateMovie } from '../actions';
import {conn } from 'react-redux';

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