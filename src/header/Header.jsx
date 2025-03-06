import React from "react";
import "./Header.css"; // Özel CSS dosyanı eklediğinden emin ol
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap ekleyelim

export default function Header() {
  return (
    <div>
      {/* Üst Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Udemy Kurslarım</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Alt Navbar */}
      <nav className="navbar custom-sub-navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Platformumuza Hoş Geldiniz</span>
        </div>
      </nav>
    </div>
  );
}