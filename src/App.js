import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Components/Home';
import Categories from './Components/Categories';
import Bguide from './Components/Bguide';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dishes from './Components/Dishes';
import RecipeState from './context/recipes/RecipeState';

function App() {

  return (
    <>
      <RecipeState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route exact path="/bguide">
              <Bguide />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/dishes">
              <Dishes />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </RecipeState>
    </>
  );
}

export default App;
