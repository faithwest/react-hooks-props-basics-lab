import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
const user = {
  name: 'Your Name',
  city: 'Your City',
};

const bio = 'Your bio here';
const github = 'Your GitHub link here';
const linkedin = 'Your LinkedIn link here';

function App() {
  return (
    <div className="App">
    <Home {...user} />
    <About bio={bio} github={github} linkedin={linkedin} />
    <Links github={github} linkedin={linkedin} />
  </div>
  );
}

export default App;
