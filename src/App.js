import Home from "Pages/Home/Home";
import ProductList from "Pages/ProductList/ProductList";
import ProductDetail from "Pages/ProductDetail/ProductDetail";
import Register from "Pages/Register/Register";
import Login from "Pages/Login/Login";
import Cart from "Pages/Cart/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SuccessPage from "Pages/SuccessPage/SuccessPage";

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
