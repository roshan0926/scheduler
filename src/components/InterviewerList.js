import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function interviewerListItem(props) {
  const interviewerData = props.interviewers;
  const interviewerList = interviewerData.map((interviewer) => {
    return (
      <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.interviewer === interviewer.id}
      setInterviewer={(event) => props.interviewer(interviewer.id)}
      />
    )
  })
  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{interviewerList}</ul>
</section>
  )
};
