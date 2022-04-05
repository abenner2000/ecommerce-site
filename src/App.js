import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from "./firebase"
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KjqlNLn1QySbfcbR8T4k1FdskgDZkUm8DkjB7BW4S066PRbVBec6e7AVpKPZWtbVxaulhZOTjFCGIGH2FEwcny900sGmHvKaM');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only runs once when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM styling convention
    <Router>
      <Elements stripe={promise}>
      <div className="app">
        <Routes>
          <Route 
            path = "/orders"
            element={[<Header />, <Orders />]}
          />
          <Route 
            path = "/payment"
            element={[<Header />,<Payment />]}
          />
          <Route 
            path = "/login" 
            element={[<Login />]} 
          />
          <Route 
            path = "/checkout" 
            element={[<Header />, <Checkout />]} 
          />
          <Route 
            path = "/" 
            element={[<Header />, <Home />]} 
          />
        </Routes>
      </div>
      </Elements>
    </Router>
  );
}

export default App;
