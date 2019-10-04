const React = require('react');
const Link = require('react-router-dom').Link

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <h1>About</h1>

      <p>This is a starter react app using react-router-dom to add client-side routes!</p>
      <div className="link-container">
        <Link to='/main'>Go home</Link>
        <Link to='/penguin'>Penguin!</Link>
      </div>
    </div>
  );
}

module.exports = About;