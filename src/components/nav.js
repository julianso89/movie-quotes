import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userSignIn, userSignOut } from "../actions";

class Nav extends Component {
  renderLinks() {
    const { auth, signIn, signOut } = this.props;
    if (auth) {
      return (
        <button onClick={signOut} className="yellow btn">
          Log Out
        </button>
      );
    }
    return (
      <button onClick={signIn} className="btn red">
        Sign In
      </button>
    );
  }

  render() {
    const navStyle = {
      padding: "0 8px"
    };

    console.log("User Auth:", this.props.auth);

    return (
      <nav style={navStyle} className="blue darken-4">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Movie Quotes
          </Link>

          <ul className="right">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/public-list">Public List</Link>
            </li>
            <li>
              <Link to="/secret-list">Secret List</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
            <li> { this.renderLinks() } </li>
            <li>
              <Link to="/sign-up">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  console.log("State:", state);
  return {
    auth: state.user.auth
  };
}

export default connect(
  mapStateToProps,
  {
    signIn: userSignIn,
    signOut: userSignOut
  }
)(Nav);
