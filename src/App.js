import React from 'react';
import Row from './Row';
import requests from './Requests';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Row title="TOP HORROR" fetchUrl={requests.fetchHorroMovies} />
      <Row title="TOP HORROR" fetchUrl={requests.fetchHorroMovies} />
      <Row title="TOP ACTION" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
