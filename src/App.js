import React, { Component } from 'react'
import './App.css'
import Header from "./Header"
import Gallery from "./Gallery"
import Footer from "./Footer"
import Octocat from "./Octocat"
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App
