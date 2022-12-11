import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import appRoutes from "routing/routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {appRoutes.map((route) => (
          <Route path={route.path} exact={route.exact}>
            <>
              <Header />
              <route.component />
              <Footer />
            </>
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
