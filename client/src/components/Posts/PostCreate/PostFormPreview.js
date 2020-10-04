import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { submitPost } from "../../../actions";
import { withRouter } from "react-router-dom";
import Logo from "../../Header/web-programming.svg";
import ReactMarkdown from "react-markdown";

const SurveyFormReview = ({ onCancel, formValues, submitPost, history }) => {
  //   const reviewFields = _.map(formFields, ({ name, label }) => {
  //     console.log(formFields[name]);
  //     return (
  //       <div key={name}>
  //         <div>{formValues[name]}</div>
  //       </div>
  //     );
  //   });
  const renderContent = () => {
    console.log(formValues);
    const { heading, subHeading, headerImage, body, tags } = formValues;
    return <ReactMarkdown source={body} />;
  };
  return (
    <div>
      <h5>Please confirm your enteries</h5>
      {/* {reviewFields} */}
      {renderContent()}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green white-text right btn-flat"
        onClick={() => submitPost(formValues, history)}
      >
        Post Blog to
        <img src={Logo} alt="" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.form.postForm.values,
  };
};

const mapDispatchToProps = { submitPost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SurveyFormReview));
