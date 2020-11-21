import React from "react";
import "../App.css";
import PortfolioCard from "../Components/PortfolioCard";
import Projects from "../Components/Projects/Projects.json"
import "../Styles/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const Portfolio = () => {
  return (
  <div className="container">
    <div className="row">
      <div class="col-md-11 col-sm-12 main-section">
        <h1>Portfolio</h1>

        <div className="row portfolio">
            <PortfolioCard 
            name={Projects[0].name}
            image={Projects[0].image}
            location={Projects[0].location}
            /> <br/>

            <PortfolioCard 
            name={Projects[1].name}
            image={Projects[1].image}
            location={Projects[1].location}
            />    
      
            <PortfolioCard 
            name={Projects[2].name}
            image={Projects[2].image}
            location={Projects[2].location}
            />

            <PortfolioCard 
            name={Projects[3].name}
            image={Projects[3].image}
            location={Projects[3].location}
            />    
      
            <PortfolioCard 
            name={Projects[4].name}
            image={Projects[4].image}
            location={Projects[4].location}
            />

            <PortfolioCard 
            name={Projects[5].name}
            image={Projects[5].image}
            location={Projects[5].location}
            />    

            <PortfolioCard 
            name={Projects[6].name}
            image={Projects[6].image}
            location={Projects[6].location}
            />

            <PortfolioCard 
            name={Projects[7].name}
            image={Projects[7].image}
            location={Projects[7].location}
            />    
      </div>

     
      </div>
    </div>
  </div>
);
}
  

export default Portfolio;
