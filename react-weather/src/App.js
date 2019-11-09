import React, { useState } from 'react';
import { Col, Row, Container } from "reactstrap";
import moment from "moment";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";
import sampleData from "./data/sample.json";



const App = () => {

  const [day, setDay] = useState("Monday");
  const [data, setData] = useState({
    days: sampleData.data,
    location: "Denver,CO",
    selectedNull: null,
    searchTerm: ""
  })

  const { days, location, selectedDay, searchTerm } = data;

  const setSelectedDay = day => {
    setData({
      ...data, // copy in the existing state so we dont lose it 
      selectedDay: day,

    })
  }

  const handleInputChange = event => {
    setData({
      ...data,
      searchTerm: event.target.value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    alert("handlesubmit")
  }

  return (
    <Container>
      <Row>
        <Col md={8}> <h1> Weather for {location} </h1></Col>
        <Col md={4}><SearchBar
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit} /></Col>
      </Row>

      <Row>
        {days.map(day => (
          <DayCard
            key={day.ts}
            day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
            current={day.temp}
            low={day.min_temp}
            icon={day.weather.icon}
            description={day.weather.description}
            setSelectedDay={() => setSelectedDay(day)}
            isActive={day === selectedDay}
          />
        ))}
      </Row>

      <Row>
        {/* <DayDetails 
          day={moment(selectedDay.valid_date,"YYYY-MM-DD").format("dddd , MMMM , Do, YYYY")}
          current={selectedDay.temp}
          low={selectedDay.min_temp}
          icon={selectedDay.weather.icon}
          description={selectedDay.weather.description}
          windSpeed={selectedDay.wind_spd}
          windDir={selectedDay.wind_cdir_full}
          precip={selectedDay}
          /> */}
        <Col>
          {selectedDay ? (
            day = { moment(selectedDay.valid_date, "YYYY-MM-DD").format("dddd ,MMMM Do, YYYY")}
          current={selectedDay.temp}
          low={selectedDay.min_temp}
          icon={selectedDay.weather.icon}
          description={selectedDay.weather.description}
          windSpeed={selectedDay.wind_spd}
          windDir={selectedDay.wind_cdir_full}
          precip={selectedDay}
          )
        : (
          <h3> Click on a day above to get weather details</h3>
          )}
        </Col>
      </Row>

    </Container>
  );
}

export default App;
