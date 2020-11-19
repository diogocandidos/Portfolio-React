import React from "react";
import "../App.css";
import "../Styles/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
  <div className="container">
    <div className="row">
      <div class="col-md-11 col-sm-12 main-section">
      <h1>About Me</h1>
      <img className="imageAb" src="https://avatars1.githubusercontent.com/u/61811579?s=460&u=c6a20f373afaf2e2aa891715300eac5dc2ba91b5&v=4" alt="Diogo Candido da Silva"/>
      <p>Born and raised in Brazil, I am 33 years old and based in San Diego, California since 2015. I am full stack web developer student currently enrolled in the Coding Boot Camp at UCSD (University of California San Diego).</p><p>In my country I graduated in Pharmaceutical Sciences. After my graduation, I worked for some national pharmaceutical companies. I have always been working with technology, which inspired me to increase my knowledge and skills. I am thrilled to learn a new field where I can apply all the knowledge acquired in this program.</p>
      <p> In my free time, I like to gather with my family and friends, travel, workout, learn new things and listen to music.</p>
      </div>
    </div>
  </div>

);

}

export default About;
