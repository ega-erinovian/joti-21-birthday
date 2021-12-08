import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Message from "./component/Message";
import Album from "./component/Album";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/album" component={Album} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
