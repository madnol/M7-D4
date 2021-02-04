import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import "../style/MainSearch.css";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  storeSearchResults: searchResults =>
    dispatch({ type: "STORE_SEARCH_RESULTS", payload: searchResults }),
  storeRecentSearch: searchTerm =>
    dispatch({ type: "ADD_RECENT_SEARCH", payload: searchTerm }),
  setError: error => dispatch({ type: "SET_ERROR", payload: error }),
  showErrors: boolean => dispatch({ type: "DISPLAY_ERRORS", payload: boolean }),
});

function MainSearch(props) {
  const [searchInput, setSearchInput] = useState({
    job: "",
    location: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const inputUpdateHandler = event => {
    setSearchInput({
      ...searchInput,
      job: inputUpdateJobHandler(),
      location: inputUpdateLocationHandler(),
    });
  };

  const inputUpdateJobHandler = event => {
    setSearchInput({ ...searchInput, job: event.target.value });
  };

  const inputUpdateLocationHandler = event => {
    setSearchInput({ ...searchInput, location: event.target.value });
  };

  const searchHandler = async e => {
    e.preventDefault();
    try {
      if (props.searchResults.length !== 0) {
        props.storeSearchResults([]);
      }
      setIsLoading(true);
      const response = await fetch(
        // https://cors--anylocation.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.job}&location=${this.state.location}
        ` https://cors--anylocation.herokuapp.com/https://jobs.github.com/positions.json?description=${searchInput.job}&location=${searchInput.location}`
      );

      const data = await response.json();
      if (data) {
        setTimeout(() => {
          props.storeSearchResults(data);
          props.storeRecentSearch(searchInput);
          setSearchInput({
            job: "",
            location: "",
          });
          setIsLoading(false);
        }, 1000);
      } else {
        props.setError(data);
        props.showErrors(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    props.storeSearchResults([]);
  }, []);

  console.log(props.searchResults);
  return (
    <Container className="mt-5">
      <h1 className="mt-4" style={{ fontWeight: 800, textAlign: "center" }}>
        Strive-Job
      </h1>
      {/* //SearchBar */}
      <Row className="d-flex space-between">
        <Col></Col>
        <Col>
          <div className="home__searchBar mt-4">
            <form
              onSubmit={e => searchHandler(e)}
              className="d-flex justify-content-center"
            >
              <input
                value={searchInput.what}
                onChange={event => inputUpdateJobHandler(event)}
                type="text"
                placeholder="job postion"
              />

              <input
                value={searchInput.where}
                onChange={event => inputUpdateLocationHandler(event)}
                type="text"
                placeholder="job location"
              />
              <button>Search</button>
            </form>
          </div>
        </Col>
        <Col></Col>
      </Row>

      <div id="search-results" className="mt-4">
        {isLoading && (
          <div className="d-flex align-items-center">
            <Spinner className="mx-auto" animation="border" variant="dark" />
          </div>
        )}
        <Row>
          {props.searchResults.length > 0 &&
            props.searchResults.map((result, index) => (
              <SearchResult key={index} data={result} />
            ))}
        </Row>
      </div>
    </Container>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);
