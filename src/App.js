import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import {
  EditMovie,
  MovieDetails,
  MovieList,
  NewMovie,
  NotFound,
} from "./pages";
import { Navbar, Header } from "./components";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
