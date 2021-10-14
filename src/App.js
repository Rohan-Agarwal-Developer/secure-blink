import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Landing></Landing>
    </Fragment>
  );
}

export default App;
