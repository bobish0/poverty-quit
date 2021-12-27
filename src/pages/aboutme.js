import React, { Component } from "react";
import {
  Card,
  Chip,
  ChipContact,
  CardTitle,
  CardActions,
  Tooltip,
  Textfield,
  Button,
} from "react-mdl";

import "./news.css";
import "./aboutme.css";

import FooterPage from "../components/FooterPage";
import Profile from "../img/profile_pic.png";
import Github from "../img/github.jpg";
import Logo2 from "../img/logo2.png";

import Hero from "../components/Hero";

class About extends Component {
  render() {
    return (
      <div>
        <Hero />

        <div className="description">
          <br></br>

          <br></br>
          <br></br>
          <div className="layout-design">
            <div className="profile-pic">
              <Card
                shadow={0}
                style={{
                  width: "256px",
                  height: "256px",
                  background: `url(${Profile} ) center / cover`,
                  margin: "auto",
                }}
              >
                <CardTitle expand />
              </Card>
            </div>

            <div className="profile-description">
              <h4>
                <u>ABOUT</u>
              </h4>

              <p>
                My name is <b>Kristian Andreas Boban</b> and i am a Front-End
                Developer.{" "}
              </p>
              <p>
                I know a bit about everything when it comes to Web/App
                Development. You can se some of my qualifications below.{" "}
              </p>
            </div>
          </div>

          <h4>
            <u>QUALIFICATIONS</u>
          </h4>
          <div className="kompetens">
            <div className="front-end">
              <Tooltip label=" HyperText Markup Language" large>
                <Chip>
                  {" "}
                  <ChipContact className="mdl-color--blue mdl-color-text--white">
                    H
                  </ChipContact>{" "}
                  HTML5
                </Chip>
              </Tooltip>
              <Chip>
                {" "}
                <ChipContact className="mdl-color--blue mdl-color-text--white">
                  C
                </ChipContact>
                CSS3
              </Chip>
              <Chip>
                {" "}
                <ChipContact className="mdl-color--blue mdl-color-text--white">
                  B
                </ChipContact>
                Bootstrap 3/4
              </Chip>
            </div>

            <div className="programming">
              <Chip>
                {" "}
                <ChipContact className="mdl-color--purple mdl-color-text--white">
                  J
                </ChipContact>
                Javascript
              </Chip>
              <Chip>
                {" "}
                <ChipContact className="mdl-color--purple mdl-color-text--white">
                  R
                </ChipContact>
                React.js
              </Chip>
              <Chip>
                {" "}
                <ChipContact className="mdl-color--purple mdl-color-text--white">
                  J
                </ChipContact>
                Jquery
              </Chip>
            </div>

            <div className="back-end">
              <Chip>
                {" "}
                <ChipContact className="mdl-color--red mdl-color-text--white">
                  F
                </ChipContact>
                Firebase
              </Chip>
              <Chip>
                {" "}
                <ChipContact className="mdl-color--red mdl-color-text--white">
                  G
                </ChipContact>
                Google Analytics
              </Chip>
              <Chip>
                {" "}
                <ChipContact className="mdl-color--red mdl-color-text--white">
                  W
                </ChipContact>{" "}
                Wordpress
              </Chip>
            </div>

            <div className="styling">
              <Chip>
                {" "}
                <ChipContact className="mdl-color--teal mdl-color-text--white">
                  S
                </ChipContact>
                Sass
              </Chip>
              <Chip>
                {" "}
                <ChipContact className="mdl-color--teal mdl-color-text--white">
                  L
                </ChipContact>
                Less
              </Chip>
              <Chip>
                {" "}
                <ChipContact className="mdl-color--teal mdl-color-text--white">
                  T
                </ChipContact>
                Tailwind
              </Chip>
            </div>
          </div>

          <a target="_blank" href={"https://github.com/bobish0"}>
            <img height="200" src={Github} alt="Github" />
          </a>

          <br></br>

          {/*  <div>

		<h4><u>Contact</u></h4>

	
<Form1/>

<br></br><br></br>


<div className ='timeline-section'>
    <h1>My previous Work</h1>
  	<TimeLine/>
	
</div>

	</div>*/}
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default About;
