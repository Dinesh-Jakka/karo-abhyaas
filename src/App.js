import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Classes from "./components/Classes";
import Products from './components/Products'
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import CartContext from "./context/CartContext";
import About from './components/About'
import Account from './components/Account'
import SignUp from './components/SignUp'

import "./App.css";

class App extends Component {
  state = {
    cartList: [],
  };

  addCartItem = (product) => {
    const {cartList}=this.state 
    const isAlreadyItem=cartList.find(each=>each.id===product.id)
    if(!isAlreadyItem){
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, product],
      }));
    }
  };

  deleteCartItem = (id) => {
    const {cartList}=this.state 
    const updatedList=cartList.filter(each=>each.id!==id)
    this.setState({cartList:updatedList})
  };

  removeAllItems=()=>{
    this.setState({cartList:[]})
  }

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
            removeAllItems: this.removeAllItems,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/sign-up" component={SignUp} />
            <ProtectedRoute exact path="/classes" component={Classes} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute exact path="/about-us" component={About} />
            <ProtectedRoute exact path="/account" component={Account} />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;


