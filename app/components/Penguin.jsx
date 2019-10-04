const React = require("react");
const Link = require("react-router-dom").Link;

/* the main page for the about route of this app */
const Penguin = function() {
  return (
    <div className="penguin">
      <h1>Qui-qui-qui!</h1>

      <p>This is a penguin!</p>
      <img src="https://cdn.glitch.com/83b3f022-25b2-442f-9ea6-9c382b3f2d5e%2F%D0%BF%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD.png?v=1570199284922"/>

      <div className="link-container">
        <Link to='/main'>Go home</Link>
        <Link to='/about'>About</Link>
      </div>
      
    </div>
  );
};

module.exports = Penguin;
