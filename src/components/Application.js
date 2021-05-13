import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";

import "components/Application.scss";
import Appointment from "components/Appointment";


import DayList from "components/DayList";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = day => setState({ ...state, day });

  const theAppointments = getAppointmentsForDay(state, state.day);
  const appointmentList = theAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={interview} />
    );
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      const [daysResponse, appointmentsResponse, interviewersData] = all;
      const days = daysResponse.data;
      const appointments = appointmentsResponse.data;
      const interviewers = interviewersData.data;
      setState(prev => ({ ...prev, days, appointments, interviewers }));
    }).catch((error) => {
      console.log("Error: ", error);
    });
  }, [])
  console.log(state.interviewers)
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu"><DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
        /></nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentList}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}