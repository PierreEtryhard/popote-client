import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/navbar.css";
import { useAuth } from "../auth/useAuth";
import Signout from "../components/Signout";
import UserContext from "../auth/UserContext";
export default function NavBar() {
  // const { isLoading, isLoggedIn, currentUser } = useAuth();
  const { currentUser } = useContext(UserContext);
  return (
    <>
      {currentUser ? (
        <div className="navbar">
          <div className="container">
            <NavLink exact to="/" activeClassName="is-active">
              <h1>POPOTE</h1>
            </NavLink>
            <div className="menu">
              <NavLink
                to="/search"
                exact
                className="link"
                activeClassName="is-active"
              >
                SEARCH
              </NavLink>

              <NavLink
                to="/favorites"
                exact
                className="link"
                activeClassName="is-active"
              >
                FAVORITES
              </NavLink>
              
              <NavLink
                to="/scanticket"
                className="link"
                activeClassName="is-active"
              >
                Search WITH Scan
              </NavLink>
              <NavLink to="/user" className="link" activeClassName="is-active">
                MY PROFIL
              </NavLink>
              {/* <NavLink
            to="/recipes"
            exact
            className="link"
            activeClassName="is-active"
          >
            RECIPES
          </NavLink> */}

              {/* <NavLink to="/login" className="link" activeClassName="is-active">
            LOG IN
          </NavLink> */}
              {/* <NavLink to="/signout" className="link" activeClassName="is-active">
            LOG OUT
          </NavLink> */}
              <Signout />
              {/* <NavLink to="/signup" className="link" activeClassName="is-active">
            SIGN UP
          </NavLink> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="container">
            <NavLink exact to="/" className="link" activeClassName="is-active">
              <h1>POPOTE</h1>
            </NavLink>
            <div className="menu">
              <NavLink
                to="/search"
                exact
                className="link"
                activeClassName="is-active"
              >
                SEARCH
              </NavLink>
              <NavLink
                to="/favorites"
                exact
                className="link"
                activeClassName="is-active"
              >
                FAVORITES
              </NavLink>
              <NavLink
                to="/scanticket"
                className="link"
                activeClassName="is-active"
              >
                Search WITH Scan
              </NavLink>
              <NavLink to="/user" className="link" activeClassName="is-active">
                MY PROFIL
              </NavLink>

              <NavLink to="/login" className="link" activeClassName="is-active">
                LOG IN
              </NavLink>
              <NavLink
                to="/signup"
                className="link"
                activeClassName="is-active"
              >
                SIGN UP
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
