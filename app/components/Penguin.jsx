const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const Penguin = function() {
  return (
    <div className="penguin">
      <h1>Qui-qui-qui!</h1>
      <img src=""/>

      <p>This is a penguin!</p>

      <div className="link-container">
        <Link to='/main'>Go home</Link>
        <Link to='/about'>About</Link>
      </div>
      
    </div>
  );
};

module.exports = Penguin;
