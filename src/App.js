import React from 'react';
import Pictures from "./Pictures"
import HomePage from "./HomePage"
import './App.css';
import { entries } from './EntriesData.js'
import { aboutme } from './AboutMeData.js'
import { homepagedata } from './HomePageData.js'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: 100
  },
  gridList: {
    width: 400,
    height: 775,
  },
  text:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: 500,
    height: 300
  }
}));

const App = () =>{
    const classes = useStyles(); 
    return (
          <Router>
              <section className = "Welcome-text">
                <h1><strong>Hey, I'm Noah Saldaña</strong></h1>
                <section className = "Welcome-sub">
                  <p>iOS Developer - Student Mentor - Human-Centered Designer</p>
                </section>
                <section className = "Nav">
                  <ul id="nav">
                    <Link to="/projects">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="">Etc</Link>
                    <Link to="">Etc</Link>
                    <Link to="">Etc</Link>
                    <Link to="">Etc</Link>
                  </ul>
                </section>
                <section>
                  <GridList cellHeight={500} className={classes.gridList} cols={1}>
                    <GridListTile key={"profile-picture"} cols={1 || 1}>
                      <img src={"https://noahsaldanadesign.com/img/IMG_3958.jpg"} alt={""}/>
                    </GridListTile>
                  </GridList>
                  <GridList cellHeight={500} className={classes.gridList} cols={1}>
                    <GridListTile key={"profile-picture"} cols={1 || 1}>
                      <img src={"https://noahsaldanadesign.com/img/Others/IMG_3000.png"} alt={""}/>
                    </GridListTile>
                  </GridList>
                </section>
              </section>
              
            <Switch>
              <Route path="/projects">
                <ProjectsPage />
              </Route>
              <Route path="/aboutme">
                <AboutMePage />
              </Route>
              <Route path="">
                <ProjectsPage />
              </Route>
            </Switch>
        </Router>
    );
}
export default App;

function ProjectsPage() {
  return <div className="App">
  <header className="App-header">
    <section id = "Pictures">
    
      {entries.map((entry)=>(
        <Pictures
        key = {entry.name}
        name = {entry.name}
        link = {entry.link}
        description = {entry.description}
        />
      ))}
    </section>
  </header>
  </div>;
}
function AboutMePage() {
  return <div className="App">
  <header className="App-header">
    <section id = "Pictures">
    
      {aboutme.map((entry)=>(
        <Pictures
        key = {entry.name}
        name = {entry.name}
        link = {entry.link}
        description = {entry.description}
        />
      ))}
    </section>
  </header>
  </div>;
}

function HomePageDirect() {
  return <div className = "App">
    <header className="App-header">
      <section id = "HomePageInfo">
      {homepagedata.map((entry)=>(
        <HomePage
        key = {entry.title}
        name = {entry.title}
        description  = {entry.description}
        />
      ))}
      </section>
    </header>
  </div>
}
