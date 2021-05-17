import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from 'prop-types';

const interviewerList = function (props) {
    const interviewersData = props.interviewers;
  const interviewersList = interviewersData.map((interviewer) => {
    const { id, name, avatar } = interviewer;
  
      return (
        <InterviewerListItem
          key={id}
          name={name}
          avatar={avatar}
          selected={id === props.value}
          setInterviewer={event => props.onChange(id)}
        />
      )
    })
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersList}</ul>
    </section>
  )
};

interviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default interviewerList;