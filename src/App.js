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
import Dishpage from './Components/Dishpage';
import Nodishfound from './Components/Nodishfound';

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
            <Route exact path="/breakfast">
              <Dishes subcategory="Breakfast" />
            </Route>
            <Route exact path="/lunch">
              <Dishes subcategory="Lunch" />
            </Route>
            <Route exact path="/dinner">
              <Dishes subcategory="Dinner" />
            </Route>
            <Route exact path="/dessert">
              <Dishes subcategory="Dessert" />
            </Route>
            <Route exact path="/southindian">
              <Dishes subcategory="Southindian" />
            </Route>
            <Route exact path="/northindian">
              <Dishes subcategory="Northindian" />
            </Route>
            <Route exact path="/indochinese">
              <Dishes subcategory="Indochinese" />
            </Route>
            <Route exact path="/others">
              <Dishes subcategory="Others" />
            </Route>
            <Route exact path="/tea">
              <Dishes subcategory="Tea" />
            </Route>
            <Route exact path="/coffee">
              <Dishes subcategory="Coffee" />
            </Route>
            <Route exact path="/soups">
              <Dishes subcategory="Soup" />
            </Route>
            <Route exact path="/milkshakes">
              <Dishes subcategory="Milkshake" />
            </Route>
            <Route exact path="/sandwiches">
              <Dishes subcategory="Sandwich" />
            </Route>
            <Route exact path="/pizzas">
              <Dishes subcategory="Pizza" />
            </Route>
            <Route exact path="/burgers">
              <Dishes subcategory="Burger" />
            </Route>
            <Route exact path="/dishpage">
              <Dishpage />
            </Route>
            <Route exact path="/nodishfound">
              <Nodishfound/>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </RecipeState>
    </>
  );
}

export default App;