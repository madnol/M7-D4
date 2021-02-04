import React, { useState, useEffect } from "react";
import { Col, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { MdFavorite } from "react-icons/md";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setSelectedJob: job => dispatch({ type: "SET_SELECTED_JOB", payload: job }),
  addToFavourites: job => dispatch({ type: "ADD_NEW_FAVOURITE", payload: job }),
  removeFromFavourites: job =>
    dispatch({ type: "REMOVE_FAVOURITE", payload: job }),
});

function SearchResults(props) {
  const [isFavourited, setIsFavourited] = useState(false);
  let history = useHistory();

  const moreDetailsHandler = () => {
    props.setSelectedJob(props.data);
    history.push(`/${props.data.id}`);
  };

  useEffect(() => {
    if (
      props.user.favourites.filter(favourite => favourite.id === props.data.id)
        .length === 1
    ) {
      setIsFavourited(true);
    } else {
      setIsFavourited(false);
    }
  }, []);

  useEffect(() => {
    if (
      props.user.favourites.filter(favourite => favourite.id === props.data.id)
        .length === 1
    ) {
      setIsFavourited(true);
    } else {
      setIsFavourited(false);
    }
  }, [props.user.favourites]);

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.data.location}
          </Card.Subtitle>
          <Card.Text>
            <p className="job-type mb-0">{props.data.type}</p>
          </Card.Text>
          <Button variant="dark" className="m-2" onClick={moreDetailsHandler}>
            Details
          </Button>

          <Card.Link href={props.data.company_url}>website</Card.Link>
          <MdFavorite
            className="ml-2 "
            style={isFavourited ? { color: "#EE502E" } : { color: "#000" }}
            onClick={
              isFavourited
                ? () => props.removeFromFavourites(props.data)
                : () => props.addToFavourites(props.data)
            }
          />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
