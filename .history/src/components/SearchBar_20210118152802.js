import React, { useContext, useState } from "react";
import { AllMoviesContext, QueryContext, LoadingContext } from "../ContextFile";
import axios from "axios";
import { connect } from 'react-redux';
import { fetchMovies, updateQuery } from '../actions';


 function SearchBar(props) {
  

  // let { setAllMovies } = useContext(AllMoviesContext);

  // const { query, setQuery } = useContext(QueryContext);
  const [query, setQuery] = useState("");

  const { setLoading } = useContext(LoadingContext);

  // const getMovies = async () => {
  //   setLoading(true);

  //   let result = await axios
  //     .get(`https://www.omdbapi.com/?apikey=2a3aa076&s=${query}`)
  //     .then(
  //       (response) => {
  //         setAllMovies(response.data.Search);
  //         setLoading(false);
  //       },
  //       (error) => {
  //         console.log(error);
  //         setLoading(false);
  //       }
  //     );
  //   return result;
  // };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    props.updateQuery(e.target.value)
    if (query.length > 2) {
      props.fetchMovies(query)
    }
  };

  const handleSubmit = (e) => {
    setQuery("");
    props.updateQuery('');

    e.preventDefault();
    props.fetchMovies(query);

  };

  //  console.log(props);
  return (
    <div className="card w-100">
      <div className="card-body">
        <form className="mb-2" onSubmit={handleSubmit}>
          <label htmlFor="movie" className="form-label">
            Movie Title
          </label>
          <input
            type="search"
            className="form-control"
            placeholder="search for anything"
            value={query}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
 }

 const mapStateToProps = (state) => {
   console.log(state.appState)
   return {
     movies: state.appState.movies
   }
 }


export default connect(mapStateToProps, {fetchMovies, updateQuery}) (SearchBar);