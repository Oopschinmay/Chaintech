import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react';
import AuthProvider from './components/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    )
  }
}
