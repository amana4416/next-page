import React from 'react';
import './AboutPage.css';
//mui imports
import Paper from '@mui/material/Paper';


function AboutPage() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{backgroundColor: '#B7B4A2', width: '300px', height: 'auto', marginTop: '50px', marginLeft: '125px', padding: '15px', display: 'inline-flex' }}
      >
        <section className="techUsed">
        <h3>Technologies Used:</h3>
          <ul>
            <li>New York Times Books API</li>
            <li>Google Books API</li>
            <li>React</li>
            <li>Redux</li>
            <li>Sagas</li>
            <li>Passport</li>
            <li>Postico</li>
            <li>PostgreSQL</li>
            <li>Node</li>
            <li>Express</li>
            <li>Material UI</li>
            <li>Sweet Alert 2</li>
            <li>HTML/CSS</li>
          </ul>
        </section>
      </Paper>
      <Paper
        elevation={3}
        sx={{backgroundColor: '#B7B4A2', width: '300px', height: 'auto', marginTop: '50px', marginLeft: '100px', marginRight: '100px', padding: '15px', display: 'inline-flex' }}
      >
        <section className="contact">
          <h3>Contact Info:</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/aman-abdirazak/">
                LinkedIn
              </a>
              <img src />

            </li>
            <li>
            <a href="https://github.com/amana4416">
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </Paper>
      <Paper
        elevation={3}
        sx={{backgroundColor: '#B7B4A2', width: '300px', height: 'auto', marginTop: '50px', marginRight: '100px', padding: '15px', display: 'inline-flex' }}
      >
        <div className="thanks">
          <h3>Acknowledgements:</h3>
          <ul>
            <li>Thanks to Matt, Kris, Dane, Vada and all of the staff at Prime</li>
            <li>Vonngegut cohort</li>
            <li>Mentors</li>
            <li>Special thanks to all my friends and family</li>
          </ul>
        </div>
      </Paper>
      <Paper 
        elevation={3}
        sx={{backgroundColor: '#B7B4A2', width: '300px', height: 'auto', marginTop: '-205px', marginLeft: '555px', padding: '15px'}}
      >
        <section className="upcoming">
          <h3>Upcoming Features:</h3>
          <ul>
            <li>Ablility to leave comments under books and rate them from 1-5</li>
            <li>Amp up user profile to make it more personal</li>
          </ul>
        </section>
      </Paper>
    </>
  );
}

export default AboutPage;
