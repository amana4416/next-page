import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Technologies Used:</h2>
        <ul>
          <li>New York Times Books API</li>
          <li>Google Books API</li>
          <li>React</li>
          <li>Redux</li>
          <li>Sagas</li>
          <li>Passport</li>
          <li>Node</li>
          <li>Express</li>
          <li>Material UI</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
