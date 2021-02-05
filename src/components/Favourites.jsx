import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setSelectedJob: job => dispatch({ type: "SET_SELECTED_JOB", payload: job }),
  removeFromFavourites: job =>
    dispatch({ type: "REMOVE_FAVOURITE", payload: job }),
});

function Favourites(props) {
  const history = useHistory();

  const moreDetailsHandler = (id, data) => {
    props.setSelectedJob(data);
    history.push(`/${id}`);
  };

  return (
    <Container>
      <div id="job-detail-main">
        <h1 className="text-center">Your Favourites</h1>
        {props.user.favourites.length === 0 && (
          <h6 className="text-center">Favourites is currently empty.</h6>
        )}
        <Row>
          {props.user.favourites.map(favourite => (
            <Col xs={6}>
              <div className="search-result mb-3 border p-5 rounded rounded-3 border-dark border-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="font-weight-bold mb-0">{favourite.title}</h2>
                  <i
                    className="fas fa-star pl-4 rotate-in-2-cw"
                    onClick={() => props.removeFromFavourites(favourite)}
                  ></i>
                </div>
                <p className="font-weight-bold mb-3">{favourite.location}</p>
                <div className="d-flex">
                  <img
                    src={favourite.company_logo}
                    className="mr-3 h-25 w-25"
                    alt="company-logo"
                  />
                  <div>
                    <h5 className="font-weight-bold mb-0">
                      {favourite.company}
                    </h5>
                    <a href={favourite.company_url} target="_blank">
                      {favourite.company_url}
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-end mt-4">
                  <p className="job-type mb-0">{favourite.type}</p>
                  <Button
                    variant="dark"
                    className="px-4 mb-0"
                    style={{ fontSize: 14 }}
                    onClick={() => moreDetailsHandler(favourite.id, favourite)}
                  >
                    More details...
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
