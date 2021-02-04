import React from "react";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = state => state;

function JobDetails(props) {
  const jobDetailsAsHTML = () => {
    return { __html: props.selectedJob.description };
  };

  return (
    <Container className="my-5">
      <div id="job-detail-main">
        <h1 className="font-weight-bold mb-0">
          {props.selectedJob.title} - {props.selectedJob.type}
        </h1>
        <h3 className="mb-4">{props.selectedJob.location} </h3>
        <div className="d-flex mb-5">
          <img
            src={props.selectedJob.company_logo}
            className="mr-3 h-25 w-25"
            alt="company-logo"
          />
          <div>
            <h5 className="font-weight-bold mb-0">
              {props.selectedJob.company}
            </h5>
            <a href={props.selectedJob.company_url} target="_blank">
              {props.selectedJob.company_url}
            </a>
          </div>
        </div>
        <div dangerouslySetInnerHTML={jobDetailsAsHTML()}></div>
        <Button variant="dark" className="px-5 py-3 mt-5">
          Apply Now!
        </Button>
      </div>
    </Container>
  );
}

export default connect(mapStateToProps)(JobDetails);
