// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Bienvenido a mi página sencilla en React</h1>
      </header>
      <main className="App-body">
        <p>Este es un ejemplo básico de una página en React.</p>
        <ProductList />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Mi Página Sencilla</p>
      </footer>
    </div>
  );
}

export default App;
