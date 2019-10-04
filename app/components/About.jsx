const React = require('react');
const Link = require('react-router-dom').Link

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <h1>About</h1>

      <p>This is a starter react app using react-router-dom to add client-side routes!</p>

      <Link to='/main'>Go home</Link>
      
      <p> </p>
      <Link to='/penguin'>Penguin!</Link>
      
    </div>
  );
}

module.exports = About;