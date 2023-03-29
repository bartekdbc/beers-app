import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import BeerList from "./components/BeerList";
import BeerPage from "./components/BeerPage";
import Header from "./components/Header";
import { toBeerList, toBeerPage } from "./routes";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toBeerPage()}>
          <BeerPage />
        </Route>
        <Route>
          <BeerList path={toBeerList()} />
        </Route>
        <Route>
          <Redirect to={toBeerList()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
