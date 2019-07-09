// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

// Pages.
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import Signup from './components/Signup'
import Main from './components/Main'
import Login from './components/Login'
import Error from './components/error'
import React from 'react';
import './App.css';
import Test from "./components/imgUploader";

function App() {
  return (
  <>
<BrowserView>
    <h1> This is rendered only in browser </h1>
</BrowserView>
<MobileView>
    <h1> This is rendered only on mobile </h1>
</MobileView>    
</>
);
}

export default App;
