import React from "react";
import "../Styles/Style.css"

const styles = { card: { with:"25%" }}


function PortfolioCard(props) {
 return (
   <div>
    <div className="card" style={styles.card} >
    <img className="card-img-top" src={props.image} alt={props.name} />
    <div className="card-body">
    <a href={props.location} className="btn"><h5>{props.name}</h5></a>
    </div>
  </div>
  </div>  



 );
}

export default PortfolioCard;