const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const Penguin = function() {
  return (
    <div>
      <h1>Qui-qui-qui!</h1>

      <p>This is a penguin!</p>

      <Link style={{'margin-bottom': '150px'}} to="/main">Go home</Link>
      
      <p></p>
      <Link to="/about">About</Link>
    </div>
  );
};

module.exports = Penguin;
