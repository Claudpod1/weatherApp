import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const DayWrapper = styled.article`
    .card {
        background: coral;
        text-align:center;
    }
`


const DayCard = props => {
    console.log(props)
    return (
        <Col>
            <DayWrapper>
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

