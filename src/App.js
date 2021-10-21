import './App.css';
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import DiscoverPage from "./pages/DiscoverPage"
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* here you define your params, in this case movieId */}
        {/* you can call the params whatever you want */}
        <Route path="/movie/:movieId" component={DetailsPage}/>
        <Route path="/discover" component={DiscoverPage}/>
        <Route exact path="/" component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
