import React from "react";

// Components
import AuthorCard from "./AuthorCard";

//redux
import {connect} from "react-redux";

const AuthorsList = props => {
  const authorCards = props.authors.map(author => (
    <AuthorCard key={author.id} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
};

const mapStateToProps = state => {return state};

export default connect(mapStateToProps)(AuthorsList);
