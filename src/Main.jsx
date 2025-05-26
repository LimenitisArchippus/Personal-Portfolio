import { StrictMode } from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './CSS/main.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Examples from './Examples.jsx';
import Experience from './Experience.jsx'

function funcRoot(value) {
  const root = createRoot(document.getElementById(value));
  return root;
}

export function contRender(value) {
  switch (value) {
    case 'Home': //creates a home render in content
      divContent.render(
        <StrictMode>
          <Home />
        </StrictMode>
      );
      break;

    case 'About': //Creates a ABout render in content
      divContent.render(
        <StrictMode>
          <About />
        </StrictMode>
      );
      break;

    case 'Contact': //Creates a Contact Render in content
      divContent.render(
        <StrictMode>
          <Contact />
        </StrictMode>
      );
      break;

    case 'Examples': //Creates a Products Render in content
      divContent.render(
        <StrictMode>
          <Examples />
        </StrictMode>
      );
      break;
    case 'Experience':
      divContent.render(
        <StrictMode>
          <Experience />
        </StrictMode>
      );
      break;
  }
}
function Nav() {
  return (
    <>
      <div className="navigation flex justify-center">
        <button className="nav" onClick={() => contRender('Home')}>
          Home
        </button>
        <button className="nav" onClick={() => contRender('About')}>
          About
        </button>
        <button className="nav" onClick={() => contRender('Contact')}>
          Contact
        </button>
        <button className="nav" onClick={() => contRender('Examples')}>
          Examples
        </button>
        <button className="nav" onClick={() => contRender('Experience')}>
          Experience
        </button>
      </div>
    </>
  );
}

//use for navigation and the like for the main stuff
const divRoot = funcRoot('root');
const divContent = funcRoot('content');

divRoot.render(
  <StrictMode>
    <div className="header">
      <header>
        <h1 className="text-6xl text-center p-1">My Portfolio</h1>

        <Nav />
      </header>
    </div>
  </StrictMode>
);
contRender('Home');