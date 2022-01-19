import React from "react";
import { Auth0ProviderWithHistory } from "./Auth0Provider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

const App = () => {
  const { isAuthenticated } = useAuth0();

  console.log("isAuthenticated", isAuthenticated);

  return (
    <Router>
      <Auth0ProviderWithHistory>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <LoginButton />
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
        <Route exact path="/" render={() => <h1>Home page</h1>} />
        <Route path="/about" render={() => <h1>About page</h1>} />
      </Auth0ProviderWithHistory>
    </Router>
  );
};

export { App };
