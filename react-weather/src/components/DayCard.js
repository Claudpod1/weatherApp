import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const DayWrapper = styled.article`
    .card {
        border: ${props => props.isActive ? "2px solid teal" : "1pm solid limegreen"};
        background: coral;
        text-align:center;
    }

    img {
        width: 50px;
    }
`


const DayCard = props => {
    console.log(props)
    return (
        <Col onClick={props.setSelectedDay}>
            <DayWrapper isActive ={props.isActive}>
                <Card>
                    <CardHeader>{props.day}</CardHeader>
                    <CardBody><h2>{props.current}</h2></CardBody>
                    <p> <strong> High: </strong> {props.high}</p>
                    <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />

                    <p> <strong> High: </strong> {props.low}</p>
                </Card>
            </DayWrapper>
        </Col>

    )
}

export default DayCard;

