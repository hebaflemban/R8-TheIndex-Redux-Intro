import React from "react";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

//redux
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">
          <AuthorsList />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
