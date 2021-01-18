import React, { useContext, useEffect } from "react";
import CardWrapper from "./CardWrapper";
import "../Pages/Home.css";
import { AllMoviesContext, QueryContext } from "../ContextFile";
import SearchList from "./SearchList";
import { connect } from 'react-redux';



 function SearchResults(pr) {
  useEffect(() => {}, []);

  const { allMovies } = useContext(AllMoviesContext);

  const { query } = useContext(QueryContext);
   console.log(props.query)
   console.log(props.movies)
  return (
    <CardWrapper>
      {query && <h4>Results for "{query}"</h4>}

      <SearchList movies={allMovies} />
    </CardWrapper>
  );
 }

 const mapStateToProps = (state) => {
   console.log(state.appState)
   return {
     movies: state.appState.movies,
   };
 }

export default connect(mapStateToProps) (SearchResults);