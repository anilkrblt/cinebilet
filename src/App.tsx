// src/App.tsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import MovieList from './components/MovieList';

const App: React.FC = () => {
  return (
    <>
      <div className="container-fluid text-center p-5">
        <div className="row">
          <Navbar />
        </div>
      </div>

      <div className="container-fluid mt-5 text-center">
        <div className="container mt-3">
          <Tabs />
          <div className="tab-content">
            <div id="vizyondakiler" className="container tab-pane active">
              <MovieList />
            </div>
            <div id="gelecek-filmler" className="container tab-pane fade">
              <br />
              <h3 className="text-white display-3">Gelecek Filmler</h3>
              <p className="text-white display-4">Yakında...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center"></div>
    </>
  );
}

export default App;
