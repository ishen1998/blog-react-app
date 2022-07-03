import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { SpinLoading } from "antd-mobile";
import routes from "./router/index";
import MyTabBar from "./component/TabBar";
import MyNavBar from "./component/NavBar";
import "./App.scss";
function App(props) {
  const history = props.history;
  console.log(history);
  if (history.location.state === undefined) {
    history.location.state = { showNavBar: false, showTabBar: false };
  }
  return (
    <div className="app">
      {history.location.state.showNavBar ? <MyNavBar /> : null}
      <div className="content">
        <Suspense
          fallback={
            <SpinLoading
              color="primary"
              style={{
                "--size": "48px",
                margin: "auto",
                marginTop: "50%"
              }}
            />
          }
        >
          <Switch>
            {routes.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                component={item.component}
              />
            ))}
            <Redirect
              to={{
                pathname: "/welcome",
                state: { showTabBar: false, showNavBar: false }
              }}
            />
          </Switch>
        </Suspense>
      </div>

      {history.location.state.showTabBar ? (
        <MyTabBar className="tabBar" />
      ) : null}
    </div>
  );
}

export default App;
