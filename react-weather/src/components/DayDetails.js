import React from "react";
import { Card } from "reactstrap";


const DayDetails = props => {
    return (
        <h2> Detailed Weather Infomation for {props.day}  </h2>
        <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />

                    <p> <strong> High: </strong> {props.high}</p>
                    <p> <strong>Low: </strong> {props.low}</p>
                    <p> <strong> Wind Directions </strong> {props.windDir}</p>
    )
};

export default DayDetails;

