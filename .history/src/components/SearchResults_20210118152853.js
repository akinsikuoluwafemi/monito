import React, { useContext, useEffect } from "react";
import CardWrapper from "./CardWrapper";
import "../Pages/Home.css";
import { AllMoviesContext, QueryContext, All } from "../ContextFile";
import SearchList from "./SearchList";
import { connect } from 'react-redux';



 function SearchResults(props) {

  const { allMovies } = useContext(AllMoviesContext);

  //  const { query } = useContext(QueryContext);
   

  return (
    <CardWrapper>
      {props.query && <h4>Results for "{props.query}"</h4>}

      <SearchList movies={props.movies} />
    </CardWrapper>
  );
 }

 const mapStateToProps = (state) => {
   return {
     movies: state.appState.movies,
     query: state.appState.query
   };
 }

export default connect(mapStateToProps) (SearchResults);